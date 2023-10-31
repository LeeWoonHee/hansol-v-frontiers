<template>
  <div class="ad-input-wrapper">
    <input
        class="w-full ad-input"
        :class="inputClass"
        :label-placeholder="labelPlaceholder"
        :placeholder="placeholder"
        @focus="modal = !disabled"
        readonly
        :value="fullAddress"
    />

    <vs-popup
        title="주소 검색" :fullscreen="$store.state.windowWidth < 1024"
        :classContent="$store.state.windowWidth < 1024 ? 'w-full h-screen fullScreen' : 'w-full h-screen'"
        :active.sync="modal"
        @keypress.esc="modal = false"
    >
      <daum-address
          :active="modal" @close="modal = false"
          @update:postcode="(val) => $emit('update:postcode', val)"
          @update:oldAddress="(val) => $emit('update:oldAddress', val)"
          @update:roadAddressEnglish="(val) => $emit('update:roadAddressEnglish', val)"
          @update:jibunAddressEnglish="(val) => $emit('update:jibunAddressEnglish', val)"
          class="w-full h-full"
          :style="$store.state.windowWidth < 1024 ? {fontSize: '.8rem'} : {fontSize: '1rem'}"
          v-model="mapObject"
      ></daum-address>
    </vs-popup>
  </div>
</template>

<script>
import DaumAddress from './DaumAddress'

export default {
  name      : 'AddressInput',
  components: { DaumAddress },
  props     : {
    value           : {
      type: [ Object, String ]
    },
    labelPlaceholder: {
      type   : String,
      default: null
    },
    placeholder     : {
      type   : String,
      default: null
    },
    inputClass      : {
      type   : [ String, Array ],
      default: null
    },
    type            : {
      type   : String,
      default: 'address'
    },
    disabled        : {
      type   : Boolean,
      default: false
    }
  },
  watch     : {
    localValue: {
      deep: true,
      handler(val) {
        if (val) {
          if (typeof val === 'object' && val.address) {
            const geocoder = new daum.maps.services.Geocoder()

            geocoder.addressSearch(val.address, (result, status) => {
              if (status === daum.maps.services.Status.OK) {
                const {
                        x,
                        y
                      } = result[0]

                this.$emit('input', Object.assign(val, {
                  lat: y,
                  lng: x
                }))
              }
              else {
                this.$emit('input', Object.assign(val, {
                  lat: null,
                  lng: null
                }))
              }
            })
          }
          else {
            this.$emit('input', val)
          }
        }
        else {
          this.localValue = null
          this.mapObject = null
        }
      }
    }
  },
  computed  : {
    fullAddress() {
      if (this.mapObject && Object.keys(this.mapObject).length > 0) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
        // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
        let fullRoadAddr = this.mapObject.roadAddress
        // 도로명 주소 변수
        let extraRoadAddr = ''
        // 도로명 조합형 주소 변수
        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
        if (this.mapObject.bname !== '' && /[동|로|가]$/g.test(this.mapObject.bname)) {
          extraRoadAddr += this.mapObject.bname
        }
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if (this.mapObject.buildingName !== '' || this.mapObject.apartment === 'Y') {
          extraRoadAddr += (extraRoadAddr !== '' ? `, ${ this.mapObject.buildingName }` : this.mapObject.buildingName)
        }
        // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if (extraRoadAddr !== '') {
          extraRoadAddr = ` (${ extraRoadAddr })`
        }
        // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
        if (fullRoadAddr !== '') {
          fullRoadAddr += extraRoadAddr
        }
        if (this.type === 'address') {
          this.localValue = fullRoadAddr
        }
        else {
          Object.assign(this.localValue, {
            fullRoadAddr
          })
        }
        return fullRoadAddr
      }
      else {
        return ''
      }
    }
  },
  methods   : {
    getFullAddress(data) {
      if (data && Object.keys(data).length > 0) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
        // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
        let fullRoadAddr = data.roadAddress
        // 도로명 주소 변수
        let extraRoadAddr = ''
        // 도로명 조합형 주소 변수
        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
          extraRoadAddr += data.bname
        }
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if (data.buildingName !== '' || data.apartment === 'Y') {
          extraRoadAddr += (extraRoadAddr !== '' ? `, ${ data.buildingName }` : data.buildingName)
        }
        // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if (extraRoadAddr !== '') {
          extraRoadAddr = ` (${ extraRoadAddr })`
        }
        // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
        if (fullRoadAddr !== '') {
          fullRoadAddr += extraRoadAddr
        }

        return fullRoadAddr
      }
      else {
        return ''
      }
    }
  },
  data      : () => ({
    modal     : false,
    localValue: null,
    mapObject : null
  })
}
</script>

<style scoped lang="scss">
.ad-input-wrapper::v-deep {
  .ad-input {
    border-radius: unset;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #898989;
  }
}

</style>

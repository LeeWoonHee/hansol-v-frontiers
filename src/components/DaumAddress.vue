<template>
  <div ref="daum" id="daum_wrapper">

  </div>
</template>

<script>
export default {
  name: 'DaumAddress',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    value: {}
  },
  watch: {
    active: {
      handler (val, old) {
        if (old !== val && val) {
          const that = this
          // eslint-disable-next-line no-undef
          new daum.Postcode({
            oncomplete (data) {
              that.$emit('input', data)
              if (data.zonecode) that.$emit('update:postcode', data.zonecode)
              if (data.jibunAddress) that.$emit('update:oldAddress', data.jibunAddress)
              if (data.roadAddressEnglish) that.$emit('update:addressEng', data.roadAddressEnglish)
              if (data.jibunAddressEnglish) that.$emit('update:addressEng', data.jibunAddressEnglish)
              that.$emit('selected', data)
              that.$refs['daum'].style.height = 0
              that.$emit('close')
              that.$emit('update:active')
            },
            onresize (size) {
              that.$refs['daum'].style.height = `${size.height}px`
              // that.$refs['daum'].style.width = `${size.width}px`
            },
            width: '100%',
            height: '100%'
          }).embed(that.$refs['daum'])
          that.$refs['daum'].style.display = 'block'
        }
      }
    }
  },
  computed: {},
  methods: {
    fullAddress (data) {
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
          extraRoadAddr += (extraRoadAddr !== '' ? `, ${data.buildingName}` : data.buildingName)
        }
        // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if (extraRoadAddr !== '') {
          extraRoadAddr = ` (${extraRoadAddr})`
        }
        // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
        if (fullRoadAddr !== '') {
          fullRoadAddr += extraRoadAddr
        }

        return fullRoadAddr
      } else {
        return ''
      }
    }
  },
  created () {
  },
  mounted () {
    const that = this
    this.$loadScript('//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js')
        .then(() => {
          if (this.active) {
            // eslint-disable-next-line no-undef
            new daum.Postcode({
              oncomplete (data) {
                that.$refs['daum'].style.height = 0
                if (this.valueType === 'address') that.$emit('input', this.fullAddress(data))
                else that.$emit('input', data)
                that.$emit('selected', data)
                that.$emit('close')
              },
              onresize (size) {
                that.$refs['daum'].style.height = `${size.height}px`
                // that.$refs['daum'].style.width = `${size.width}px`
              },
              width: '100%',
              height: '100%'
            }).embed(that.$refs['daum'])
            that.$refs['daum'].style.display = 'block'
          }
        })
  },
  destroyed () {
    this.$unloadScript('//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js')
  }
}
</script>

<style scoped>

</style>

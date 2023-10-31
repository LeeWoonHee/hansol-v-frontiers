<template>
  <section class="development__area">
    <div class="container g-0 line pt-130 pb-150">

      <div class="row">
        <div class="developmentTitle">
          <button><</button>
          <h2>V FRONTIERS 2기</h2>
          <button>></button>
        </div>
        <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">

          <div class="line-3"></div>
          <div class="sec-title-wrapper">
            <h3 class="sec-title">PICTURES</h3>
            <h2 class="sec-subTitle animation__char_come">프로그램 진행 사진</h2>
          </div>
        </div>
        <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
          <div class="development__wrapper">
            <div class="development__content">
              <p>한솔 V FRONTIERS는 각 산업을 선도할 수 있는 혁신적인 스타트업을 발굴하고 지원하여 탄탄한 산업 생태계를 구축해 나가는 것을 목표로 합니다.</p>
              <p>다양한 프로그램을 진행하며 블루포인트가 진행한 다양한 프로젝트의 모습을 살펴보세요.</p>
            </div>
            <ul>
              <li>미래 응원상</li>
              <li>그룹세션</li>
              <li>데모데이</li>
            </ul>
          </div>
        </div>
<!--        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">-->
<!--          <div class="development__img">-->
<!--            <img-->
<!--                src="@extra/thumb/dev-2.jpg"-->
<!--                alt="Development Image"-->
<!--            >-->
<!--          </div>-->
<!--        </div>-->
        <div class="imgBox col-xxl-8 col-xl-8 col-lg-8 col-md-8">
          <div class="imgArrowButton">
            <button>
              <img
                  src="@/assets/images/programImages/pictureArrowLeftBtn.svg"
                  alt="arrowLeft"
              >
            </button>
          </div>
          <div class="development__img">
            <img
                src="@/assets/images/programImages/pictureimage.png"
                alt="Development Image"
                data-speed="auto"
            >
          </div>
          <div class="imgArrowButton">
            <button>
              <img
                  src="@/assets/images/programImages/pictureArrowRightBtn.svg"
                  alt="arrowRight"
              >
            </button>
          </div>
        </div>
<!--        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">-->
<!--          <div class="development__img">-->
<!--            <img-->
<!--                src="@extra/thumb/dev-2.jpg"-->
<!--                alt="Development Image"-->
<!--            >-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PicturesArea"
}
</script>

<style
    scoped
    lang="scss"
>
.development__area::v-deep {
  .container{
max-width: 1400px;
    margin:0 auto;
  }
  .row {
    .developmentTitle {
      display: flex;
      justify-content: center;
      margin-top: 85px;
      margin-bottom: 145px;

      h2 {
        font-size: 50px;
        font-weight: 700;
        line-height: 62px;
      }
    }

    .sec-title-wrapper {
      .sec-title {
        color: #0C6DFF;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        margin-bottom: 8px;
      }

      .sec-subTitle {
        font-size: 50px;
        font-weight: 700;
        line-height: 62px;
      }
    }
    .development__wrapper{
      .development__content{
        border-color:#C8C8C8;
        grid-gap:30px;
        p{
         font-size:16px;
          font-weight:400;
          line-height: 24px;
          color:#1E1E1E;
          width:400px;
          &:first-child{
            max-width:400px;
          }
          &:last-child{
            max-width:370px;
          }
        }
      }
      ul{
        display:flex;
        margin-left:15px;
        li{
          margin-right:29px;
          padding-bottom:0;
          font-weight:600;
          font-size:18px;
          line-height: 22px;
          &:first-child{
            position:relative;
            &::before{
              content: "";
              display: inline-block;
              width: 8px;
              height: 8px;
              background-color: #000000;
              border-radius: 50%;
              position:absolute;
              left:-15px;
              top:50%;
              transform: translateY(-50%);
            }
          }
        }
      }
    }
    .imgBox{
      display:flex;
      margin:0 auto;
      align-items:center;
      .development__img{
        margin:0 auto;
        width:699px;
        height:351px;
        img{
          width:699px;
          height:351px;
        }
      }
      .imgArrowButton{
        button{
          text-align: center;
          width:60px;
          height:60px;
          border-radius: 50%;
          border: 1px solid #292929;
          box-sizing: border-box;
        }

      }
    }


  }
}
</style>
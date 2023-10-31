<template>
  <section class="testimonial__area-4 ">
    <div class="container g-0 line_4">
      <div class="line-col-4">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="row">
        <div class="col-xxl-12">
          <div class="testimonial__sec-title text-anim">
            <h2 class="sec-subtile-6 text-primary font-bold">REVIEWS</h2>
            <h3 class="sec-title-6 title-anim font-bold">프로그램 후기</h3>
            <p class="font-normal">한솔 V FRONTIERS는 각 산업을 선도할 수 있는 혁신적인 스타트업을 발굴하고 지원하여 탄탄한 산업 생태계를 구축해 나가는 것을 목표로
              합니다.</p>
          </div>
        </div>
      </div>
      <div class="w-100 justify-content-center d-flex">
        <div
            class="w-full pa-program-progress-review"
        >
          <!--                자동 재생-->
          <swiper
              :key="`${type}-${$store.state.windowWidth > 1200 ? 3 : $store.state.windowWidth > 800 ? 2.2 : $store.state.windowWidth > 400 ? 1.5 : 1.1}`"
              :options="{
                      slidesPerView: $store.state.windowWidth > 1200 ? 3 : $store.state.windowWidth > 800 ? 2.2 : $store.state.windowWidth > 400 ? 1.5 : 1.1,
                        spaceBetween: 30,
                        loop: true,
                        pagination: {
                          clickable: true
                        }
                      }"
              class="relative"
          >
            <swiper-slide
                v-for="(review, index) in typeData[type - 1].reviews"
                :key="index"
            >
              <div
                  class="review-item"
              >
                <div>
                  <div class="review-logo">
                    <img
                        :src="review.thumbnail"
                        alt=""
                    >
                  </div>

                  <div class="base-title pr-2 font-weight-medium">
                    {{ review.title }}
                  </div>

                </div>
                <div class="xs-title w-full pa-program-review-item-content">
                  {{ review.text }}
                </div>
              </div>
            </swiper-slide>
            <div
                class="swiper-pagination"
                slot="pagination"
            ></div>
          </swiper>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import 'swiper/swiper.min.css'

export default {
  name: "ReviewsArea",

  data: () => ( {
    imageViewerPopup: false,
    type: 2,
    archives: [
      'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%ED%8F%AC%EC%8A%A4%ED%84%B0/fristPoster1.jpg',
      'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%ED%8F%AC%EC%8A%A4%ED%84%B0/secondPoster1.png',
      'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%ED%8F%AC%EC%8A%A4%ED%84%B0/secondPoster2.png'
    ],
    typeData: [
      {
        photo: [
          {
            name: '미래 응원상',
            links: [
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%AF%B8%EB%9E%98%EC%9D%91%EC%9B%90%EC%83%81/firstFuturePrize5.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%AF%B8%EB%9E%98%EC%9D%91%EC%9B%90%EC%83%81/firstFuturePrize4.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%AF%B8%EB%9E%98%EC%9D%91%EC%9B%90%EC%83%81/firstFuturePrize3.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%AF%B8%EB%9E%98%EC%9D%91%EC%9B%90%EC%83%81/firstFuturePrize2.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%AF%B8%EB%9E%98%EC%9D%91%EC%9B%90%EC%83%81/firstFuturePrize1.png'
            ]
          },
          {
            name: '그룹세션',
            links: [
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%EC%82%AC%EC%A7%84/%EA%B7%B8%EB%A3%B9%EC%84%B8%EC%85%98/firstGroupSession4.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%EC%82%AC%EC%A7%84/%EA%B7%B8%EB%A3%B9%EC%84%B8%EC%85%98/firstGroupSession3.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%EC%82%AC%EC%A7%84/%EA%B7%B8%EB%A3%B9%EC%84%B8%EC%85%98/firstGroupSession2.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%EC%82%AC%EC%A7%84/%EA%B7%B8%EB%A3%B9%EC%84%B8%EC%85%98/firstGroupSession1.png'
            ]
          },
          {
            name: '데모데이',
            links: [
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%8D%B0%EB%AA%A8%EB%8D%B0%EC%9D%B4/firstDemoDay5.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%8D%B0%EB%AA%A8%EB%8D%B0%EC%9D%B4/firstDemoDay4.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%8D%B0%EB%AA%A8%EB%8D%B0%EC%9D%B4/firstDemoDay3.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%8D%B0%EB%AA%A8%EB%8D%B0%EC%9D%B4/firstDemoDay2.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%8D%B0%EB%AA%A8%EB%8D%B0%EC%9D%B4/firstDemoDay1.png'
            ]
          }
        ],
        video: [
          {
            name: '인터뷰 영상',
            link: 'https://youtu.be/pYOYJXpcOAE'
          },
          {
            name: '미래응원상 영상',
            link: 'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%EC%98%81%EC%83%81/%EB%AF%B8%EB%9E%98%EC%9D%91%EC%9B%90%EC%83%81/firstFuturePrizeVideo.mp4'
          }
        ],
        posts: [
          'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%ED%8F%AC%EC%8A%A4%ED%84%B0/firstPoster1.png'
          // 'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%ED%8F%AC%EC%8A%A4%ED%84%B0/firstCard7.png',
          // 'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%ED%8F%AC%EC%8A%A4%ED%84%B0/firstCard6.png',
          // 'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%ED%8F%AC%EC%8A%A4%ED%84%B0/firstCard5.png',
          // 'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%ED%8F%AC%EC%8A%A4%ED%84%B0/firstCard4.png',
          // 'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%ED%8F%AC%EC%8A%A4%ED%84%B0/firstCard3.png',
          // 'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%ED%8F%AC%EC%8A%A4%ED%84%B0/firstCard2.png',
          // 'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%ED%8F%AC%EC%8A%A4%ED%84%B0/firstCard1.png'
        ],
        reviews: [
          {
            title: '노타이틀',
            text: '액셀러레이팅이란 단어도 몰랐던 저희에게 프로그램이 정말 도움이 되었으며, 진심어린 멘토링을 통해 저희에게 큰 용기와 확신을 주었습니다',
            thumbnail: 'https://public.bluepoint-oi.com/Reviews/2022-02-17/1기/notitleLogo.png'
          },
          {
            title: '테이텀',
            text: '기술 베이스 스타트업이 기술 외적인 부분의 밸런스를 갖추도록 하는데에 블루포인트가 최고의 파트너였다고 생각합니다',
            thumbnail: 'https://public.bluepoint-oi.com/Reviews/2022-02-17/1기/tatumLogo.png'
          },
          {
            title: '블루웨일컴퍼니',
            text: '프로그램을 통해 비즈니스 모델, MVP 등을 하나하나 체계적으로 발전시켜가면서 더 나은 서비스를 할 수 있게 되었습니다',
            thumbnail: 'https://public.bluepoint-oi.com/Reviews/2022-02-17/1기/bluewhaleLogo.png'
          },
          {
            title: '꽃팜',
            text: '투자자들에게 더 매력적으로 보일 수 있는지 포인트들을 잘 짚어주셔서 투자를 유치하는 데에 많은 도움이 되었습니다',
            thumbnail: 'https://public.bluepoint-oi.com/Reviews/2022-02-17/1기/kkotfarmLogo.png'
          }
        ]
      },
      {
        photo: [
          {
            name: '미래 응원상',
            links: [
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%AF%B8%EB%9E%98%EC%9D%91%EC%9B%90%EC%83%81/secondFuturePrize7.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%AF%B8%EB%9E%98%EC%9D%91%EC%9B%90%EC%83%81/secondFuturePrize6.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%AF%B8%EB%9E%98%EC%9D%91%EC%9B%90%EC%83%81/secondFuturePrize5.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%AF%B8%EB%9E%98%EC%9D%91%EC%9B%90%EC%83%81/secondFuturePrize4.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%AF%B8%EB%9E%98%EC%9D%91%EC%9B%90%EC%83%81/secondFuturePrize3.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%AF%B8%EB%9E%98%EC%9D%91%EC%9B%90%EC%83%81/secondFuturePrize2.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%AF%B8%EB%9E%98%EC%9D%91%EC%9B%90%EC%83%81/secondFuturePrize1.png'
            ]
          },
          {
            name: '그룹세션',
            links: [
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%EC%82%AC%EC%A7%84/%EA%B7%B8%EB%A3%B9%EC%84%B8%EC%85%98/secondGroupSession4.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%EC%82%AC%EC%A7%84/%EA%B7%B8%EB%A3%B9%EC%84%B8%EC%85%98/secondGroupSession3.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%EC%82%AC%EC%A7%84/%EA%B7%B8%EB%A3%B9%EC%84%B8%EC%85%98/secondGroupSession2.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%EC%82%AC%EC%A7%84/%EA%B7%B8%EB%A3%B9%EC%84%B8%EC%85%98/secondGroupSession1.png'
            ]
          },
          {
            name: '데모데이',
            links: [
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%8D%B0%EB%AA%A8%EB%8D%B0%EC%9D%B4/SecondDemoDay6.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%8D%B0%EB%AA%A8%EB%8D%B0%EC%9D%B4/SecondDemoDay5.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%8D%B0%EB%AA%A8%EB%8D%B0%EC%9D%B4/SecondDemoDay4.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%8D%B0%EB%AA%A8%EB%8D%B0%EC%9D%B4/SecondDemoDay3.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%8D%B0%EB%AA%A8%EB%8D%B0%EC%9D%B4/SecondDemoDay2.png',
              'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%EC%82%AC%EC%A7%84/%EB%8D%B0%EB%AA%A8%EB%8D%B0%EC%9D%B4/SecondDemoDay1.png'
            ]
          }
        ],
        video: [
          {
            name: '2기 메인 영상',
            link: 'https://youtu.be/PqaqCJhQPPU'
          },
          {
            name: '모집/선발 스케치 영상',
            link: 'https://youtu.be/R1Ekn5Y6_44'
          },
          {
            name: '프로그램 스케치 영상',
            link: 'https://youtu.be/0ZdO7Hgl-bI'
          },
          {
            name: '설명회 영상',
            link: 'https://youtu.be/zUPeBXnjyAM'
          },
          {
            name: '데모데이 영상',
            link: 'https://youtu.be/oO0OktzC6zQ'
          }
        ],
        posts: [
          'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%ED%8F%AC%EC%8A%A4%ED%84%B0/secondPoster.png',
          'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%ED%8F%AC%EC%8A%A4%ED%84%B0/secondCard8.png',
          'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%ED%8F%AC%EC%8A%A4%ED%84%B0/secondCard7.png',
          'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%ED%8F%AC%EC%8A%A4%ED%84%B0/secondCard6.png',
          'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%ED%8F%AC%EC%8A%A4%ED%84%B0/secondCard5.png',
          'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%ED%8F%AC%EC%8A%A4%ED%84%B0/secondCard4.png',
          'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%ED%8F%AC%EC%8A%A4%ED%84%B0/secondCard3.png',
          'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%ED%8F%AC%EC%8A%A4%ED%84%B0/secondCard2.png',
          'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+2%EA%B8%B0/%ED%8F%AC%EC%8A%A4%ED%84%B0/secondCard1.png'
        ],
        reviews: [

          {
            title: '이해라이프스타일',
            text: '비즈니스 모델을 섬세하게 다루어 주고, 감정이 상하지 않으면서도 내가 원하는 방향과 해나가야 할 방향을 잘 짚어주시는 것 같습니다. 블루포인트의 강점을 극대화할 수 있다면, 더 좋은 결과 있으리라 생각합니다.',
            thumbnail: 'https://public.bluepoint-oi.com/Reviews/2022-02-17/2기/haeLifeStyleLogo.png'
          },

          {
            title: '랭코드',
            text: ' 스타트업으로서 대기업과의 협력, 협력 과정에서 액셀러레이팅과 스타트업과의 교류 이 모든 것들을 한 번에 경험하고 통합된 피드백을 받을 수 있는 프로그램은 한솔 V프론티어스뿐이라고 생각합니다. ',
            thumbnail: 'https://public.bluepoint-oi.com/Reviews/2022-02-17/2기/langCodeLogo.png'
          },

          {
            title: '페이퍼팝',
            text: '프로그램을 통해 성장과 배울 수 있는 기회가 되었던 것 같습니다. 다음 지원자 분께서 어떤 것을 같이 시너지낼 수 있는지, 배울 수 있는지, 한솔 조직 부서에 대해 알고 진행하면 더 큰 시너지를 낼 수 있지 않을까 싶습니다.',
            thumbnail: 'https://public.bluepoint-oi.com/Reviews/2022-02-17/2기/paperPopLogo.png'
          },

          {
            title: '피큐레잇',
            text: '좋았던 점은 프로그램 하며 성장한 것인데요. 프로그램 이후 팁스 통하여 투자받을 수 있었던 점이 좋았던 것 같습니다.',
            thumbnail: 'https://public.bluepoint-oi.com/Reviews/2022-02-17/2기/pikurateLogo.png'
          },

          {
            title: '테이텀',
            text: '블루포인트의 경우, 투자사와 운영사 입장에서 갈릴 것 같아요. 시드, pre a,까지 넣는 액셀러레이터 하우스 중에서는 잘하는 팀이라고 생각합니다.',
            thumbnail: 'https://public.bluepoint-oi.com/Reviews/2022-02-17/2기/tatumLogo.png'
          },

          {
            title: '디하이브',
            text: '블루포인트한테 감사한 입장이에요. 프로그램을 하면서 블루포인트파트너스 내에 있는 많은 멘토 분들의 도움을 받았던 것 같아요.',
            thumbnail: 'https://public.bluepoint-oi.com/Reviews/2022-02-17/2기/dHiveLogo.png'
          },

          {
            title: '틸다',
            text: '액셀러레이팅 프로그램 호스트와 참여 기업의 느낌이 아니라 좋은 친구를 얻은 느낌이고 비즈니스 파트너를 얻은 느낌이라 굉장히 좋았습니다.',
            thumbnail: 'https://public.bluepoint-oi.com/Reviews/2022-02-17/2기/tildaLogo.png'
          }
        ]
      }
    ],
    selected: {
      photo: 0,
      video: 0
    },
    imageViewer: null
  } ),
}

</script>

<style
    scoped
    lang="scss"
>
.testimonial__area-4::v-deep {
  font-family: SUIT;
  background: #CECECE;

  .container {
    padding-top: 118px;
    margin: 0 317px;
    overflow: hidden;

    .row {
      .testimonial__sec-title {
        padding-bottom: 50px;

        .sec-subtile-6 {
          border: none;
          font-size: 16px;
          line-height: 20px;
          padding: 0;
          margin-bottom: 8px;
        }

        .sec-title-6 {
          padding-bottom: 14px;
          font-size: 50px;
          line-height: 62px;
        }

        p {
          font-size: 16px;
          line-height: 24px;
          max-width: 540px;
        }
      }
    }

    .pa-program-progress-review {
      .swiper-container {
        padding-right:45px;
        padding-left:50px;
        .swiper-slide {
          width: 377px;
          height: 412px;

          .review-item {
            background: #EEEEEE;
            width: 100%;
            height: 100%;
            padding: 59px 35px 87px 55px;

            .review-logo {
              img {
                width: 85px;
                height: 85px;
                border-radius: 50%;
                background: #FFF;
              }
            }
          }
        }
      }
    }
  }
}
</style>
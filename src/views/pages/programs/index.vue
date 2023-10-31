<template>
  <div class="program">
    <program-top-section/>

    <!--  1 ~ 3기 top 인디에키어터    -->
    <div class="w-full blex pt-80">

      <div class="blex w-full">
        <button
            class="outline-md-btn mr-4"
            @click="clickType('prev')"
        >
          <img
              src="@/assets/images/icons/leftArrowGray.svg"
              class="w-7/10 blex"
          >
        </button>
        <div class="md-title pb-0 pl-4 pr-4">
          <span
              v-if="type === 1"
              :key="1"
          >V FRONTIERS 1기</span>
          <span
              v-else-if="type === 2"
              :key="2"
          >V FRONTIERS 2기</span>
          <span
              v-else
              :key="3"
          >V FRONTIERS 3기</span>
        </div>
        <button
            class="outline-md-btn ml-4"
            @click="clickType('next')"
        >
          <img
              src="@/assets/images/icons/rightArrowGray.svg"
              class="w-7/10 blex"
          >
        </button>
      </div>

    </div>

    <!--  프로그램 진행 사진 섹션    -->
    <development-area
        :photos="typeData[type - 1].photo"
    />

    <!--  프로그램 진행 영상 섹션   -->
    <faq-area
        :videos="typeData[type - 1].video"
    />

    <!--  포스터 섹션   -->
    <poster-area
        :posts="archives"
    />

    <!--  프로그램 후기 섹션   -->
    <div class="home-wrapper-4">
      <testimonial-area4
          :reviews="typeData[type - 1].reviews"
      />
    </div>

  </div>
</template>
<script>
import swiperCss from '@/assets/css/swiper-bundle.min.css'
import DevelopmentArea from '../components/sections/DevelopmentArea'
import ServiceDetail from '../components/sections/ServiceDetail'
import TestimonialArea4 from '../components/sections/TestimonialArea4'
import FaqArea from '../components/sections/FaqArea'
import ProgramTopSection from './components/ProgramTopSection'
import PosterArea from './components/PosterArea'

export default {
  name: 'index',
  components: {
    FaqArea,
    TestimonialArea4,
    ServiceDetail,
    DevelopmentArea,
    swiperCss,
    ProgramTopSection,
    PosterArea
  },
  data: () => ( {
    imageViewerPopup: false,
    type: 3,
    archives: [
      require( '@/assets/images/pages/programs/newposter.png' ),
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
            link: 'https://youtu.be/vFveND3fHPc'
          }
        ],
        posts: [
          'https://public.bluepoint-oi.com/web/%ED%95%9C%EC%86%94+1%EA%B8%B0/%ED%8F%AC%EC%8A%A4%ED%84%B0/firstPoster1.png'
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
            text: '투자자 들에게 더 매력적으로 보일 수 있는지 포인트들을 잘 짚어주셔서 투자를 유치하는 데에 많은 도움이 되었습니다',
            thumbnail: 'https://public.bluepoint-oi.com/Reviews/2022-02-17/1기/kkotfarmLogo.png'
          },
          {
            title: '소리를 보는 통로',
            text: '프로그램 기간 동안만 5분의 신규 채용이 이루어지고 팀이 한층 더 성장할 수 있었습니다. 프로그램 속에서 진행되는 멘토링, 교육, 네트워킹의 과정이 정말 재미있고 유익했습니다. 한솔의 계열사와 협업을 꿈꾸고 있는 팀이 있다면 협업을 제안할 수 있는 공식적인 기회가 마련되기 때문에 추천합니다.',
            thumbnail: require('@/assets/images/icons/soboro-logo.png' ),
            //이미지 오면 재 적용할것
          },
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
      },
      {
        photo: [
          {
            name: '미래 응원상',
            links: [
              require( '@/assets/images/pages/programs/future/future1.png' ),
              require( '@/assets/images/pages/programs/future/future2.png' ),
              require( '@/assets/images/pages/programs/future/future3.png' )
            ]
          },
          {
            name: '그룹세션',
            links: [
              require( '@/assets/images/pages/programs/group/group1.png' ),
              require( '@/assets/images/pages/programs/group/group2.png' ),
              require( '@/assets/images/pages/programs/group/group3.png' )
            ]
          },
          {
            name: '데모데이',
            links: [
              require( '@/assets/images/pages/programs/demo/demo1.png' ),
              require( '@/assets/images/pages/programs/demo/demo2.png' ),
              require( '@/assets/images/pages/programs/demo/demo3.png' )
            ]
          }
        ],
        video: [
          {
            name: '모집/선발 스케치 영상',
            link: 'https://www.youtube.com/watch?v=cbSAu519-u4&ab_channel=%EB%B8%94%EB%A3%A8%ED%8F%AC%EC%9D%B8%ED%8A%B8Bluepoint'
          },
          {
            name: '설명회 영상',
            link: 'https://www.youtube.com/watch?v=qA_hIZDXPXE&list=PLLSgZS7w0H0520sd5UmikWtCaaz2QznQn&index=13&ab_channel=%EB%B8%94%EB%A3%A8%ED%8F%AC%EC%9D%B8%ED%8A%B8Bluepoint'
          },
          {
            name: '데모데이 영상',
            link: 'https://www.youtube.com/watch?v=O1uZ63Nc-pM&ab_channel=%EB%B8%94%EB%A3%A8%ED%8F%AC%EC%9D%B8%ED%8A%B8Bluepoint'
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
            title: '리필리',
            text: '한솔V프론티어 프로그램을 통해 처음부터 끝까지 스타트업이 갖고 있는 고민을 함께 하면서 해결해 나갈 수 있었습니다. 부족한 부분에서는 대기업 네트워킹 및 컨설팅을 통해 채워주시면서 빠르게 성장할 수 있는 기회가 되었습니다.',
            thumbnail: require( '@/assets/images/pages/programs/refeely.jpg' )
          },

          {
            title: '아이핀랩스',
            text: '프로그램을 통해 기업가 정신과 스타트업 본질에 대해 많은 생각을 할 수 있어 매우 유익했습니다. 또한 한솔그룹 계열사와의 POC 발굴 과정에서 고객사의 목소리를 들을 수 기회를 갖게 되어 사업화 하는데 큰 도움이 되었습니다.',
            thumbnail: require( '@/assets/images/pages/programs/labs.png' )
          },

          {
            title: '알트에이',
            text: '시장으로부터의 직접적인 피드백, 대기업과의 협업, 스타트업 간의 교류 및 창업자 마인드 리셋까지 전 과정에 걸쳐 도움받고 경험할 수 있었던 소중한 프로그램이였습니다.',
            thumbnail: require( '@/assets/images/pages/programs/altA.png' )
          },
          {
            title: '델로',
            text: '한솔그룹과의 PoC 기회와 전문가와 함께한 부트 캠프, 그룹세션, 네트워크데이 등의 다양한 프로그램 과정을 통해 사업 성장과 제품 고도화에 필요한 요소들을 채울 수 있었고 브랜드 전략과 방향성까지 단시간에 한단계 이상 성장 할 수 있었던 프로그램이였습니다.',
            thumbnail: require( '@/assets/images/pages/programs/dello.png' )
          },
        ]
      }
    ],
    selected: {
      photo: 0,
      video: 0
    },
    imageViewer: null
  } ),
  methods: {
    clickType( direction ) {
      if( direction === 'next' ) {
        if( this.type === 3 ) {
          this.type = 1
        } else {
          this.type++
        }
      } else {
        if( this.type === 1 ) {
          this.type = 3
        } else {
          this.type--
        }
      }
    }
  },
  watch: {
    '$route.query': {
      deep: true,
      handler( val ) {
        if( val.type ) {
          this.type = Number( val.type )
        }
      }
    },
    type() {
      this.selected = {
        photo: 0,
        video: 0
      }
    },
    imageViewer( val ) {
      if( val ) {
        this.imageViewerPopup = true
      }
    }
  },
  mounted() {
    this.$emit( 'mounted' )
  },
  beforeDestroy() {
    this.$emit( 'destroy' )
  },
  created() {
    // fbq('track', 'ViewContent')
    if( this.$route.query.type ) {
      this.type = Number( this.$route.query.type )
    }
  }
}
</script>

<style
    scoped
    lang="scss"
>
.program::v-deep {
  background-color: #F4F4F4;

  .md-title {
    color: #000;
    font-size: 2.604vw; //50px;
    font-weight: 700;
    @media screen and (max-width: 1024px) {
      font-size: 28px;
    }
  }

  .outline-md-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.083vw; //40px;
    height: 2.083vw; //40px;
    transition: all .2s;
    padding: 4px;

    @media screen and (max-width: 1024px) {
      width: 30px;
      height: 30px;
    }
  }

  .outline-md-btn:hover {
    cursor: pointer;
    transform: translateY(-10%);
    transition: all .2s;
  }

  .outline-md-btn:hover {
    svg {
      path {
        fill: #fff;
        transition: all .2s;
      }
    }
  }
}

</style>

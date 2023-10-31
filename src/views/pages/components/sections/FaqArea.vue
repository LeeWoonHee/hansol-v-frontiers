<template>
  <!-- FAQ area start -->
  <section class="faq__area">

    <div class="w-full lg:w-4/5 blex-top flex-wrap lg:flex-no-wrap">
      <!-- left/ video   -->
      <div class="w-full blex lg:order-1 order-2">
        <video-embed
            class="video"
            v-if="videos[selected.video].link.indexOf('public.bluepoint-oi.com') === -1"
            :key="videos[selected.video].link" :params="{autoplay: 1}"
            :src="videos[selected.video].link"/>
        <video-player
            v-else
            ref="player"
            :options="{
                        height: '100%',
                        width: '100%',
                        fluid: true,
                        autoplay: true,
                        muted: false,
                        language: 'en',
                        playbackRates: [0.7, 1.0, 1.5, 2.0],
                        sources: [
                          {
                            type: 'video/mp4',
                            src: videos[selected.video].link
                          }
                        ],
                        poster: null
                      }"/>
        <div class="desc">
          한솔 V FRONTIERS는 각 산업을 선도할 수 있는 혁신적인 스타트업을 발굴하고 지원하여<br class="lg:block hidden">
          탄탄한 산업 생태계를 구축해 나가는 것을 목표로 합니다.
        </div>
      </div>

      <!-- right   -->
      <div class="w-full lg:w-2/5 blex-left lg:oder-2 order-1">
        <div
            class="w-full blex-left pb-0 lg:pb-30 border-0 border-b-0 lg:border-b border-gray border-opacity-25 border-solid">
          <div class="sec-sub-title">
            VIDEO
          </div>
          <div class="sec-title">
            프로그램 진행 영상
          </div>
        </div>

        <ul class="w-full lg:block flex flex-no-wrap justify-start pt-16 lg:pt-30 overflow-auto">
          <li
              class="video-category"
              :class="selected.video === index ? 'clicked' : ''"
              v-for="(data, index) in videos"
              :key="index"
              @click="selected.video = index">
            {{ data.name }}
          </li>
        </ul>

      </div>
    </div>

  </section>
  <!-- FAQ area end -->
</template>

<script>
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'

export default {
  name      : 'FaqArea',
  components: {
    videoPlayer
  },
  props     : {
    videos: {
      type   : Array,
      default: () => []
    },
  },
  watch     : {
    videos: {
      deep     : true,
      immediate: true,
      handler(val) {
        this.localVideos = val
      }
    }
  },
  data      : () => ({
    localVideos: [],
    selected   : {
      video: 0,
    },
    imageViewer: null
  })
}
</script>

<style scoped lang="scss">
.faq__area::v-deep {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  padding: 160px 0;

  @media screen and (max-width: 1024px) {
    padding: 80px 24px;
  }

  .desc {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 70%;
    padding-top: 30px;
    font-size: 0.938vw; //18px;

    @media screen and (max-width: 1024px) {
      width: 100%;
      font-size: 14px;
    }
  }
  .video-player{
    width: 39.740vw; //763
    height: 22.396vw; //430
    border-radius: 10px;
    & > div > video {
      width: 39.740vw; //763
      height: 22.396vw; //430

    }
  }
  .video {
    width: 39.740vw; //763
    height: 22.396vw; //430
    border-radius: 10px;

    iframe {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }

    @media screen and (max-width: 1024px) {
      width: 300px;
      height: 178px;
    }
  }

  .video-category {
    padding-bottom: 0;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 1.042vw; //20px;
    color: #898989;
    transition: all .2s;
    position: relative;
    @media screen and (max-width: 1024px) {
      font-size: 16px;
      white-space: nowrap;
      margin-left: 20px;
    }

    &:hover {
      cursor: pointer;
      color: #fff;
      transition: all .2s;
    }

    &.clicked {
      color: #fff;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-255%, -50%);
        background: #fff;
        width: 4px;
        height: 4px;
        border-radius: 50%;
      }
    }
  }

  .sec-sub-title {
    font-size: 0.833vw; //16px;
    font-weight: 700;
    color: #0C6DFF;
    width: 100%;
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
  }

  .sec-title {
    font-weight: 700;
    font-size: 2.604vw; //50px;
    color: #fff;

    @media screen and (max-width: 1024px) {
      font-size: 32px;
      padding-top: 8px;
    }
  }

}

</style>

<template>
  <main>
    <section id="mentoringPage">
      <div class="mentoring-wrapper w-100 bg-white pa-color-black d-flex justify-content-center">
        <div class="mentoring-content d-flex flex-column w-100 align-items-center">
          <!-- 멘토링 페이지 카테고리 start -->
          <div class="d-flex w-100 justify-content-center mentoring-categorys align-items-center">
            <div class="mentoring-category-title w-100 d-flex justify-content-center border-right">
              멘토링 일정 관리
            </div>
            <div class="mentoring-category-title w-100 d-flex justify-content-center">
              멘토링 신청 내역
            </div>
          </div>
          <!-- 멘토링 페이지 카테고리 end -->
          <!-- 멘토 / 멘토링 일정 관리 클릭 시 -->
          <div class="mentroing-apply-wrapper justify-content-between align-items-center d-flex">
            <div class="canlendar"></div>
            <div class="mentoring-info-content d-flex justify-content-center align-items-baseline h-100">
              <!--멘토링 일정 관리 / 날짜 선택 start -->
              <div class="w-100 justify-content-center align-items-center h-100 d-none">
                <div class="sm-title font-weight-bold">
                  날짜를 선택해 주세요
                </div>
              </div>
              <!-- 멘토 / 멘토링 일정 관리 / 날짜 선택 end -->
              <!-- 멘토 / 멘토링 일정 관리  / 날짜 선택 시  start -->
              <div class="mentoring-select-wrapper w-100 flex-column justify-content-start d-flex">
                <div class="d-flex justify-content-between border-bottom align-items-center">
                  <!--changed-->
                  <div class="sm-title selected-day">
                    2022 - 02 - 28
                  </div>
                  <div>
                    <button class="schedule-btn">일정 등록하기</button>
                  </div>
                </div>
                <!--changed-->
                <div class="reserve-wrapper d-flex">
                  <div class="reserve-item w-100">
                    <div
                        class="d-flex justify-content-between reserve-item-title align-items-center">
                      <div class="xs-title font-weight-bold w-100">
                        차세대 에너지 기술 에너지원 그 자체 언젠가는 오는 그 자체
                      </div>
                      <!-- w-100 수정 changed -->
                    </div>
                    <div class="font-weight-bold reserve-time-list-title xs2-title">
                      예약 가능 시간 목록
                    </div>
                    <div class="d-flex flex-column align-items-start reserve-time-wrapper">
                      <div
                          class="d-flex w-100 justify-content-between align-items-center reserve-time">
                        <!-- changed -->
                        <label class="xs2-title" for="">3 : 00 ~ 14 : 00(트리플렉스)</label>
                        <div class="pa-color-warning">예약 대기</div>
                        <!-- changed -->
                      </div>
                      <div
                          class="d-flex w-100 justify-content-between align-items-center reserve-time">
                        <!-- changed -->
                        <label class="xs2-title" for="">3 : 00 ~ 14 : 00(트리플렉스)</label>
                        <div class="pa-color-success">예약 완료</div>
                        <!-- changed -->
                      </div>
                      <div
                          class="d-flex w-100 justify-content-between align-items-center reserve-time">
                        <!-- changed -->
                        <label class="xs2-title" for="">3 : 00 ~ 14 : 00(트리플렉스)</label>
                        <div class="end">마감</div>
                        <!-- changed -->
                      </div>
                    </div>
                    <div>
                      <div class="xs2-title font-weight-bold reverse-alarm-title">
                        공지사항
                      </div>
                      <div class="xs2-title reverse-alarm">
                        동영상들 준비 부탁드립니다
                      </div>
                    </div>
                    <div class="w-100 d-flex justify-content-between">
                      <button
                          class="b-outline-delete-btn w-100 d-flex justify-content-center align-items-center">일정
                        삭제</button>
                      <!-- changed -->
                      <button
                          class="b-box-btn w-100 d-flex justify-content-center align-items-center">일정
                        수정</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 멘토 / 멘토링 일정 관리  / 날짜 선택 시  end -->
              <!-- 멘토 / 멘토링 일정 관리 / 날짜 선택 / 일정 등록 클릭 시 start 추가된 부분 changed-->
              <div class="mentoring-select-wrapper w-100 flex-column justify-content-start d-flex">
                <div class="d-flex justify-content-between border-bottom">
                  <div class="sm-title selected-day">
                    2022 - 02 - 28
                  </div>
                </div>
                <!-- changed -->
                <div class="mentor-program-info-wrapper d-flex w-100 flex-column align-items-center">
                  <div class="w-100 flex-column align-items-center">
                    <div class="d-flex w-100 justify-content-end align-items-center online-check">
                      <label for="" class="font-weight-normal">온라인으로 진행</label>
                      <input type="checkbox">
                    </div>
                    <div class="w-100 program-info-item">
                      <label for="">프로그램 선택<span
                          class="pa-color-danger xs2-title font-weight-normal">(필수)</span></label>
                      <input type="text" placeholder="프로그램을 선택해 주세요">
                    </div>
                    <div class="w-100 program-info-item d-flex">
                      <div class="w-50 mr-3">
                        <label for="">예약 가능 시간<span
                            class="pa-color-danger xs2-title font-weight-normal">(필수)</span></label>
                        <input type="text" placeholder="예약 가능 시간을 선택해 주세요">
                      </div>
                      <div class="w-50">
                        <label for="">장소<span
                            class="pa-color-danger xs2-title font-weight-normal">(필수)</span></label>
                        <input type="text" placeholder="장소를 선택해 주세요">
                      </div>
                    </div>
                    <div class="w-100 d-flex justify-content-end program-info-item">
                      <div class="pa-color-danger xs2-title">삭제-</div>
                      <div class="xs2-title pa-color-teritary pl-2">예약 가능 시간 추가+</div>
                    </div>
                    <div class="w-100 program-info-item">
                      <label for="">공지사항</label>
                      <input type="text" placeholder="멘티들에게 알려줄 사항을 입력해 주세요">
                    </div>
                  </div>
                  <div class="d-flex w-100 justify-content-between btn-wrapper">
                    <button class="grey-cancel-btn">취소</button>
                    <button class="enroll-btn">등록하기</button>
                  </div>
                </div>
              </div>
              <!-- 멘토 / 멘토링 일정 관리 / 날짜 선택 / 일정 등록 클릭 시 end -->
            </div>
          </div>
          <!-- 멘토 / 멘토링 일정 관리 end -->
          <!-- 멘토 / 멘토링 신청 내역  start -->
          <div class="mentoring-apply-list-wrapper w-100 d-flex">
            <div class="mentoring-apply-list-content w-100">
              <div
                  class="mentoring-apply-list-title d-flex w-100 justify-content-between w-1600 align-items-center">
                <div
                    class="xs-title w-7 d-flex justify-content-center align-items-center font-weight-medium">
                  번호
                </div>
                <div
                    class="xs-title w-8 d-flex justify-content-center align-items-center font-weight-medium">
                  신청일
                </div>
                <div
                    class="xs-title w-7 d-flex justify-content-center align-items-center font-weight-medium">
                  신청자
                </div>
                <div
                    class="xs-title w-20 d-flex justify-content-center align-items-center font-weight-medium">
                  프로그램명
                </div>
                <div
                    class="xs-title w-18 d-flex justify-content-center align-items-center font-weight-medium">
                  예약 시간
                </div>
                <div
                    class="xs-title w-27 d-flex justify-content-center align-items-center font-weight-medium">
                  장소
                </div>
                <div
                    class="xs-title w-11 d-flex justify-content-center align-items-center font-weight-medium">
                  예약 상태
                </div>
              </div>
              <div
                  class="mentoring-apply-list-items d-flex flex-column w-100 align-items-center align-items-center">
                <div class="d-flex justify-content-between w-100 apply-list-item">
                  <div
                      class="xs2-title w-7 d-flex justify-content-center align-items-center font-weight-medium">
                    1
                  </div>
                  <div
                      class="xs2-title w-8 d-flex justify-content-center align-items-center font-weight-medium">
                    2022 - 02 -11
                  </div>
                  <div
                      class="xs2-title w-7 d-flex justify-content-center align-items-center font-weight-medium">
                    홍길동
                  </div>
                  <div
                      class="xs2-title w-20 d-flex justify-content-center align-items-center font-weight-medium">
                    V FRONTIERS 1기
                  </div>
                  <div
                      class="xs2-title w-18 d-flex justify-content-center align-items-center font-weight-medium">
                    <div class="border-right w-100 d-flex justify-content-center">2021-12-30</div>
                    <div class="d-flex  w-100 justify-content-center">09 : 00 ~ 10 : 00</div>
                  </div>
                  <div
                      class="xs2-title w-27 d-flex justify-content-center align-items-center font-weight-medium">
                    경기 부천시 송내대로27번길 13-8 (상동트리플렉스1)
                  </div>
                  <div
                      class="xs2-title w-11 d-flex justify-content-center align-items-center font-weight-medium">
                    <div class="pa-color-success">승인</div>
                  </div>
                </div>
                <div class="d-flex justify-content-between w-100 apply-list-item align-items-center">
                  <div
                      class="xs2-title w-7 d-flex justify-content-center align-items-center font-weight-medium">
                    1
                  </div>
                  <div
                      class="xs2-title w-8 d-flex justify-content-center align-items-center font-weight-medium">
                    2022 - 02 -11
                  </div>
                  <div
                      class="xs2-title w-7 d-flex justify-content-center align-items-center font-weight-medium">
                    홍길동
                  </div>
                  <div
                      class="xs2-title w-20 d-flex justify-content-center align-items-center font-weight-medium">
                    V FRONTIERS 1기
                  </div>
                  <div
                      class="xs2-title w-18 d-flex justify-content-center align-items-center font-weight-medium">
                    <div class="border-right w-100 d-flex justify-content-center">2021-12-30</div>
                    <div class="d-flex  w-100 justify-content-center">09 : 00 ~ 10 : 00</div>
                  </div>
                  <div
                      class="xs2-title w-27 d-flex justify-content-center align-items-centerr font-weight-medium">
                    경기 부천시 송내대로27번길 13-8 (상동트리플렉스1)
                  </div>
                  <div
                      class="xs2-title w-11 d-flex justify-content-center align-items-center font-weight-medium">
                    <div class="pa-color-danger">거절</div>
                  </div>
                </div>
                <div class="d-flex justify-content-between w-100 apply-list-item align-items-center">
                  <div
                      class="xs2-title w-7 d-flex justify-content-center align-items-center font-weight-medium">
                    1
                  </div>
                  <div
                      class="xs2-title w-8 d-flex justify-content-center align-items-center font-weight-medium">
                    2022 - 02 -11
                  </div>
                  <div
                      class="xs2-title w-7 d-flex justify-content-center align-items-center font-weight-medium">
                    홍길동
                  </div>
                  <div
                      class="xs2-title w-20 d-flex justify-content-center align-items-center font-weight-medium">
                    V FRONTIERS 1기
                  </div>
                  <div
                      class="xs2-title w-18 d-flex justify-content-between align-items-center font-weight-medium">
                    <div class="border-right w-100 d-flex justify-content-center">2021-12-30</div>
                    <div class="d-flex  w-100 justify-content-center">09 : 00 ~ 10 : 00</div>
                  </div>
                  <div
                      class="xs2-title w-27 d-flex justify-content-center align-items-center font-weight-medium">
                    경기 부천시 송내대로27번길 13-8 (상동트리플렉스1)
                  </div>
                  <div
                      class="xs2-title w-11 d-flex justify-content-center align-items-center font-weight-medium">
                    <!-- changed -->
                    <button class="success-btn">승인</button>
                    <button class="cancel-btn">거절</button>
                  </div>
                </div>
              </div>
              <div class="d-flex w-100 justify-content-center mentoring-pagination-btn-wrapper">
                <nav class="d-flex justify-content-between align-items-center">
                  <button class="mentoring-pagination-text-btn">이전</button>
                  <ul class="pa-color-black d-flex justify-content-between align-items-center">
                    <li
                        class="mentoring-pagination-btn d-flex justify-content-center align-items-center">
                      <span>1</span>
                    </li>
                    <li
                        class="mentoring-pagination-btn d-flex justify-content-center align-items-center">
                      <span>2</span>
                    </li>
                    <li
                        class="mentoring-pagination-btn d-flex justify-content-center align-items-center">
                      <span>3</span>
                    </li>
                    <li
                        class="mentoring-pagination-btn d-flex justify-content-center align-items-center">
                      <span>4</span>
                    </li>
                    <li
                        class="mentoring-pagination-btn d-flex justify-content-center align-items-center">
                      <span>5</span>
                    </li>
                  </ul>
                  <button class="mentoring-pagination-text-btn">다음</button>
                </nav>
              </div>
              <!--멘토 / 멘토링 신청 내역 / 신청 내역 클릭 시 modal 추가-->
              <div class="mentor-apply-modal-wrapper flex-column align-items-center d-flex">
                <div
                    class="apply-modal-name d-flex justify-content-center align-items-center border-bottom w-100">
                  홍길동
                </div>
                <div class="apply-modal-info w-100 d-flex flex-column align-items-center">
                  <div class="d-flex flex-column w-100">
                    <div class="base-title font-weight-medium">
                      신청일
                    </div>
                    <div class="d-flex w-100 justify-content-center">
                      2022 - 02 - 28
                    </div>
                  </div>
                  <div class="d-flex flex-column w-100">
                    <div class="base-title font-weight-medium">
                      진행 상태
                    </div>
                    <div class="d-flex w-100 justify-content-center">
                      승인
                    </div>
                  </div>
                  <div class="d-flex flex-column w-100">
                    <div class="base-title font-weight-medium">
                      연락처
                    </div>
                    <div class="d-flex w-100 justify-content-center">
                      010 - 1234 - 5678
                    </div>
                  </div>
                  <div class="d-flex flex-column w-100">
                    <div class="base-title font-weight-medium">
                      이메일
                    </div>
                    <div class="d-flex w-100 justify-content-center">
                      test@test.com
                    </div>
                  </div>
                </div>
                <div class="d-flex w-100 justify-content-center align-items-center pb-4">
                  <button class="confirm-btn">확인</button>
                </div>
              </div>
              <!--멘토 / 멘토링 신청 내역 / 신청 내역 클릭 시 end-->
            </div>
          </div>
          <!-- 멘토 / 멘토링 신청 내역 end -->
          <!--M / 멘토 / 멘토링 신청 내역 start -->
          <div class="m-mentoring-apply-list-wrapper w-100 d-flex">
            <div class="m-mentoring-apply-list-content w-100">
              <div class="m-mentoring-apply-list-items">
                <div class="m-apply-list-item d-flex w-100 flex-column align-items-center">
                  <div class="w-100 sm-title m-mentoring-program-title">
                    V Frontiers 1기
                  </div>
                  <div class="d-flex justify-content-start w-100 flex-wrap">
                    <div class="d-flex flex-column w-33 pb-2">
                      <div class="w-100 xs-title font-weight-medium">
                        접수 번호
                      </div>
                      <div class="d-flex justify-content-center xs2-title">
                        1
                      </div>
                    </div>
                    <div class="d-flex flex-column w-33 pb-2">
                      <div class="w-100 xs-title font-weight-medium">
                        신청일
                      </div>
                      <div class="d-flex justify-content-center xs2-title">
                        2022 - 02 - 11
                      </div>
                    </div>
                    <div class="d-flex flex-column w-33 pb-2">
                      <div class="w-100 xs-title font-weight-medium">
                        신청자
                      </div>
                      <div class="d-flex justify-content-center xs2-title">
                        홍길동
                      </div>
                    </div>
                    <div class="d-flex flex-column w-33 pb-2">
                      <div class="w-100 xs-title font-weight-medium">
                        예약 시간
                      </div>
                      <div class="d-flex flex-column w-100">
                        <div class="xs2-title d-flex justify-content-center">2021-12-30</div>
                        <div class="xs2-title d-flex justify-content-center">09 : 00 ~ 10 : 00
                        </div>
                      </div>
                    </div>
                    <div class="d-flex flex-column w-33 pb-2">
                      <div class="w-100 xs-title font-weight-medium">
                        예약 상태
                      </div>
                      <div
                          class="d-flex justify-content-center align-items-center xs2-title pa-color-success">
                        승인
                      </div>
                    </div>
                  </div>
                  <div class="w-100 d-flex justify-contents-start">
                    <div class="xs-title font-weight-medium pr-2">장소</div>
                    <div class="d-flex justify-content-start xs2-title">
                      경기 부천시 송내대로27번길 13-8 (상동트리플렉스1)
                    </div>
                  </div>
                </div>
              </div>
              <div class="m-mentoring-apply-list-items">
                <div class="m-apply-list-item d-flex w-100 flex-column align-items-center">
                  <div class="w-100 sm-title m-mentoring-program-title">
                    V Frontiers 1기
                  </div>
                  <div class="d-flex justify-content-start w-100 flex-wrap">
                    <div class="d-flex flex-column w-33 pb-2">
                      <div class="w-100 xs-title font-weight-medium">
                        접수 번호
                      </div>
                      <div class="d-flex justify-content-center xs2-title">
                        1
                      </div>
                    </div>
                    <div class="d-flex flex-column w-33 pb-2">
                      <div class="w-100 xs-title font-weight-medium">
                        신청일
                      </div>
                      <div class="d-flex justify-content-center xs2-title">
                        2022 - 02 - 11
                      </div>
                    </div>
                    <div class="d-flex flex-column w-33 pb-2">
                      <div class="w-100 xs-title font-weight-medium">
                        신청자
                      </div>
                      <div class="d-flex justify-content-center xs2-title">
                        홍길동
                      </div>
                    </div>
                    <div class="d-flex flex-column w-33 pb-2">
                      <div class="w-100 xs-title font-weight-medium">
                        예약 시간
                      </div>
                      <div class="d-flex flex-column w-100">
                        <div class="xs2-title d-flex justify-content-center">2021-12-30</div>
                        <div class="xs2-title d-flex justify-content-center">09 : 00 ~ 10 : 00
                        </div>
                      </div>
                    </div>
                    <div class="d-flex flex-column w-33 pb-2">
                      <div class="w-100 xs-title font-weight-medium">
                        예약 상태
                      </div>
                      <div
                          class="d-flex justify-content-center align-items-center xs2-title pa-color-danger">
                        거절
                      </div>
                    </div>
                  </div>
                  <div class="w-100 d-flex justify-contents-start">
                    <div class="xs-title font-weight-medium pr-2">장소</div>
                    <div class="d-flex justify-content-start xs2-title">
                      경기 부천시 송내대로27번길 13-8 (상동트리플렉스1)
                    </div>
                  </div>
                </div>
              </div>
              <div class="m-mentoring-apply-list-items">
                <div class="m-apply-list-item d-flex w-100 flex-column align-items-center">
                  <div class="w-100 sm-title m-mentoring-program-title">
                    V Frontiers 1기
                  </div>
                  <div class="d-flex justify-content-start w-100 flex-wrap">
                    <div class="d-flex flex-column w-33 pb-2">
                      <div class="w-100 xs-title font-weight-medium">
                        접수 번호
                      </div>
                      <div class="d-flex justify-content-center xs2-title">
                        1
                      </div>
                    </div>
                    <div class="d-flex flex-column w-33 pb-2">
                      <div class="w-100 xs-title font-weight-medium">
                        신청일
                      </div>
                      <div class="d-flex justify-content-center xs2-title">
                        2022 - 02 - 11
                      </div>
                    </div>
                    <div class="d-flex flex-column w-33 pb-2">
                      <div class="w-100 xs-title font-weight-medium">
                        신청자
                      </div>
                      <div class="d-flex justify-content-center xs2-title">
                        홍길동
                      </div>
                    </div>
                    <div class="d-flex flex-column w-33 pb-2">
                      <div class="w-100 xs-title font-weight-medium">
                        예약 시간
                      </div>
                      <div class="d-flex flex-column w-100">
                        <div class="xs2-title d-flex justify-content-center">2021-12-30</div>
                        <div class="xs2-title d-flex justify-content-center">09 : 00 ~ 10 : 00
                        </div>
                      </div>
                    </div>
                    <div class="d-flex flex-column w-33 pb-2">
                      <div class="w-100 xs-title font-weight-medium">
                        예약 상태
                      </div>
                      <div
                          class="d-flex justify-content-center align-items-center xs2-title pa-color-success">
                        <div class="success-btn">접수</div>
                        <!-- changed -->
                        <button class="cancel-btn">거절</button>
                      </div>
                    </div>
                  </div>
                  <div class="w-100 d-flex justify-contents-start">
                    <div class="xs-title font-weight-medium pr-2">장소</div>
                    <div class="d-flex justify-content-start xs2-title">
                      경기 부천시 송내대로27번길 13-8 (상동트리플렉스1)
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex w-100 justify-content-center mentoring-pagination-btn-wrapper">
                <nav class="d-flex justify-content-between align-items-center">
                  <button class="mentoring-pagination-text-btn">이전</button>
                  <ul class="pa-color-black d-flex justify-content-between align-items-center">
                    <li
                        class="mentoring-pagination-btn d-flex justify-content-center align-items-center">
                      <span>1</span>
                    </li>
                    <li
                        class="mentoring-pagination-btn d-flex justify-content-center align-items-center">
                      <span>2</span>
                    </li>
                    <li
                        class="mentoring-pagination-btn d-flex justify-content-center align-items-center">
                      <span>3</span>
                    </li>
                    <li
                        class="mentoring-pagination-btn d-flex justify-content-center align-items-center">
                      <span>4</span>
                    </li>
                    <li
                        class="mentoring-pagination-btn d-flex justify-content-center align-items-center">
                      <span>5</span>
                    </li>
                  </ul>
                  <button class="mentoring-pagination-text-btn">다음</button>
                </nav>
              </div>
            </div>
          </div>
          <!--M / 멘티 / 멘토링 신청 내역 end -->
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'mentor',
  mounted() {
    this.$emit('mounted')
  },
  beforeDestroy() {
    this.$emit('destroy')
  }
}
</script>

<style scoped>
/* 멘티 / 멘토링 신청 */
.mentoring-categorys {
  padding-bottom: 40px;
  width: 1150px;
}

.mentoring-category-title {
  font-size: 26px;
  font-weight: 600;
  color: #838383;
  transition: all .2s;

}

.mentoring-category-title:hover {
  cursor: pointer;
  color: #00A0E9;
  transform: translateY(-6%);
  transition: all .2s;
}

.mentoring-wrapper {
  position: relative;
}

.mentoring-content {
  padding: 190px 0;
  max-width: 1280px;
}

.mentroing-apply-wrapper {
  width: 1151px;
  height: 615px;
  box-shadow: 0 40px 120px rgba(0, 0, 0, 20%);
  border-radius: 30px;
  padding: 40px;
}

.canlendar {
  width: 575px;
  height: 535px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 16%);
  border-radius: 10px;
}

.mentoring-info-content {
  width: 456px;
  height: 535px;
  overflow-y: scroll;

}

.mentoring-info-content::-webkit-scrollbar {
  width: 4px;
}

.mentoring-info-content::-webkit-scrollbar-thumb {
  height: 17%;
  background-color: rgba(0, 0, 0, .16);
  border-radius: 10px;
}

.mentoring-info-content::-webkit-scrollbar-track {
  background-color: transparent;
}

/* 멘티 / 멘토링 신청 / 날짜 선택 시  */
.mentoring-select-wrapper {
  padding: 0 20px;
}

.selected-day {
  font-weight: 700;
  padding-top: 20px;
}


.schedule-btn { /*changed */
  font-size: 14px;
  background-color: #00A0E9;
  padding: 16px 24px;
  color: #fff;
  border-radius: 5px;
  transition: all .2s;
}

.schedule-btn:hover {
  background-color: #00A0E9;
  box-shadow: 0 16px 32px rgba(0, 0, 0, .16);
  transition: all .2s;
}

.pa-color-warning {
  color: #8340E8;
}

.reserve-item {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 16%);
  border-radius: 10px;
  margin: 20px 0;
  transition: all .2s;
}

.reserve-item:hover {
  transform: translateY(-2%);
  transition: all .2s;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 16%);
}

.reserve-item-title {
  border-bottom: 1px solid #e4e4e4;
  padding: 8px 12px;
}

.reserve-item input {
  width: 18px;
  height: 18px;
}

.reserve-item label {
  margin: 0;
  padding-left: 8px;
}

.reserve-item .xs2-title {
  font-weight: 500;
}

.end {
  opacity: .3;
}

.reserve-item .end:hover {
  pointer-events: none;
}

.reserve-time-list-title {
  padding: 8px 12px;
}

.reserve-time-wrapper {
  padding: 0 20px;
}

.reserve-time {
  padding-bottom: 8px;
}

.reserve-time:hover {
  transform: translateY(-6%);
  transition: all .2s;
}

.reverse-alarm-title {
  padding: 8px 12px;
}

.reverse-alarm {
  padding: 0 20px 8px;
}

.b-outline-delete-btn { /*changed */
  background: #fff;
  border: 1px solid #E86240;
  color: #E86240;
  padding: 11px 0;
  border-bottom-left-radius: 10px;
}

.b-outline-delete-btn:hover { /*changed */
  color: #E86240;
}

.b-outline-btn:hover {
  color: #00A0E9;
}

.b-box-btn {
  background-color: #0054A7;
  color: #fff;
  padding: 11px 0;
  border-bottom-right-radius: 10px;
}


.b-box-btn:hover {
  background-color: #0054A7;
}

/*멘티 / 날짜 클릭 /  멘토 정보 클릭 시 */
.pa-color-success {
  color: #38AFB7;
}

.pa-color-danger {}

.mentor-info-wrapper {
  box-shadow: 0 40px 120px rgba(0, 0, 0, 20%);
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 514px;
  height: 808px;
  border-radius: 20px;
}

.mentor-profile {
  background: url(/assets/images/karl.jpeg) center center/cover;
  width: 514px;
  height: 514px;
  object-fit: cover;
  border-radius: 20px;
}

.mentor-info {
  padding: 60px 30px;
}

.mentor-info .sm-title {
  padding-bottom: 4px;
}

.mentor-info .xs-title {
  padding-bottom: 20px;
}

.mentor-text {
  position: absolute;
  color: #fff;
  right: 0;
  top: 476px;
  font-size: 50px;
  font-weight: 800;
  mix-blend-mode: difference;
}

.confirm-btn {
  background-color: #111;
  color: #fff;
  width: 124px;
  height: 45px;
  border-radius: 5px;
  transition: all .2s;
}

.confirm-btn:hover {
  transform: translateY(-6%);
  transition: all .2s;
  background-color: #111;
}

/*멘티 /  멘토링 신청 내역 클릭 시 */
.mentoring-apply-list-title {
  background-color: #F4F4F4;
  padding: 14px 0;
  border-radius: 5px;
  box-shadow: 0 0px 30px rgba(0, 0, 0, .12);
  margin-bottom: 6px;
}

.w-85 {
  width: 85%;
}

.w-7 {
  width: 7%;
}

.w-8 {
  width: 8.593%;
}

.w-20 {
  width: 20.312%;
}

.w-18 {
  width: 18.75%;
}

.w-27 {
  width: 27.343%;
}

.w-11 {
  width: 10.937%;
}

.mentoring-apply-list-items {
  padding-bottom: 30px;
}

.apply-list-item {
  margin: 6px 0;
  padding: 16px 0;
  box-shadow: 0 0px 30px rgba(0, 0, 0, .12);
  border-radius: 5px;
  border-color: rgb(17, 20, 39);
}

.cancel-btn {
  background-color: #E86240;
  padding: 6px 10px;
  color: #fff;
  border-radius: 5px;
  transition: all .2s;
  margin-left: 12px;
}

.cancel-btn:hover {
  background-color: #E86240;
  transform: translateY(-6%);
  transition: all .2s;
}

.mentoring-pagination-btn-wrapper ul {
  margin: 0;
  padding: 0;
}

.mentoring-pagination-btn {
  background-color: #fff;
  width: 38px;
  height: 38px;
  border-radius: 5px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, .16);
  margin: 0 8px;
  transition: all .2s;
}

.mentoring-pagination-btn:hover {
  cursor: pointer;
  transform: translateY(-6%);
  transition: all .2s;
  background-color: #00A0E9;
  color: #fff;
}

.mentoring-pagination-text-btn {
  color: #838383;
  transition: all .2s;
}

.mentoring-pagination-text-btn:hover {
  color: #00A0E9;
  transform: translateY(-6%);
  transition: all .2s;
}


/* 멘토 / 멘토링 / 일정 관리 / 날짜 선택/ 일정 등록 클륵 시 추가 */
label{
  margin: 0;
}
.mentor-program-info-wrapper{
  padding: 12px 0;
}
.program-info-item input {
  appearance: none;
}

.program-info-item {
  padding: 6px 0;
}
.pa-color-teritary{
  color: #0054A7;
}
.online-check{
  padding: 6px 0;
}
.online-check input[type="checkbox"] {
  width: 20px;
  height: 20px;
  border-radius: 3px;
  border-color: #E4E4E4;
  background-color: #fff;
  margin-left: 8px;
}

.program-info-item input[type="text"] {
  background: #fff;
  border-radius: 5px;
  border-color: #E4E4E4;
  height: 46px;
  color: #111;
  padding: 12px;
  font-size: 14px;
}

.program-info-item input::placeholder {
  font-size: 14px;
  font-weight: 400;
  color: #838383;
}

.program-info-item label {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 0;
  line-height: 22px;
  padding-bottom: 8px;
}
.grey-cancel-btn{
  color: #838383;
  background-color: #fff;
  border: 1px solid #e4e4e4;
  padding: 13px 0;
  width: 196px;
  border-radius: 5px;
  transition: all .2s;
}
.grey-cancel-btn:hover{
  box-shadow: 0 16px 32px rgba(0, 0, 0, .16);
  transition: all .2s;
  border: 1px solid #fff;
  transition: all .2s;
}
.enroll-btn{
  background-color: #00A0E9;
  width: 196px;
  border-radius: 5px;
  padding: 13px 0;
  color: #fff;
  transition: all .2s;
}
.enroll-btn:hover{
  background-color: #00A0E9;
  box-shadow: 0 16px 32px rgba(0, 0, 0, .16);
  transition: all .2s;
}
.btn-wrapper{
  padding-top: 20px;
}

/* 멘토 / 멘토링 신청 내역  start 추가 */
.success-btn{
  background-color: #38AFB7;
  padding: 6px 10px;
  color: #fff;
  border-radius: 5px;
  transition: all .2s;
}
.success-btn:hover{
  transition: all .2s;
  transform: translateY(-6%);
  background-color: #38AFB7
;
}
/* 멘토  /멘토링 신청 내역 / 신청 내역 클릭 시 추가 */
.mentor-apply-modal-wrapper{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 345px;
  border-radius: 20px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, .16);
}
.apply-modal-name{
  font-size: 24px;
  color: #00A0E9;
  font-weight: 600;
  padding: 20px 0;

}
.apply-modal-info{
  padding: 20px 40px;
}
.apply-modal-info > div{
  padding-bottom: 24px;
}

@media all and (max-width: 575px) {
  .mentoring-content {
    padding: 90px 0;
    max-width: 328px;

  }

  .mentoring-categorys {
    padding-bottom: 30px;
  }

  .mentoring-category-title {
    font-size: 20px;

  }

  .mentroing-apply-wrapper {
    width: 100%;
    height: 100%;
    box-shadow: none;
    border-radius: unset;
    padding: 0;
    flex-direction: column !important;
  }

  /* 멘티 / 날짜 선택 */
  .canlendar {
    width: 328px;
    height: 286px;
  }

  .mentoring-info-content {
    width: 100% !important;
  }

  /* 멘티 / 멘토링 신청 / 날짜 선택 시  */
  .mentoring-select-wrapper {
    padding: 0;
  }

  .selected-day {
    padding-top: 30px;
  }

  .selected-day.sm-title {
    font-size: 18px;
    padding-bottom: 12px;
  }

  .reserve-item-title .xs-title {
    font-size: 14px;
  }

  .reserve-item {
    border-radius: 5px;
  }

  .reserve-time>input {
    width: 15px;
    height: 15px;
  }

  .reserve-time-wrapper .xs2-title {
    font-size: 12px;
  }

  .reverse-alarm-title {
    padding-top: 0;
  }

  .schedule-btn{ /*changed */
    padding: 12px 14px;
  }

  .b-outline-btn {}

  /*멘티 / 날짜 클릭 /  멘토 정보 클릭 시 */
  .mentor-info-wrapper {
    width: 275px;
    height: 470px;
    padding-bottom: 20px;
  }

  .mentor-profile {
    width: 275px;
    height: 274px;
    border-radius: 10px;
  }

  .mentor-info {
    padding: 30px 20px;
  }

  .mentor-info .base-title {
    font-size: 16px;
  }

  .mentor-text {
    font-size: 30px;
    top: 245px;
  }

  .confirm-btn {
    width: 95px;
    height: 34px;
  }

  .confirm-btn .base-title {
    font-size: 14px;
  }

  /*  멘티 / 멘토링 신청 내역  start */
  .m-mentoring-program-title {
    font-size: 14px;
    font-weight: 700;
  }

  .m-mentoring-program-title.sm-title {
    padding-bottom: 12px;
  }

  .m-mentoring-apply-list-items {
    padding: 12px;
    box-shadow: 0 16px 250px rgba(0, 0, 0, .16);
    border-radius: 5px;
    margin-bottom: 12px;
  }

  .m-apply-list-item .xs-title {
    font-size: 14px;
  }

  .m-apply-list-item .xs2-title {
    font-size: 12px;
  }

  .m-apply-list-item .w-33 {
    width: 33%;
  }

  .cancel-btn {
    padding: 4px 8px;
  }

  .success-btn{ /*changed */
    padding: 4px 8px;
  }

  .mentoring-pagination-text-btn {
    font-size: 14px;
  }

  .mentoring-pagination-btn {
    width: 35px;
    height: 35px;
  }

  /* 멘토 / 멘토링 일정 관리 / 날짜 선택 / */

  .program-info-item label{
    font-size: 14px;
  }

  .grey-cancel-btn{ /*changed */
    width: 154px;
  }

  .enroll-btn{ /*changed */
    width: 154px;
  }
}
</style>

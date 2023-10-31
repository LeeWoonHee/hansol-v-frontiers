/***************************************************
 ==================== JS INDEX ======================
 ****************************************************
 00. Preloader
 01. Cursor Animations
 02. Offcanvas
 03. Scroll Top
 04. Modals
 05. Header 1
 06. Header 2
 07. Header 3
 08. Header 5
 09. Header Search
 10. Roll Slider
 11. Workflow Slider
 12. Team Slider
 13. Testimonial Slider
 14. Testimonial Slider 3
 15. Portfolio Slider
 16. Service 1
 17. Counter
 18. Button Hover Animation
 19. Button Move Animation
 20. Register GSAP
 21. Config GSAP
 22. Service 6
 23. Choose Section
 24. Portfolio 5 Animation
 25. Title Animation
 26. Title Animation Top
 27. Text Animation
 28. Text Animation Top
 29. Offcanvas Menu
 30. Service 3
 31. Folks animation
 32. Menu Text Animation
 33. Main Portfolio Sticky
 34. Hero 3 Animation
 35. Home Page 2 Animations
 36. Award Animation
 37. Portfolio Main Slider
 38. Portfolio Animation
 39. Portfolio Slider 2
 40. Portfolio Slider 3
 41. Image Moving Animations
 42. Counter Animation
 43. Workflow Slider Animation | animation__fade
 44. Workflow Slider Animation 2 |  fade_bottom
 45. Blog animation
 46. Blog animation 2
 47. Blog Animation 3
 48. Zoom In Animation
 49. Service 3 Animation
 50. Testimonial 2 Animation
 51. Testimonial 3 Image Animation
 52. Pricing Table Animation
 53. Service 2 Animation
 54. Hero 1 Animation
 55. Service 1 Animation
 56. Features 2 Animation
 57. Portfolio 6 Animation
 58. Portfolio 5 Border
 59. Portfolio Main Slider
 60. Portfolio Slider 6
 61. Testimonial Slider 4
 62. Team 7
 63.Portfolio Slider 7
 64. Header 7
 65. Service 7 Animation
 ****************************************************/


(function ($) {
  'use strict'

  // Get Device width
  let device_width = window.innerWidth



  /////////////////////////////////////////////////////
  // 31. Folks animation
  let endTl = gsap.timeline({
    repeat: -1,
    delay: 0.5,
    scrollTrigger: {
      trigger: '.end',
      start: 'bottom 100%-=50px'
    }
  })
  gsap.set('.end', {
    opacity: 0
  })
  gsap.to('.end', {
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.end',
      start: 'bottom 100%-=50px',
      once: true
    }
  })
  let mySplitText = new SplitText('.end', {type: 'words,chars'})
  let chars = mySplitText.chars
  let endGradient = chroma.scale(['#F9D371', '#F47340', '#EF2F88', '#8843F2'])
  endTl.to(chars, {
    duration: 0.5,
    scaleY: 0.6,
    ease: 'power3.out',
    stagger: 0.04,
    transformOrigin: 'center bottom'
  })
  endTl.to(chars, {
    yPercent: -20,
    ease: 'elastic',
    stagger: 0.03,
    duration: 0.8
  }, 0.5)
  endTl.to(chars, {
    scaleY: 1,
    ease: 'elastic.out(2.5, 0.2)',
    stagger: 0.03,
    duration: 1.5
  }, 0.5)
  endTl.to(chars, {
    color: (i, el, arr) => {
      return endGradient(i / arr.length).hex()
    },
    ease: 'power2.out',
    stagger: 0.03,
    duration: 0.3
  }, 0.5)
  endTl.to(chars, {
    yPercent: 0,
    ease: 'back',
    stagger: 0.03,
    duration: 0.8
  }, 0.7)
  endTl.to(chars, {
    color: '#c9f31d',
    duration: 1.4,
    stagger: 0.05
  })
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 32. Menu Text Animation
  document.querySelectorAll('.menu-anim > li > a, .menu-anim > li > div').forEach(button => button.innerHTML = '<div class="menu-text"><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>')

  setTimeout(() => {
    var menu_text = document.querySelectorAll('.menu-text span')
    menu_text.forEach((item) => {
      var font_sizes = window.getComputedStyle(item, null)
      let font_size = font_sizes.getPropertyValue('font-size')
      let size_in_number = parseInt(font_size.replace('px', ''))
      let new_size = parseInt(size_in_number / 3)
      new_size = new_size + 'px'
      if (item.innerHTML == ' ') {
        item.style.width = new_size
      }
    })
  }, 1000)
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // 64. Header 7
  let header_bg_7 = document.querySelector('.header__area-7')
  if (header_bg_7) {
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header_bg_7.classList.add('sticky-7')
        if (scroll_top) {
          scroll_top.style.display = 'block'
        }
      } else {
        header_bg_7.classList.remove('sticky-7')
        if (scroll_top) {
          scroll_top.style.display = 'none'
        }
      }
    }
  }
  /////////////////////////////////////////////////////
})(jQuery)


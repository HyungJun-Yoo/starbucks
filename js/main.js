// 배지 요소 변수(badgeEl)에 저장
const badgeEl = document.querySelector('header .badges');
// to-top 요소 변수(toTopEl)에 저장
const toTopEl = document.querySelector('#to-top');

// 화면에서 스크롤 이동하면 동작 (화면에 스크롤Y 값이 500 이상이면 배지 숨김, 이하면 다시 보여짐)
// _.throttle(함수, 시간(ms)) - 여러번 발생하는 이벤트를 정해진 시간 동안 한번만 실행
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // badgeEl.style.display = 'none'; js에서 style 속성을 통해 css 제어할 수도 있다
    
    // gsap.to(요소, 지속시간(s), 옵션);
    // gsap - JS 애니메이션 라이브러리
    gsap.to(badgeEl, .6, {
      opacity: 0, // 투명도
      display: 'none'
    });
    // 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0,
    });

  } else {
    // 배지 보이기
    // badgeEl.style.display = 'block';

    gsap.to(badgeEl, .6, {
      opacity: 1, // 투명도
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100,
    });

  }
}, 300));

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


// 이미지를 순차적으로 나타내는 js 코드

const fadeEls = document.querySelectorAll('.visual .fade-in');

// forEach(요소, 순서), 요소에는 위에 지정한 요소들이 하나씩 들어옴
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간(s), 옵션);
  gsap.to(fadeEl, 1, {
    // 0.7, 1.4, 2.1, 2.8초 요소의 순서대로 실행
    delay: (index + 1) * .7, 
    opacity: 1
  });
});


// 슬라이드 동작
// Swiper(선택자. 옵션)
new Swiper('.notice-line .swiper-container', {
  // 방향(수직)
  direction: 'vertical',
  // 자동 재생 여부
  autoplay: true,
  // 반복 재생 여부
  loop: true
});

// 프로모션 슬라이드 제어
new Swiper('.promotion .swiper-container', {
  // 방향(수평)은 기본값으로 지정됨
  // direction: 'horizontal'

  // 한번에 보여줄 슬라이드 개수
  slidesPerView: 3,
  // 슬라이드 사이 여백
  spaceBetWeen: 10,
  // 1번 슬라이드가 가운데 보이기
  centeredSlides: true,
  loop: true,
  // 자동 재생 객체 사용으로 추가적인 옵션 사용 가능
  autoplay: {
    // 딜레이(ms), 5초
    delay: 5000,
  },
  pagination: {
    // 페이지 번호 요소 선택자
    el: '.promotion .swiper-pagination',
    // 사용자의 페이지 번호 요소 제어 가능 여부
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetWeen: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


// 토글 버튼으로 프로모션 제어
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간(s), 옵션);
  gsap.to(
    // 선택자
    selector, 
    // 애니메이션 동작 시간
    random(1.5, 2.5), 
    {
      // 옵션

      y: size,
      // 무한 반복
      repeat: -1,
      // 한번 재생된 애니메이션을 다시 뒤로 재생하는 옵션
      yoyo: true,
      // 움직임 제어
      ease: Power1.easeInout,
      // 지연 시간 추가
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    // Scene(감시할 장면) 메소드를 추가
    .Scene({
      // 보여짐 여부를 감시할 요소를 지정
      triggerElement: spyEl,
      // 화면의 80% 지점에서 보여지는 여부를 감시
      triggerHook: .8
    })
    // 요소가 화면에 보이면 show 클래스 추가
    .setClassToggle(spyEl, 'show')
    // 컨트롤러에 장면을 할당
    .addTo(new ScrollMagic.Controller());
});


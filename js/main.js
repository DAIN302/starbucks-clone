window.addEventListener("DOMContentLoaded",()=>{
    // 검색버튼
    const searchEl = document.querySelector(".search");
    const searchInputEl = searchEl.querySelector("input");

    searchEl.addEventListener('click', function(){
        searchInputEl.focus();
    })

    searchInputEl.addEventListener('focus', function(){
        searchEl.classList.add('focused');
        searchInputEl.setAttribute('placeholder', '통합검색')
    })

    searchInputEl.addEventListener('blur', function(){
        searchEl.classList.remove('focused');
        searchInputEl.setAttribute('placeholder', '')
    })

    // 뱃지
    const badgeEl = document.querySelector("header .badges");

    window.addEventListener('scroll', _.throttle(function(){
        // gsap을 이용한 스크롤 배지 애니메이션
        // gsap은 애니메이션 관련 라이브러리
        if(window.scrollY > 500){
            // 배지 숨기기
            // gsap.to(요소, 지속시간(초단위), 옵션)
            gsap.to(badgeEl, .6, {
                opacity : 0,
                display : "none"
            });
        }
        else {
            // 배지 보이기
            gsap.to(badgeEl, .6, {
                opacity : 1,
                display : "block"
            });
        }
    }, 300));

    // _.throttle(함수, 시간)
    // 스크롤이 될때마다 함수가 호출되면 부하가 오므로 이를 방지하기 위한 라이브러리

    // 비쥬얼
    const fadeEls = document.querySelectorAll(".visual .fade-in");
    fadeEls.forEach(function(fadeEl, index){
        gsap.to(fadeEl, 1, {
            delay : (index+1) * .7, // delay라는 옵션으로 지연시간 추가, 앞에 곱하기를 써서 요소가 순차적으로 나타나게함
            opacity : 1
        })
    });

    // 공지사항 - swiper
    // new Swiper(선택자, 옵션)
    new Swiper('.notice-line .swiper-container', {
        direction : 'vertical',
        autoplay : true,
        loop : true
    });

    // 이미지 슬라이드 - swiper
    new Swiper('.promotion .swiper-container', {
        slidesPerView : 3, 
        spaceBetween : 10,
        centeredSlides : true,
        loop : true,
        autoplay : {
            delay : 5000
        },
        pagination : {
            el : '.promotion .swiper-pagination',
            clickable : true
        },
        navigation : {
            prevEl : '.promotion .swiper-prev',
            nextEl : '.promotion .swiper-next'
        }
    })

    // 슬라이드 토글 기능
    const promotionEl = document.querySelector(".promotion")
    const promotionToggleBtn = document.querySelector('.toggle-promotion')
    let isHidePromotion = false;

    promotionToggleBtn.addEventListener('click', function(){
        // 클릭 시 반대값으로 전환
        isHidePromotion = !isHidePromotion

        if(isHidePromotion) {
            // 숨기기
            promotionEl.classList.add('hide');
        }
        else {
            // 보이기
            promotionEl.classList.remove('hide');
        }
    })


}) // 로드구역
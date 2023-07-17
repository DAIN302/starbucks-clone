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

    // 배지
    const badgeEl = document.querySelector("header .badges");

    const toTopEl = document.querySelector("#to-top");

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
            // 상단이동 버튼 보이기
            gsap.to(toTopEl, .2, {
                x : 0
            })
        }
        else {
            // 배지 보이기
            gsap.to(badgeEl, .6, {
                opacity : 1,
                display : "block"
            });

            // 상단이동 버튼 숨기기
            gsap.to(toTopEl, .2, {
                x : 100,
            })
        }
    }, 300));

    // _.throttle(함수, 시간)
    // 스크롤이 될때마다 함수가 호출되면 부하가 오므로 이를 방지하기 위한 라이브러리

    // 상단이동 기능
    toTopEl.addEventListener('click', function(){
        gsap.to(window, .7, {
            scrollTo : 0
        });
    })

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

    // awards
    new Swiper('.awards .swiper-container', {
        autoplay : true,
        loop : true,
        spaceBetween : 30,
        slidesPerView : 5, 
        navigation : {
            prevEl : '.awards .swiper-prev',
            nextEl : '.awards .swiper-next'
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

    // 범위 랜덤 함수(소수점 2자리까지)
    function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
    }

    // 아이콘 애니메이션
    function floatingObj(sel, delay, size){
        // gsap.to(요소, 시간, 옵션)
        gsap.to(sel, random(1.5, 2.5), {
            y : size, // y축 이동
            repeat : -1, // -1 무한반복
            yoyo : true, // 재생된 애니메이션 뒤로 재생
            ease : Power1.easeInOut, // 이징함수
            delay : random(0, delay), // 지연시간 옵션 지정한 시간 뒤에 애니메이션 작동
        });
    }

    floatingObj('.floating1', 1, 15)
    floatingObj('.floating2', .5, 15)
    floatingObj('.floating3', 1.5, 20)

    // 스크롤 애니메이션
    const spyEls = document.querySelectorAll("section.scroll-spy")
    spyEls.forEach(spyEl => {
        new ScrollMagic.Scene({
            triggerElement : spyEl, // 보여짐 여부를 감시할 요소 지정
            triggerHook : .8 // 내가 감시하고 있는 요소가 뷰포트에 어느 부분에 와있는지 지정
        }).setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
    })

    // copyright 부분에 현재 년도 적용 
    const thisYear = document.querySelector(".this-year");
    thisYear.textContent = new Date().getFullYear();

}) // 로드구역
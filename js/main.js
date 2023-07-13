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


})
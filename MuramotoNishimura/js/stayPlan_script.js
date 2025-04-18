// DOMContentLoadedイベントを追加して、DOM読み込み後に実行されるようにする
document.addEventListener('DOMContentLoaded', function() {
    // ヘッダースワイパーの初期化
    const headerSwiper = new Swiper(".monitored", {  // .swiperではなく.monitoredを使用
        direction: "horizontal",
        loop: true,
        
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    // Special plan部分のSwiper初期化
    const specialPlanSwiper = new Swiper('.special-plan-swiper', {
        slidesPerView: 2.2,         // 2.2枚表示
        spaceBetween: 40,           // スライド間のスペースを40pxに増加
        loop: true,                 // 無限ループを有効化
        loopAdditionalSlides: 3,    // ループ用に追加するスライド数
        
        speed: 3000,                // アニメーション速度
        
        autoplay: {
            delay: 2000,            // 2秒間停止してから次へ
            disableOnInteraction: false,
        },
        
        // ページネーションを追加（オプション）
        pagination: {
            el: '.special-plan-swiper .swiper-pagination',
            clickable: true,
        },
        
        breakpoints: {
            // スマホ表示時の設定
            600: {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
            // PC表示時の設定
            601: {
                slidesPerView: 2.2,
                spaceBetween: 40,
            }
        }
    });
});
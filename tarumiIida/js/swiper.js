
// **********スワイパー**********

const swiper = new Swiper(".swiper", {
    // 無限ループを有効にする
    loop: true,

    // 自動再生の設定
    autoplay: {
        delay: 2000, // 3秒ごとに次のスライドに切り替え
    },

    // スライドの切り替え速度
    speed: 1000,

    // 同時に表示するスライドの枚数
    slidesPerView: 3, // 3枚を同時に表示

    // スライド間のスペース
    spaceBetween: 0, // 20pxのスペースを設定（任意で調整）

    // ページネーションの設定
    pagination: {
        el: ".swiper-pagination", // ページネーションの位置
    },

    // // スクロールバーの設定
    // scrollbar: {
    //     el: ".swiper-scrollbar", // スクロールバーの位置
    // },
});

//

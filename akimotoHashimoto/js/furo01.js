// 引数を用いれるように大きな箱を入れてあげると、その後のコントロールもしやすくなる。
// コンストからではなくて、functionn名前()にしておくといいよ。

const swiper = new Swiper(".swiper", {
    // 基本設定
    direction: "horizontal",
    loop: true,
    autoplay: {
        delay: 3000,
    },

    effect: "fade",
    speed: 1000,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// const banner = document.querySelector("#sec04 .banner");
// if (!banner) return; // bannerが取得できない場合は処理をしない

// function showBanner() {
//     if (window.scrollY >= 2500) {
//         banner.classList.add("active");
//         console.log("2500ピクセル以上スクロールされました");
//         window.removeEventListener("scroll", showBanner);
//     }
// }

// function closeBanner() {
//     banner.classList.remove("active");
// }

// window.addEventListener("scroll", showBanner);

// const clickbutton = document.querySelector("#sec04 .banner span");
// if (clickbutton) {
//     clickbutton.addEventListener("click", closeBanner);
// }

// バナー要素を取得
const banner = document.querySelector("#sec04 .banner");
if (!banner) {
    console.error("バナー要素が見つかりません。");
} else {
    // バナーを表示する関数
    function showBanner() {
        if (window.scrollY >= 2500) {
            banner.classList.add("active"); // activeクラスを追加
            console.log("2500ピクセル以上スクロールされました");
            // スクロールイベントを削除（1回のみ動作させる）
            window.removeEventListener("scroll", showBanner);
        }
    }

    // バナーを閉じる関数
    function closeBanner() {
        banner.classList.remove("active"); // activeクラスを削除
    }

    // スクロール時にバナー表示関数を呼び出し
    window.addEventListener("scroll", showBanner);

    // バナー内の閉じるボタンを取得してクリックイベントを登録
    const clickbutton = document.querySelector("#sec04 .banner span");
    if (clickbutton) {
        clickbutton.addEventListener("click", closeBanner);
    } else {
        console.error("閉じるボタンが見つかりません。");
    }
}

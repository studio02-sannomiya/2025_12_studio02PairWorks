// *****下記はスワイパーのJS*****

const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    autoplay: {
        delay: 4000,
    },

    effect: "coverflow",
    speed: 1000,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

const swiper02 = new Swiper(".swiper02", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    autoplay: {
        delay: 4500,
    },

    effect: "creative",
    speed: 1000,

    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

// *****スワイパーのJSここまで*****

// *****以下はドロワーメニュー用JS*****

const drawerButton = document.getElementById("drawerButton");
const drawerMenu = document.querySelector("header .drawer ul");

// メニュー開閉関数
function openDrawer() {
    drawerMenu.classList.toggle("open");
    drawerButton.classList.toggle("reDesign");
}

// クリックイベントを設定
drawerButton.addEventListener("click", openDrawer);

// *****以下はアニメーション用JS*****

const allTarget = document.querySelectorAll(".animate__animated");

//　要素がビューポート内に入っているかどうか確認してクラスと付け外しを行う関数
function observation() {
    // 取得した全ての対して処理を繰り返すためにforEach関数を使って処理する
    allTarget.forEach(function (target) {
        // 要素の位置情報を取得
        const targetRect = target.getBoundingClientRect();

        // 画面内に入っているかどうかを判定
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            // 画面内に入った場合、クラスを付与
            if (target.classList.contains("jump")) {
                target.classList.add("animate__bounce");
            } else {
                target.classList.add("animate__zoomIn");
            } // yourClassNameは付与したいクラス名に置き換えてください
        } else {
            // 画面外に出た場合、クラスを除去
            target.classList.remove("animate__bounce");
            target.classList.remove("animate__zoomIn");
        }
    });
}

// スクロールイベントを追加
window.addEventListener("scroll", observation);

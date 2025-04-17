// ハンバーガーメニュー
const drawerButton = document.querySelector("#drawerButton");
const drawerMenu = document.querySelector("header nav ul");

function opendrawer() {
    drawerMenu.classList.toggle("open");
    drawerButton.classList.toggle("reDesign");
}

drawerButton.addEventListener("click", opendrawer);

// ヘッダーのスクロールイベント
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("header ul li a").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault(); // デフォルトのジャンプ動作を防ぐ
            const targetId = this.getAttribute("href").replace("#", ""); // "#" を削除
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector("header").offsetHeight; // ヘッダーの高さ
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight, // ヘッダー分を引いて調整
                    behavior: "smooth",
                });
            }
        });
    });
});

// ここからスライダー
let swipeOption = {
    loop: true, // スライダーをループさせる設定
    effect: "fade", // フェードさせる為の設定
    fadeEffect: {
        crossFade: true, //縦横比が統一されない画像の場合、重なる場合がある為、それを防ぐ設定
    },

    autoplay: {
        delay: 4000, // 秒後に次の画像にいくようにする設定
        disableOnInteraction: false, // ユーザーが操作後、自動再生を再開する設定
    },
    speed: 2000, // 2秒かけ次の画像へ移動させる設定
    allowTouchMove: false, // マウスでのスワイプを禁止する設定
};
new Swiper(".swiper-container", swipeOption);

// ドロワーメニューの開閉処理
document.getElementById("drawerButton").addEventListener("click", function () {
    document.body.classList.toggle("drawer-open");
});

// ここからローディングアニメーション
// ローディング画面の要素を取得
const loadingScreen = document.querySelector(".loading-screen");

// ページの読み込みが完了したら実行される関数
window.addEventListener("load", function () {
    // ローディング画面を非表示にする
    loadingScreen.classList.add("active");
});

// 5秒後にloadingScreenが表示されていなければ、強制的に非表示にする
setTimeout(function () {
    if (!loadingScreen.classList.contains("active")) {
        loadingScreen.classList.add("active");
    }
}, 5000);
// ！式の条件が逆転する。trueならfalseに、falseならtrueになる。

// ここからcssアニメーション
// すべての h1 要素を取得

// 対象の要素を全て取得（共通のクラス名がついている要素）
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
            if (target.classList.contains("fadein")) {
                target.classList.add("animate__fadeIn");
            } else if (target.classList.contains("shake")) {
                target.classList.add("animate__swing"); // 追加のアニメーション
            }
            {
                target.classList.add("animate__flash"); // yourClassNameは付与したいクラス名に置き換えてください
            }
        } else {
            // 画面外に出た場合、クラスを除去
            target.classList.remove("animate__flash", "animate__fadeIn", "animate__swing");
        }
    });
}

// スクロールイベントを追加
window.addEventListener("scroll", observation);

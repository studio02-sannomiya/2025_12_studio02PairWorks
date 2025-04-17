// ***ここから予約ボタン***
// モーダル要素の取得
const reserveButton = document.getElementById("sauna-reserve-button");
const modal = document.getElementById("reserve-modal");
const closeModalButton = document.getElementById("close-modal");
const reserveForm = document.getElementById("reserve-form");

// 予約ボタンがクリックされたときにモーダルを表示
reserveButton.addEventListener("click", () => {
    modal.style.display = "block";
});

// 閉じるボタンがクリックされたときにモーダルを閉じる
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// 予約フォームが送信されたとき
reserveForm.addEventListener("submit", (event) => {
    event.preventDefault(); // ページリロードを防止

    const dateTime = document.getElementById("date-time").value;
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const emergencyContact = document.getElementById("emergency-contact").value;

    if (name && gender && emergencyContact) {
        alert(
            `予約が完了しました。\n日時: ${dateTime}\n名前: ${name}\n性別: ${gender}\n緊急連絡先: ${emergencyContact}`
        );
        modal.style.display = "none"; // 予約後、モーダルを閉じる
        reserveForm.reset(); // フォームをリセット
    } else {
        alert("すべての項目を入力してください。");
    }
});
// ***予約ボタンここまで***

// ***ここからハンバーガーメニュー***
const drawerButton = document.getElementById("drawerButton");
const drawerMenu = document.querySelector("header nav ul");

function openDrawer() {
    drawerMenu.classList.toggle("open");
    drawerButton.classList.toggle("reDesign");
}

drawerButton.addEventListener("click", openDrawer);
// ***ここまでハンバーガーメニュー***
/* ---------------------------------------------ここからslider---------- */
const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 3000,
    },
    effect: "fade",
    speed: 500,

    // If we need pagination
    // pagination: {
    //     el: ".swiper-pagination",
    // },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
/* ---------------------------------------------sliderここまで---------- */

/* ---------------------------------------------ここからserif-usagi---------- */
const allTarget = document.querySelectorAll('.animate__animated');

//　要素がビューポート内に入っているかどうか確認してクラスと付け外しを行う関数
function observation(){
    // 取得した全ての対して処理を繰り返すためにforEach関数を使って処理する
    allTarget.forEach(function(target) {
        // 要素の位置情報を取得
        const targetRect = target.getBoundingClientRect();

        // 画面内に入っているかどうかを判定
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            // 画面内に入った場合、クラスを付与
            if(target.classList.contains("bounceIn")){
                target.classList.add("animate__bounceIn");
            } else {
            target.classList.add('rollin-out');
            }
            // yourClassNameは付与したいクラス名に置き換えてください
        } else {
            // 画面外に出た場合、クラスを除去
            // target.classList.remove('animate__hinge' , "animate__flipInX" , "animate__zoomInDown" , "animate__fadeInLeftBig" , "animate__fadeInRightBig" , "rollin-out");
            target.classList.remove('animate__bounceIn' , 'rollin-out');
        }
    });
};

// スクロールイベントを追加
window.addEventListener('scroll', observation);

/* ---------------------------------------------serif-usagiここまで---------- */

const slides = document.querySelectorAll(".slider img");
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((img, i) => {
        img.classList.toggle("active", i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// 最初の画像を表示
showSlide(currentIndex);

// 5秒ごとに自動切り替え
setInterval(nextSlide, 5000);

// スライダーの画像が存在する場合のみ実行
if (slides.length > 0) {
    // 最初の画像を表示
    showSlide(currentIndex);
    // 5秒ごとに自動切り替え
    setInterval(nextSlide, 5000);
}

// ハンバーガーメニュー機能
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navMenu = document.getElementById("nav-menu");
    const header = document.querySelector("header"); // ヘッダー要素を取得

    // ハンバーガーメニューのクリックイベント
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener("click", function () {
            this.classList.toggle("active");
            navMenu.classList.toggle("active");
            header.classList.toggle("menu-active"); // ヘッダーにクラスを追加/削除
        });
    }

    // ナビゲーションリンクをクリックした時にメニューを閉じる
    const navLinks = document.querySelectorAll("#nav-menu li a");
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            hamburgerMenu.classList.remove("active");
            navMenu.classList.remove("active");
            header.classList.remove("menu-active"); // ヘッダーからクラスを削除
        });
    });
});

// 春夏秋冬写真4枚のアニメーション
document.addEventListener("DOMContentLoaded", function () {
    // 画像要素を取得
    const images = document.querySelectorAll(".shunkashutou li");

    // Intersection Observer の設定
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                // 要素が画面内に入ったとき
                if (entry.isIntersecting) {
                    // アニメーションを遅延させて順番に実行
                    setTimeout(() => {
                        entry.target.classList.add("animate__animated", "animate__pulse");
                    }, index * 300); // 300ミリ秒ごとに遅延

                    // 一度アニメーションを適用したら監視を停止
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.5, // 要素が50%表示されたらトリガー
        }
    );

    // 各画像要素を監視対象に追加
    images.forEach((image) => {
        observer.observe(image);
    });
});

// 既存のJSコードはそのままで、追加でこのコードを入れます
document.addEventListener("DOMContentLoaded", function () {
    // 画面幅によって予約ボタンの表示を切り替える関数
    function checkReserveButtonDisplay() {
        const isMobile = window.innerWidth <= 393;
        const fixedButton = document.querySelector(".fixed-reserve-button");

        if (fixedButton) {
            // モバイル表示の場合はfixed-reserve-buttonクラスに非表示クラスを追加
            if (isMobile) {
                fixedButton.classList.add("mobile-hidden");
            } else {
                fixedButton.classList.remove("mobile-hidden");
            }
        }
    }

    // 初期実行
    checkReserveButtonDisplay();

    // ウィンドウサイズ変更時にも実行
    window.addEventListener("resize", checkReserveButtonDisplay);
});

// DOM読み込み完了後に実行
document.addEventListener("DOMContentLoaded", function () {
    // 既存のコードはそのまま残す

    // 画面サイズによる予約ボタンの配置変更
    function handleReserveButtonPlacement() {
        const fixedButton = document.querySelector(".fixed-reserve-button");
        const mobileContainer = document.querySelector(".mobile-button-container");

        // スマホ表示かどうか（幅393px以下）
        const isMobile = window.innerWidth <= 393;

        if (isMobile) {
            // スマホ表示時：ボタンをreserveBox内のコンテナに移動
            if (fixedButton && mobileContainer) {
                mobileContainer.appendChild(fixedButton);
            }
        } else {
            // PC表示時：ボタンをbody末尾に戻す（固定表示に）
            if (fixedButton) {
                document.body.appendChild(fixedButton);
            }
        }
    }

    // 初期実行
    handleReserveButtonPlacement();

    // 画面リサイズ時にも実行
    window.addEventListener("resize", handleReserveButtonPlacement);
});

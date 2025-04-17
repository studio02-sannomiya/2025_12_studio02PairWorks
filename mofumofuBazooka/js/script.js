// DOMの読み込み完了を待つ
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded");
    
    // 元のJSからの要素取得
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const contactForm = document.getElementById("contactForm");

    // うさぎアニメーション用の要素取得
    const footer = document.querySelector("footer");
    const usagiElement = document.querySelector(".usagijump2");
    console.log("Footer element:", footer);
    console.log("Usagi2 element:", usagiElement);

    // タイトル用の設定
    const titleElement = document.querySelector(".title-with-rabbit");
    const usagiElement1 = document.querySelector(".usagijump1");
    console.log("Title element:", titleElement);
    console.log("Usagi1 element:", usagiElement1);

// ハンバーガーメニューの実装
if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
        // モバイルメニューとボタンのクラス切り替え
        mobileMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");
        
        console.log("メニュートグル状態:", menuToggle.classList.contains("active")); // デバッグ用
    });
}

// メニュー項目をクリックした時にメニューを閉じる
const menuLinks = document.querySelectorAll('.mobile-menu a');
if (menuLinks.length > 0) {
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenu && menuToggle) {
                mobileMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });
}

    // フッター用Observer
    const footerObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                console.log("Footer intersection:", entry.isIntersecting);
                if (entry.isIntersecting) {
                    usagiElement.classList.add("visible");
                    footerObserver.unobserve(footer);
                    console.log("Added visible class to usagi2");
                }
            });
        },
        {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        }
    );

// タイトル用Observer
const titleObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            console.log("Title intersection:", entry.isIntersecting);
            if (entry.isIntersecting) {
                // デバッグ情報を追加
                console.log("Title element is now visible");
                console.log("Usagi1 element:", usagiElement1);
                
                // クラスを追加
                usagiElement1.classList.add("visible");
                titleObserver.unobserve(titleElement);
                console.log("Added visible class to usagi1");
            }
        });
    },
    {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // 10%見えたら実行
    }
);

    // 監視開始（フッター）
    if (footer && usagiElement) {
        footerObserver.observe(footer);
        console.log("Started observing footer");
    }

    // 監視開始（タイトル）
    if (titleElement && usagiElement1) {
        titleObserver.observe(titleElement);
        console.log("Started observing title");
    }

    // お問い合わせフォームボタン
    if (contactForm) {
        contactForm.addEventListener("click", function () {
            // 実際の実装では、モーダルウィンドウやフォームページへの遷移など
            alert("お問い合わせフォームを表示します");
        });
    }

    // 画像の遅延読み込み実装
    const lazyImages = document.querySelectorAll("img[data-src]");
    if (lazyImages.length > 0) {
        // 交差オブザーバーのサポートチェック
        if ("IntersectionObserver" in window) {
            const imageObserver = new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const image = entry.target;
                            image.src = image.dataset.src;
                            image.removeAttribute("data-src");
                            imageObserver.unobserve(image);
                        }
                    });
                }
            );

            lazyImages.forEach((image) => {
                imageObserver.observe(image);
            });
        } else {
            // 交差オブザーバーが使えない場合のフォールバック
            const lazyLoad = function () {
                let active = false;

                if (active === false) {
                    active = true;

                    setTimeout(() => {
                        lazyImages.forEach((image) => {
                            if (
                                image.getBoundingClientRect().top <=
                                    window.innerHeight &&
                                image.getBoundingClientRect().bottom >= 0 &&
                                getComputedStyle(image).display !== "none"
                            ) {
                                image.src = image.dataset.src;
                                image.removeAttribute("data-src");

                                if (lazyImages.length === 0) {
                                    document.removeEventListener(
                                        "scroll",
                                        lazyLoad
                                    );
                                    window.removeEventListener(
                                        "resize",
                                        lazyLoad
                                    );
                                    window.removeEventListener(
                                        "orientationchange",
                                        lazyLoad
                                    );
                                }
                            }
                        });

                        active = false;
                    }, 200);
                }
            };

            document.addEventListener("scroll", lazyLoad);
            window.addEventListener("resize", lazyLoad);
            window.addEventListener("orientationchange", lazyLoad);

            // 初回実行
            lazyLoad();
        }
    }

    // スムーススクロール実装
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            // 通常の動作をキャンセル
            e.preventDefault();

            // ターゲット要素の取得
            const targetId = this.getAttribute("href");

            // ハッシュのみの場合はトップへスクロール
            if (targetId === "#") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
                return;
            }

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // ターゲット要素の位置を取得し、スクロール
                const targetPosition =
                    targetElement.getBoundingClientRect().top +
                    window.pageYOffset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                });
            }
        });
    });

    // スクロール時のヘッダー表示/非表示
    const header = document.querySelector("header");
    let lastScrollTop = 0;

    // スクロールイベントを監視
    window.addEventListener("scroll", function () {
        let scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

        // 下にスクロールした場合
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = "translateY(-100%)";
        }
        // 上にスクロールした場合
        else {
            header.style.transform = "translateY(0)";
        }

        lastScrollTop = scrollTop;
    });

    // リサイズイベント処理
    window.addEventListener("resize", function () {
        // 500pxの幅を維持するための処理
        const container = document.querySelector(".container");

        // ウィンドウ幅が500px未満の場合、コンテナ幅をウィンドウ幅に合わせる
        if (window.innerWidth < 500) {
            container.style.width = "100%";
        } else {
            container.style.width = "500px";
        }
    });

    // 初期ロード時のウィンドウサイズチェック
    const container = document.querySelector(".container");
    if (window.innerWidth < 500) {
        container.style.width = "100%";
    }

    // アニメーション効果
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach((element) => {
        // 初期状態（非表示）
        element.style.opacity = "0";
        element.style.transition = "opacity 0.5s ease-in-out";
    });

    // 交差オブザーバーを使用してスクロール時のアニメーション
    if ("IntersectionObserver" in window) {
        const fadeObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // 要素が表示範囲に入ったらフェードイン
                        setTimeout(() => {
                            entry.target.style.opacity = "1";
                        }, 100);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                threshold: 0.1, // 10%見えたらアニメーション開始
            }
        );

        fadeInElements.forEach((element) => {
            fadeObserver.observe(element);
        });
    } else {
        // 古いブラウザ用のフォールバック
        fadeInElements.forEach((element) => {
            element.style.opacity = "1";
        });
    }
    
    // スライドショー開始
    startSlideshow();
    
    // デザートスライダーの初期化
    initDessertSlider();
});


// DOMの読み込み完了を待つ
document.addEventListener("DOMContentLoaded", function () {
    
    // 既存のコード（変更なし）
    
    // デザートスライダーの初期化（Swiper）
    const swiper = new Swiper(".swiper", {
        loop: true,
        // ページネーション
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // 前後の矢印
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // 既存のコードや関数呼び出し
    // startSlideshow(); の関数呼び出しはそのまま残す
    // ただし、initDessertSlider(); の関数呼び出しは削除
});

// initDessertSlider 関数は削除する

// スライドショー機能
function startSlideshow() {
    const slides = document.getElementsByClassName("hero-slide");
    let slideIndex = 0;

    // 最初のスライドを表示
    showSlide();

    // 一定間隔でスライドを切り替え
    setInterval(nextSlide, 5000); // 5秒ごとに切り替え

    function showSlide() {
        // 全てのスライドを非表示
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // 現在のスライドを表示
        slides[slideIndex].style.display = "block";
    }

    function nextSlide() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        showSlide();
    }
}

// デザートスライダーの機能
function initDessertSlider() {
    console.log("デザートスライダー初期化開始");

    const sliderContainer = document.querySelector(
        ".dessert-section .slider-container"
    );
    const slides = document.querySelectorAll(".dessert-section .dessert-slide");
    const prevBtn = document.querySelector(".dessert-section .prev-btn");
    const nextBtn = document.querySelector(".dessert-section .next-btn");
    const dots = document.querySelectorAll(".dessert-section .dot");

    console.log("スライド要素数:", slides.length);
    console.log("スライダーコンテナ:", sliderContainer);

    // すべてのスライドを表示状態に設定
    slides.forEach((slide) => {
        slide.style.display = "block";
    });

    let currentIndex = 0;
    const slideWidth = 100; // 100%

    // 初期位置設定
    updateSlider();

    // 前へボタン
    if (prevBtn) {
        prevBtn.addEventListener("click", function () {
            currentIndex =
                currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
            updateSlider();
        });
    }

    // 次へボタン
    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            currentIndex =
                currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
            updateSlider();
        });
    }

    // ドットナビゲーション
    if (dots.length > 0) {
        dots.forEach((dot) => {
            dot.addEventListener("click", function () {
                currentIndex = parseInt(this.getAttribute("data-index"));
                updateSlider();
            });
        });
    }

    // スライダーの位置とドットの状態を更新
    function updateSlider() {
        console.log("スライダー更新:", currentIndex);

        if (sliderContainer) {
            // 変換を適用する前に状態を確認
            console.log("現在の変換値:", sliderContainer.style.transform);
            console.log(
                "新しい変換値:",
                `translateX(-${currentIndex * slideWidth}%)`
            );

            sliderContainer.style.transform = `translateX(-${
                currentIndex * slideWidth
            }%)`;

            // スライド要素の表示状態を確認
            slides.forEach((slide, idx) => {
                console.log(
                    `スライド ${idx} 表示状態:`,
                    getComputedStyle(slide).display
                );
            });

            // アクティブなドットを更新（インデックスの範囲チェックを追加）
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add("active");
                } else {
                    dot.classList.remove("active");
                }
            });
        } else {
            console.error("スライダーコンテナが見つかりません");
        }
    }

    // 自動スライド（必要に応じて）
    if (slides.length > 0) {
        setInterval(function () {
            currentIndex =
                currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
            updateSlider();
        }, 5000); // 5秒ごとに切り替え
    }
}
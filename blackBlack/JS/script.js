const lists = document.querySelectorAll("li");
console.log(lists);

const drawerButton = document.getElementById("drawerButton");
const drawerMenu = document.querySelector("header nav ul");

function openDrawer() {
    drawerMenu.classList.toggle("open");
    drawerButton.classList.toggle("reDesign");
}

drawerButton.addEventListener("click", openDrawer);
const swiper = new Swiper(".swiper", {
    loop: true,
    // 前後の矢印
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // スライドの表示枚数
    slidesPerView: 1,
    breakpoints: {
        // スライドの表示枚数:600px以上の場合
        600: {
            slidesPerView: 2,
        },
        // スライドの表示枚数:1100px以上の場合
        1100: {
            slidesPerView: 3,
        },
    },
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function checkVisibility() {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
                section.classList.add("animate__fadeIn"); // 再追加
                console.log("アニメーション再適用！");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // 初回実行（リロード時にも反映）
});

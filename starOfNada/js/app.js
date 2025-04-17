
// トップに戻るボタン＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊

// スクロール時にボタンを表示/非表示にする
window.onscroll = function() {
    let scrollButton = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block";  // スクロールが100pxを越えたら表示
    } else {
        scrollButton.style.display = "none";   // それ以下で非表示
    }
};

// トップに戻る関数
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });  // スムーズにページトップに戻る
}


// トップに戻るボタン＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊




// じぴまるの言うてるコードスクロールアニメーション＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊

// じぴまるの言うてるコードスクロールアニメーション＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊




// スクロールアニメーション＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊

// 対象の要素を全て取得（共通のクラス名がついている要素）
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
            if(target.classList.contains("Left")){
                target.classList.add("animate__slideInLeft")
            } else if (target.classList.contains("Center")){
                target.classList.add("animate__slideInUp")
            } else if (target.classList.contains("Right")){
                target.classList.add("animate__slideInRight")
            } else {
            // 画面外に出た場合、クラスを除去
            target.classList.remove('animate__flipInY' , "animate__flipInY");
            // ,で区切れば複数外せる。別々に記述したいなら下記。
            // target.classList.remove('animate__bounce');
            }
        }});
};

// スクロールイベントを追加
window.addEventListener('scroll', observation);



// スクロールアニメーション＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊









// ハンバーガーメニュー　亀井追記　//

const drawerButton = document.getElementById("drawerButton");
const drawerMenu = document.querySelector("header .navWrapper nav ul");

function openDrawer(){
    drawerMenu.classList.toggle("open");
    drawerButton.classList.toggle("reDesing");
}

drawerButton.addEventListener("click" , openDrawer);

// 亀井追記ここまで　//







// スライダー＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊

const swiper = new Swiper('.swiper', {
    loop: true,  // 無限ループを有効にする
    slidesPerView: 3,  // 一度に表示するスライド数
    spaceBetween: 10,  // スライド間のスペース
    autoplay: {
        delay: 0,  // 自動再生を無限に（0秒遅延で滑らかに）
        disableOnInteraction: false,  // ユーザー操作後も自動再生が止まらないようにする
    },
    speed: 3000,  // スライドの切り替え速度（スムーズさを出すために少し長めに設定）
    slidesPerGroup: 1,  // 1回で切り替えるスライド数（これを1に設定すると、スライドが1つずつ切り替わる）
    
});







// スライダー＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊





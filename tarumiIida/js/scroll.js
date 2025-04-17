
// **********スクロール検知 ofuro**********

document.addEventListener("DOMContentLoaded", function() {
    // テキスト部分（oyu-shousai）を対象にアニメーションを適用
    const textElements = document.querySelectorAll('#oyu-shousai1, #oyu-shousai2, #oyu-shousai3');
    
    // 初期状態でfade-upクラスを追加
    textElements.forEach(element => {
        element.classList.add('fade-up');
    });
    
    // Intersection Observerの設定
    const options = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };
    
    // コールバック関数
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };
    
    // Intersection Observerを作成
    const observer = new IntersectionObserver(callback, options);
    
    // 全てのテキスト要素を監視
    textElements.forEach(element => {
        observer.observe(element);
    });
});
// **********スクロール検知 ofuro**********



// **********スクロール検知　food**********
// Intersection Observer APIを使用してスクロールを検知
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 要素がビューポートに入ったら大きくするクラスを追加
            entry.target.classList.add("is-visible");
            // 1回表示されたら監視を解除（必要に応じて）
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5 // 要素が50%表示されたら
});

// 監視対象の要素を取得
const targets = document.querySelectorAll('.HonbunWrap, .HonbunWrap02, .HonbunWrap03');

// 各要素に対して監視を設定
targets.forEach(target => {
    observer.observe(target);
});

 
// **********スクロール検知 food**********


const mediaQuery = window.matchMedia('(max-width: 1150px)'); // 例：768px以下の場合

function handleMediaQueryChange(event) {
    if (event.matches) {
        // メディアクエリが一致した場合（768px以下）
        // アニメーションを停止する処理を記述
        targets.forEach(target => {
            observer.unobserve(target); // 監視を解除
            target.classList.remove('is-visible'); // クラスを削除
        });
    } else {
        // メディアクエリが一致しない場合（768pxより大きい）
        // アニメーションを再開する処理を記述
        targets.forEach(target => {
            observer.observe(target); // 監視を再開
        });
    }
}

// 初期化とメディアクエリの変更を監視
handleMediaQueryChange(mediaQuery);
mediaQuery.addEventListener('change', handleMediaQueryChange);
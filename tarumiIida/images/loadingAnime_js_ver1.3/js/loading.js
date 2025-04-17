// ローディング画面の要素を取得
const loadingScreen = document.querySelector('.loading-screen');

// ページの読み込みが完了したら実行される関数
window.addEventListener('load', function () {
    // ローディング画面を非表示にする
    loadingScreen.classList.add('active');
});

// 5秒後にloadingScreenが表示されていなければ、強制的に非表示にする
setTimeout(function () {
    if (!loadingScreen.classList.contains('active')) {
        loadingScreen.classList.add('active');
    }
}, 5000);
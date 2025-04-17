

// --------------下層ページが閉じる話--------------
document.addEventListener('DOMContentLoaded', function() {
    // 要素の取得
    const openButton = document.getElementById('open-popup');
    const popup = document.getElementById('ofuro-kasou');
    const closeButton = document.getElementById('close');
    
    // 「もっと見る」ボタンをクリックしたらポップアップを表示
    openButton.addEventListener('click', function() {
        popup.style.display = 'block';
        // オプション: スムーズに表示するためのクラス追加
        setTimeout(function() {
            popup.classList.add('show');
        }, 10);
    });
    
    // 「×」ボタンをクリックしたらポップアップを非表示
    closeButton.addEventListener('click', function() {
        // オプション: スムーズに非表示にするためのクラス削除
        popup.classList.remove('show');
        setTimeout(function() {
            popup.style.display = 'none';
        }, 300); // トランジションの時間に合わせる
    });
});
// --------------下層ページが閉じる話おわり--------------

// 確認用
// ポップアップを表示・非表示にする機能を実装
document.addEventListener('DOMContentLoaded', function() {
    // 要素の取得
    const openButton = document.getElementById('open-popup');
    const popup = document.getElementById('ofuro-kasou');
    const closeButton = document.getElementById('close');
    
    // デバッグ情報を表示
    console.log('Open button exists:', openButton !== null);
    console.log('Popup exists:', popup !== null);
    console.log('Close button exists:', closeButton !== null);
    
    // 「もっと見る」ボタンをクリックしたらポップアップを表示
    if (openButton) {
        openButton.addEventListener('click', function() {
            console.log('Open button clicked');
            if (popup) {
                popup.style.display = 'block';
                console.log('Popup should be visible now');
                // オプション: スムーズに表示するためのクラス追加
                setTimeout(function() {
                    popup.classList.add('show');
                }, 10);
            } else {
                console.error('Popup element not found');
            }
        });
    } else {
        console.error('Open button not found');
    }
    
    // 「×」ボタンをクリックしたらポップアップを非表示
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            console.log('Close button clicked');
            // オプション: スムーズに非表示にするためのクラス削除
            if (popup) {
                popup.classList.remove('show');
                setTimeout(function() {
                    popup.style.display = 'none';
                    console.log('Popup should be hidden now');
                }, 300); // トランジションの時間に合わせる
            } else {
                console.error('Popup element not found when closing');
            }
        });
    } else {
        console.error('Close button not found');
    }
});

// 追加のデバッグ情報 - ページ読み込み完了時
window.addEventListener('load', function() {
    console.log('Page fully loaded');
    // DOMの構造を確認
    console.log('Open button:', document.getElementById('open-popup'));
    console.log('Popup:', document.getElementById('ofuro-kasou'));
    console.log('Close button:', document.getElementById('close'));
});
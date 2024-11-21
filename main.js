console.log("main.js!!");
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 一度表示された要素は監視を解除
            }
        });
    }, { threshold: 0.1 }); // 表示領域に10%入ったら表示

    fadeElements.forEach(element => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", function () {
    // フェードインさせたい要素を取得
    const fadeElements = document.querySelectorAll('.fade-in');

    // スクロール時のイベントリスナーを追加
    window.addEventListener('scroll', function () {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add('show');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // フェードイン・アウトさせたい要素を取得
    const fadeElements = document.querySelectorAll('.fade-in-out');

    // スクロール時のイベントリスナーを追加
    window.addEventListener('scroll', function () {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // 要素が画面内に入るとフェードイン
            if (rect.top < windowHeight - 100 && rect.bottom > 100) {
                element.classList.add('show');
            } else {
                // 要素が画面外に出るとフェードアウト
                element.classList.remove('show');
            }
        });
    });
});

document.querySelectorAll('.icon').forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.5}s`; // アイコンごとに遅延を追加
});

document.addEventListener("DOMContentLoaded", function () {
    const icon = document.querySelector(".moving-icon");
    const container = document.querySelector(".icon-container");

    // コンテナとアイコンのサイズを取得
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const iconWidth = icon.clientWidth;
    const iconHeight = icon.clientHeight;

    // 初期位置と速度
    let posX = Math.random() * (containerWidth - iconWidth);
    let posY = Math.random() * (containerHeight - iconHeight);
    let speedX = 2; // X方向の速度
    let speedY = 2; // Y方向の速度

    // アイコンの位置を更新する関数
    function moveIcon() {
        posX += speedX;
        posY += speedY;

        // 左または右の壁に衝突した場合、X方向の速度を反転
        if (posX <= 0 || posX >= containerWidth - iconWidth) {
            speedX = -speedX;
        }

        // 上または下の壁に衝突した場合、Y方向の速度を反転
        if (posY <= 0 || posY >= containerHeight - iconHeight) {
            speedY = -speedY;
        }

        // アイコンの位置を更新
        icon.style.left = `${posX}px`;
        icon.style.top = `${posY}px`;

        requestAnimationFrame(moveIcon);
    }

    // アニメーションを開始
    moveIcon();
});


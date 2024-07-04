document.addEventListener('DOMContentLoaded', function() {
    // ヘッダーを読み込むためのfetch
    fetch('/header/header.html')  // Adjusted path to the root directory
        .then(response => response.text())  // テキストとして読み込む
        .then(data => {
            // 読み込んだHTMLを挿入する
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
});

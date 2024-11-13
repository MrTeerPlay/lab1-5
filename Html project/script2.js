document.getElementById('Back').addEventListener('click', function() {
    const button = this;
    button.classList.add('shrink');
    setTimeout(function() {
        button.classList.remove('shrink');
        window.location.href = 'index.html.html';
    }, 200);
})
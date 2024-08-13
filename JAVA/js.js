document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.change-style');

    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const article = this.parentElement;
            if (index === 1) {
                article.classList.toggle('highlight-article2');
            } else {
                article.classList.toggle('highlight');
            }
        });
    });
});

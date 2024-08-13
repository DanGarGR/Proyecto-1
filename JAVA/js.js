document.addEventListener('DOMContentLoaded', function() {
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');
    const changeBgButton = document.getElementById('change-bg');
    
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
    
    changeBgButton.addEventListener('click', function() {
        document.body.classList.toggle('bg-alt');
    });
});

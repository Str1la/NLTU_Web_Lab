document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const imagePreview = document.getElementById('image-preview');

    navButtons.forEach(btn => {
        btn.addEventListener('mouseover', () => {
            const imageName = btn.getAttribute('data-image');
            imagePreview.src = imageName;
        });

        btn.addEventListener('click', () => {
            const link = btn.getAttribute('data-link');
            window.location.href = link;
        });
        
    });
});

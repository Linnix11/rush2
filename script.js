document.addEventListener('DOMContentLoaded', function() {
    const categorySelect = document.querySelector('.filter-section select');
    const productCards = document.querySelectorAll('.product-card');

    categorySelect.addEventListener('change', function() {
        const selectedCategory = this.value.toLowerCase().replace(' ', '-');

        productCards.forEach(card => {
            if (selectedCategory === 'all-categories') {
                card.style.display = 'block';
            } else {
                if (card.classList.contains(selectedCategory)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});
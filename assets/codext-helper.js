document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.includes('/products/')) {
        const ratingsElement = document.querySelector('reviewsio-product-ratings');
        const priceListContainer = document.querySelector('.product-meta__price-list-container');

        if (ratingsElement && priceListContainer) {
            priceListContainer.parentNode.insertBefore(ratingsElement, priceListContainer);

            ratingsElement.style.marginTop = '-15px';
            ratingsElement.style.marginBottom = '10px';
            ratingsElement.style.display = 'block';
        }
    }
});

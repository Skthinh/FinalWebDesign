document.getElementById('clickable-thumbnail').addEventListener('click', function() {
    const clickedImageSrc = this.src;
    const smallCardImage = document.getElementById('clickable-image');
    smallCardImage.src = clickedImageSrc;
});
document.getElementById('clickable-thumbnail1').addEventListener('click', function() {
    const clickedImageSrc = this.src;
    const smallCardImage = document.getElementById('clickable-image');
    smallCardImage.src = clickedImageSrc;
});
document.getElementById('add-cart').addEventListener('click', function() {
    alert("Your chosen product has been added to cart")
});
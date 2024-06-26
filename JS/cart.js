var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle(){
    if(MenuItems.style.maxHeight == "0px")
        {
            MenuItems.style.maxHeight = "200px";
        }
    else
        {
            MenuItems.style.maxHeight = "0px";
        }
}    
document.addEventListener('DOMContentLoaded', () => {
    const quantityInputs = document.querySelectorAll('.quantity');
    const removeLinks = document.querySelectorAll('.remove');
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    const taxRate = 0.02; 
    function updateTotals() {
        let subtotal = 0;
        document.querySelectorAll('.cart-page tr').forEach(row => {
            const quantityInput = row.querySelector('.quantity');
            const priceElement = row.querySelector('.cart-info small');
            const subtotalElement = row.querySelector('.subtotal');
            if (quantityInput && priceElement && subtotalElement) {
                const price = parseFloat(priceElement.textContent.replace('Price: $', ''));
                const quantity = parseInt(quantityInput.value);
                const rowSubtotal = price * quantity;
                subtotalElement.textContent = `$${rowSubtotal.toFixed(2)}`;
                subtotal += rowSubtotal;
            }
        });
        const tax = subtotal * taxRate;
        const total = subtotal + tax;
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        taxElement.textContent = `$${tax.toFixed(2)}`;
        totalElement.textContent = `$${total.toFixed(2)}`;
    }
    function removeProduct(event) {
        event.preventDefault();
        const row = event.target.closest('tr');
        row.remove();
        updateTotals();
    }
    quantityInputs.forEach(input => {
        input.addEventListener('change', updateTotals);
    });
    removeLinks.forEach(link => {
        link.addEventListener('click', removeProduct);
    });
    updateTotals(); // Initialize the total on page load
});
// form.js
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

function populateProducts() {
    const selectElement = document.getElementById('product-name');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id; // Use id for the value attribute
        // Capitalize the first letter of the product name for display
        option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1); 
        selectElement.appendChild(option);
    });
}

// Ensure the function runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', populateProducts);
const products = [
    { id: "fc-1888", name: "Movie Request", averagerating: 4.5 },
    { id: "fc-2050", name: "Inappropiate Movie", averagerating: 4.7 },
    { id: "fs-1987", name: "Ownership Content", averagerating: 3.5 },
    { id: "ac-2000", name: "Bug", averagerating: 3.9 },
    { id: "jj-1969", name: "Buy us Coffee", averagerating: 5.0 }
];

function populateProducts() {
    const selectElement = document.getElementById('contact-aim');
    
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
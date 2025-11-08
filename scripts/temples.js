const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    // FIX: Toggling the 'open' class on the *navigation* element (for visibility)
    navigation.classList.toggle('open');
    // Toggling the 'open' class on the *button* element (for icon change)
    hamButton.classList.toggle('open');
});
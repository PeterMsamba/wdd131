const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        
        // Create a new list item (li) for *each* click
        const li = document.createElement('li'); 
        const deleteButton = document.createElement('button');
        
        // Populate the new elements
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete'); // Optional: Add a class for styling

        // Append elements
        li.append(deleteButton);
        list.append(li);

        // Add the delete listener to the *newly created* button
        deleteButton.addEventListener('click', function () {
            list.removeChild(li); // Remove the specific li element
            input.focus();
        });

        // Clear the input and refocus
        input.value = '';
        input.focus();
    }
    
});
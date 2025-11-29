// Global DOM references
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Array initialization: Get the existing list from localStorage, or start with an empty array
let chaptersArray = getChapterList() || [];

// Populate the displayed list on page load
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Button Click Event Listener
button.addEventListener('click', () => {
    if (input.value.trim() !== '') { // Check if the input is not empty (and not just whitespace)
        
        // 1. Call displayList with the input.value argument
        displayList(input.value); 
        
        // 2. Push the input.value into the chaptersArray
        chaptersArray.push(input.value);  
        
        // 3. Update the localStorage with the new array
        setChapterList(); 
        
        // 4. Clear the input
        input.value = ''; 
        
        // 5. Set the focus back to the input
        input.focus(); 
    }
});

// --- Function Definitions ---

/**
 * Creates and appends a list item and delete button to the list.
 * @param {string} item - The chapter text to display.
 */
function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    // Populate the new elements
    li.textContent = item; // Use the item parameter for the list item content
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete'); 

    // Append elements
    li.append(deleteButton);
    list.append(li);

    // Add the delete listener to the newly created button
    deleteButton.addEventListener('click', function () {
        list.removeChild(li); // Remove the specific li element from the DOM
        
        // Call the new function to remove the chapter from the array and localStorage.
        deleteChapter(li.textContent); 
        
        input.focus();
    });
}

/**
 * Sets the 'myFavBOMList' item in localStorage using the current chaptersArray.
 */
function setChapterList() {
    // Stringify the array before storing it in localStorage
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

/**
 * Gets and parses the 'myFavBOMList' item from localStorage.
 * @returns {Array<string> | null} The parsed array of chapters or null if the key doesn't exist.
 */
function getChapterList() {
    // Parse the JSON string back into a JavaScript array
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

/**
 * Removes a chapter from the chaptersArray and updates localStorage.
 * @param {string} chapter - The chapter string including the trailing '❌' character.
 */
function deleteChapter(chapter) {
    // Reformat: Slice off the trailing '❌' character from the chapter string
    chapter = chapter.slice(0, chapter.length - 1); 
    
    // Redefine chaptersArray: Use filter() to return a new array without the chapter to be removed
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    
    // Update the localStorage
    setChapterList();
}
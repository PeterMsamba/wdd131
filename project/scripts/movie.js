
const movieArray = [
  { title: "Avatar: The Way of Water", 
    category: "Trending Movies", 
    image: "images/pictureI.jpg" 
  },
  { title: "The Dark Knight", 
    category: "Action", 
    image: "images/pictureII.jpg" 
  },
];

const picturesGrid = document.querySelector('.movie-picture-grid');
const navigationLinks = document.querySelectorAll('.navigation li a');


const createMovieCard = (movie) => {
  const movieCard = document.createElement('figure');
  movieCard.classList.add('movie-card');

  const img = document.createElement('img');
  img.setAttribute('src', movie.image);
  img.setAttribute('alt', `Poster for ${movie.title}`);
  img.setAttribute('loading', 'lazy');
  img.setAttribute('width', '315');
  img.setAttribute('height', '250');

  const caption = document.createElement('figcaption');
  const title = document.createElement('p');
  title.classList.add('movie-title');
  title.textContent = movie.title;

  const category = document.createElement('p');
  category.classList.add('movie-category');
  category.textContent = movie.category;

  caption.appendChild(title);
  caption.appendChild(category);
  movieCard.appendChild(img);
  movieCard.appendChild(caption);

  return movieCard;
};

const renderMovies = (filterCategory = null) => {
  // 1. Clear the current grid content
  picturesGrid.innerHTML = '';

  // 2. Determine which movies to display
  const moviesToDisplay = filterCategory
    ? movieArray.filter(movie => movie.category.toLowerCase() === filterCategory.toLowerCase())
    : movieArray;

  // 3. Render the movies
  moviesToDisplay.forEach(movie => {
    const movieCardElement = createMovieCard(movie);
    picturesGrid.appendChild(movieCardElement);
  });
  
  // 4. Optional: If no movies match the filter
  if (moviesToDisplay.length === 0) {
      picturesGrid.innerHTML = '<p class="no-results">No movies found in this category.</p>';
  }
};


navigationLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevent the default link behavior (navigating to '#')
    event.preventDefault();

    // Get the category text from the link: We trim and replace spaces to normalize the category name
    let category = event.target.textContent.trim(); 
    
    if (category === 'Trending Movies') {

    } else if (category === 'Dramer') {
        category = 'Drama'; 
    } else if (category === 'Animination') {
        category = 'Animation';
    }
    
    // Call the rendering function with the selected filter category
    renderMovies(category);
    
    // Highlight the active link (optional but good practice)
    navigationLinks.forEach(l => l.classList.remove('active'));
    event.target.classList.add('active');
  });
});

// Display all movies when the page first loads
renderMovies();
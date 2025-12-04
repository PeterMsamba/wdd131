const movieArray = [
  { title: "The Echoes Of Yesterday", 
    category: "Trending Movies", 
    image: "images/pictureI.jpg" 
  },
  { title: "The Silk Road Odyssey", 
    category: "Action", 
    image: "images/pictureII.jpg" 
  },
  { title: "Stellar Ascension", 
    category: "Drama", 
    image: "images/pictureIII.jpg" 
  },
  { title: "Omega Chroncicles", 
    category: "Animation", 
    image: "images/pictureIV.jpg" 
  },
  { title: "The Crimson Tide", 
    category: "Drama", 
    image: "images/pictureV.jpg" 
  },
  { title: "Synaptic Shift", 
    category: "Trending Movies", 
    image: "images/pictureVI.jpg" 
  },
  { title: "Neo-Genesis", 
    category: "Action", 
    image: "images/pictureVII.jpg" 
  },
  { title: "The Dragon's Blade", 
    category: "Animation", 
    image: "images/pictureVIII.jpg" 
  },
  { title: "The Silent of Shadow", 
    category: "Action", 
    image: "images/pictureIV.jpg" 
  },
  { title: "The Aegis of Kings", 
    category: "Trending Movies", 
    image: "images/pictureX.jpg" 
  },
  { title: "The Last Eclipse", 
    category: "Action", 
    image: "images/pictureXI.jpg" 
  },
  { title: "The Shadowed Mind", 
    category: "Drama", 
    image: "images/pictureXII.jpg" 
  },
];

const picturesGrid = document.querySelector('.movie-picture-grid');
// Update selector to only target the Filter links, not the main menu links
const filterLinks = document.querySelectorAll('.filter-navigation li a');
const hamButton = document.querySelector('#menu');
const mainNav = document.querySelector('.main-navigation');

// --- HAMBURGER MENU LOGIC ---
hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const createMovieCard = (movie) => {
  const movieCard = document.createElement('figure');
  movieCard.classList.add('movie-card');

  const img = document.createElement('img');
  img.setAttribute('src', movie.image);
  img.setAttribute('alt', `Poster for ${movie.title}`);
  img.setAttribute('loading', 'lazy');
  
  // Removed fixed width/height attributes to allow CSS to control responsiveness
  
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

const renderMovies = (filterCategory = 'All') => {
  picturesGrid.innerHTML = '';

  const moviesToDisplay = (filterCategory === 'All')
    ? movieArray
    : movieArray.filter(movie => movie.category.toLowerCase() === filterCategory.toLowerCase());

  moviesToDisplay.forEach(movie => {
    const movieCardElement = createMovieCard(movie);
    picturesGrid.appendChild(movieCardElement);
  });
  
  if (moviesToDisplay.length === 0) {
      picturesGrid.innerHTML = '<p class="no-results" style="grid-column: 1/-1; text-align:center;">No movies found in this category.</p>';
  }
};

// --- FILTER LOGIC ---
filterLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    let category = event.target.textContent.trim(); 
    
    // Normalization logic
    if (category === 'Dramer') category = 'Drama'; 
    if (category === 'Animination') category = 'Animation';
    
    renderMovies(category);
    
    // Update active class
    filterLinks.forEach(l => l.classList.remove('active'));
    event.target.classList.add('active');
  });
});

// Initial Render
renderMovies('All');
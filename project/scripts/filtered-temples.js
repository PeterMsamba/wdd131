//Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    src="images/tranding.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  //Additional Temple object
  {
    templeName: "Austin Texas Temple",
    location: "Austin, Texas, United States",
    dedicated: "2022, April, 3",
    area: 116642,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/austin-texas-temple/austin-texas-temple-40361-main.jpg"
  },
  {
    templeName: "Nauvoo Temple",
    location: "Nauvoo, Illinois",
    dedicated: "1846, May, 3",
    area: 18449,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-temple/nauvoo-temple-3060-main.jpg"
  },
  {
    templeName: "Hamilton New Zealand Temple",
    location: "Philippines",
    dedicated: "1955, December, 21",
    area:  45251,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/cagayan-de-oro-philippines-temple/cagayan-de-oro-philippines-temple-50369-main.jpg"
  },
  {
    templeName: "Fresno California Temple",
    location: " Valentine Ave",
    dedicated: "2000, April, 09",
    area:  10850,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/fresno-california-temple/fresno-california-temple-50642-main.jpg"
  },
  {
    templeName: "Managua Nicaragua Temple",
    location: "Highway to Masaya Managua",
    dedicated: "2022, Novamber, 26",
    area:  25000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/managua-nicaragua-temple/managua-nicaragua-temple-31300-main.jpg"
  },
];

const picturesGrid = document.querySelector('.pictures-grid');
const mainHeading = document.querySelector('main h2');


// A single temple card
const createTempleCard = (temple) => {
    let card = document.createElement('figure');
    let img = document.createElement('img');
    let caption = document.createElement('figcaption');
    let name = document.createElement('h3');
    let location = document.createElement('p');
    let dedicated = document.createElement('p');
    let area = document.createElement('p');

    // Add content and attributes
    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    // Format area with commas and square feet
    area.innerHTML = `<span class="label">Area:</span> ${temple.area.toLocaleString()} sq ft`;
    
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', `${temple.templeName} Temple`);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('width', '400');
    img.setAttribute('height', '250');

    // Card structure
    caption.appendChild(location);
    caption.appendChild(dedicated);
    caption.appendChild(area);

    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(caption);

    // Append the card to the grid
    picturesGrid.appendChild(card);
};

// Displaying an array of temples
const displayTemples = (filteredTemples) => {
    // Clear the existing content
    picturesGrid.innerHTML = ''; 
    
    // Iterate and create cards
    filteredTemples.forEach(temple => createTempleCard(temple));
};

// filtering the temples based on navigation link clicks
const filterTemples = (event) => {
    // Prevent default link behavior
    event.preventDefault(); 

    // Determine the filter type from the link's text content
    const filter = event.target.textContent;
    let filteredList = [];

    // Update the main heading
    mainHeading.textContent = filter;

    switch (filter) {
        case 'Old':
            // Filter: dedicated before 1900
            filteredList = temples.filter(temple => {
                // Extract the year from the dedicated string (e.g., "1888, May, 21" -> 1888)
                const year = parseInt(temple.dedicated.split(',')[0].trim());
                return year < 1900;
            });
            break;

        case 'New':
            // Filter: dedicated after 2000
            filteredList = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(',')[0].trim());
                return year > 2000;
            });
            break;

        case 'Large':
            // Filter: area > 90,000 sq ft
            filteredList = temples.filter(temple => temple.area > 90000);
            break;

        case 'Small':
            // Filter: area < 10,000 sq ft
            filteredList = temples.filter(temple => temple.area < 10000);
            break;

        case 'Home':
        default:
            // Display all temples
            filteredList = temples;
            mainHeading.textContent = 'Home';
            break;
    }
    
    // Display the results
    displayTemples(filteredList);
};

// Select all navigation links
const navLinks = document.querySelectorAll('.navigation a');

// Add the filterTemples function as a click handler to each link
navLinks.forEach(link => {
    link.addEventListener('click', filterTemples);
});

// --- Initial Page Load ---

// Display all temples when the page first loads
displayTemples(temples);
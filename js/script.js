console.log("ICT251 Activity 3 JavaScript is connected!");


// ==========================================
// FEATURE 1: CONTACT FORM VALIDATION
// ==========================================

const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function(event) {

    // Prevent the form from refreshing the page
    event.preventDefault();

    // Get the values entered by the user
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check if name is empty or contains only spaces
    if (name === "") {
        formFeedback.textContent = "Please enter your full name.";
        return;
    }

    // Check if email is correctly formatted
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formFeedback.textContent = "Please enter a valid email address.";
        return;
    }

    // Check if message is empty or contains only spaces
    if (message === "") {
        formFeedback.textContent = "Please enter your message.";
        return;
    }

    // Display validated information without reloading
    formFeedback.textContent =
        "Your data was successfully validated. " +
        "Name: " + name +
        " | Email: " + email +
        " | Message: " + message;
});


// ==========================================
// FEATURE 2: PHOTO GALLERY VIEWER
// ==========================================

const photos = [
    "images/Photo1.jpeg",
    "images/Photo2.jpeg",
    "images/Photo3.jpeg"
];

const captions = [
    "My journey as a University Student",
    "Learning and exploring technology",
    "My journey with technology and learning"
];

const altTexts = [
    "A photo representing my student journey",
    "A photo representing technology and learning",
    "A photo representing my university journey"
];

let currentPhoto = 0;

const galleryImage = document.getElementById("galleryImage");
const galleryCaption = document.getElementById("galleryCaption");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");


// Function to display the selected photo, caption and alt text
function showPhoto() {

    galleryImage.src = photos[currentPhoto];

    galleryImage.alt = altTexts[currentPhoto];

    galleryCaption.textContent = captions[currentPhoto];
}


// Move to the next photo
nextButton.addEventListener("click", function() {

    currentPhoto++;

    // Return to the first photo after the last photo
    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    showPhoto();
});


// Move to the previous photo
previousButton.addEventListener("click", function() {

    currentPhoto--;

    // Move to the last photo when going before the first photo
    if (currentPhoto < 0) {
        currentPhoto = photos.length - 1;
    }

    showPhoto();
});


// Display the first photo when the page loads
showPhoto();


// ==========================================
// FEATURE 3: PROJECT / SKILLS SEARCH
// ==========================================

const projectSearch = document.getElementById("projectSearch");
const skillCards = document.querySelectorAll(".skill-card");
const searchMessage = document.getElementById("searchMessage");
const resetSearch = document.getElementById("resetSearch");


// Function to filter projects and skills
function filterProjects() {

    const searchText = projectSearch.value.trim().toLowerCase();

    let visibleProjects = 0;

    skillCards.forEach(function(card) {

        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {

            card.style.display = "block";
            visibleProjects++;

        } else {

            card.style.display = "none";
        }
    });


    // Display a useful message when nothing matches
    if (visibleProjects === 0) {

        searchMessage.textContent =
            "No projects or skills match your search.";

    } else {

        searchMessage.textContent =
            visibleProjects + " project/skill result(s) found.";
    }
}


// Filter when the user types
projectSearch.addEventListener("input", filterProjects);


// Reset the project search
resetSearch.addEventListener("click", function() {

    projectSearch.value = "";

    skillCards.forEach(function(card) {
        card.style.display = "block";
    });

    searchMessage.textContent =
        "Showing all projects and skills.";
});


// ==========================================
// FEATURE 4: LIGHT / DARK THEME SWITCH
// ==========================================

const themeButton = document.getElementById("themeButton");


// Function to switch between light and dark themes
function toggleTheme() {

    document.body.classList.toggle("dark-theme");

    // Update the button text according to the current theme
    if (document.body.classList.contains("dark-theme")) {

        themeButton.textContent = "Switch to Light Mode";

    } else {

        themeButton.textContent = "Switch to Dark Mode";
    }
}


// Change the theme when the button is clicked
themeButton.addEventListener("click", toggleTheme);
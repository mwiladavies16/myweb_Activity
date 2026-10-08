Davies Mwila – ICT251 Personal Website

About the Website

This is my personal website developed for ICT251 Web Technologies. The website presents information about me as a Computer Science student, including my hobbies, learning plan, photos, media, projects and skills, and a contact form.

The website was developed using:

- HTML5
- CSS3
- JavaScript

The website is designed to be responsive and usable on both computers and mobile devices.

JavaScript Features

The website includes four JavaScript features:

1. Contact Form Validation and Preview

The contact form validates:

- Full name
- Email address
- Message

It rejects empty or whitespace-only required fields and incorrectly formatted email addresses. When valid information is entered, a summary is displayed on the page without reloading.

The information is only validated and previewed. It is not sent to a server or database.

2. Photo Gallery Viewer

The photo gallery allows the user to click:

- Previous
- Next

to change the displayed photograph and its caption.

The gallery uses JavaScript arrays to store the photographs, captions and alternative text.

3. Project and Skills Search

The Projects and Skills section contains three areas:

- Web Development
- Java Programming
- Git and GitHub

The search box allows the user to filter the projects and skills. A useful message is displayed when no matching result is found, and the Reset button displays all items again.

4. Light and Dark Theme Switch

The theme button allows the user to switch between light and dark modes.

The page content, forms, tables, project cards and other elements are styled to remain readable in both themes.

How to Test the Website

Contact Form

1. Open the Contact Me section.
2. Try submitting the form with empty fields.
3. Enter an invalid email address.
4. Enter valid name, email and message information.
5. Confirm that the validation result appears on the page without the page reloading.

Photo Gallery

1. Open My Photos.
2. Click Next to display the next photograph.
3. Click Previous to display the previous photograph.
4. Confirm that the photograph and caption change.

Project and Skills Search

1. Open Projects and Skills.
2. Search for terms such as "Java", "Web", or "Git".
3. Confirm that matching items remain visible.
4. Search for a term that does not exist.
5. Confirm that a no-match message appears.
6. Click Reset Search and confirm that all items return.

Theme Switch

1. Click Switch to Dark Mode.
2. Confirm that the website changes to a dark theme.
3. Click Switch to Light Mode.
4. Confirm that the website returns to the light theme.

Website Structure

myweb/
│
├── index.html
├── README.md
├── activity1_backup.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── Photo1.jpeg
│   ├── Photo2.jpeg
│   └── Photo3.jpeg
│
└── videos/
    ├── intro.mp4
    └── voice.aac

Sources Used

The website was developed using my own coursework, practice and learning from ICT251 Web Technologies.

General technical references used during development include:

- HTML5 documentation and examples from MDN Web Docs
- CSS documentation and examples from MDN Web Docs
- JavaScript documentation and examples from MDN Web Docs

GitHub Repository

The complete source code for this website is available on GitHub.

GitHub: https://github.com/mwiladavies16/myweb_Activity

Author

Davies Mwila

Computer Science Student
Mulungushi University
ICT251 Web Technologies
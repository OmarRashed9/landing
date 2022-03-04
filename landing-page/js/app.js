/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll('section');
const Ullist = document.querySelector('ul');
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

//bulid the navbar
sections.forEach(section => {
    //Extract the data-nav value from the section and store it in variable
    const secName = section.getAttribute("data-nav");
    //Extract IdAttribute value from the section and store it in variable
    const source = section.getAttribute('id');
    //create new li
    const navItems = document.createElement("li");
    //create new link
    const links = document.createElement("a");
    // add navbar style
    links.classList.add("menu__link");
    // get the href from the sections id
    links.setAttribute('href', source);
    // scroll between the sections
    // Scroll to section on link click
    links.addEventListener('click', e => {
        e.preventDefault();
        section.scrollIntoView({ behavior: "smooth" })
    });
    // add the name of sections from the data-nav
    const text = document.createTextNode(secName);

    links.appendChild(text);
    navItems.appendChild(links);
    fragment.appendChild(navItems);
});
//append in fragment to make performance improvements
Ullist.appendChild(fragment);

window.addEventListener('scroll', () => {

    //  For Chek What Is Section On Screen Now and remove the active class
    const activeClass = document.getElementsByClassName('your-active-class')[0];

    if (activeClass !== undefined) {
        activeClass.classList.remove('your-active-class')
    }
    //  For Chek What Is Section On Screen Now and remove the nav-class from the nav-bar
    const ActiveNavi = document.getElementsByClassName('baractive')[0];

    if (ActiveNavi !== undefined) {
        ActiveNavi.classList.remove('baractive')
    }

    // Set sections as active
    sections.forEach(section => {

        const rect = section.getBoundingClientRect();

        if (rect.top >= -50 && rect.top < 394) {

            section.classList.add('your-active-class');
            // Set nav-bar as active

            const activeBar = document.querySelectorAll(`a[href='${section.id}']`)[0].parentElement;

            activeBar.classList.add("baractive");


        }
    })
})

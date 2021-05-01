// scroll function------------------------------------------------
const navbar = document.querySelector(".navbar");
// const tourbtn = document.querySelector(".tour_btn");
const linksContainer = document.querySelector(".links_container");
const topLink = document.querySelector(".top-link");

// // date
// const date = document.getElementById("date");
// date.innerHTML = new Date().getFullYear();

// fixed navbar
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  scrollHeight > navHeight
    ? navbar.classList.add("fixed_nav")
    : navbar.classList.remove("fixed_nav");
});

// smooth scroll
const scrollLink = document.querySelectorAll(".page_link");
console.log(scrollLink);
scrollLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHieght = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed_nav");
    let position = element.offsetTop - navHeight;

    if (!navHeight) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHieght;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

// -----Language logos-----
const langIMG = [
  ["/languageLogos/php.svg"],
  ["/languageLogos/symfony.svg"],
  ["/languageLogos/laravel-1.svg"],
  ["/languageLogos/rails-1.svg"],
  ["/languageLogos/wordpress-icon.svg"],
  ["/languageLogos/mysql-5.svg"],
  ["/languageLogos/html5.svg"],
  ["/languageLogos/css-5.svg"],
  ["/languageLogos/logo-javascript.svg"],
  ["/languageLogos/angular-3.svg"],
  ["/languageLogos/react-2.svg"],
  ["/languageLogos/mariadb.svg"],
  ["/languageLogos/python-3.svg"],
  ["/languageLogos/vue-9.svg"],
  ["/languageLogos/docker.svg"],
];

// container where we want to add logo
const logoCont = document.getElementById("language_logos");

(function displayLangLogo() {
  langIMG.forEach((img) => {
    const html = `
    <div class="card">
        <img
            class="card_img"
            src="${img}"
            alt="hello"
        />
    </div>`;
    logoCont.insertAdjacentHTML("beforeend", html);
  });
})();

// scroll function------------------------------------------------
const navbar = document.querySelector(".navbar");
// const tourbtn = document.querySelector(".tour_btn");
const linksContainer = document.querySelector(".links_container");
const topLink = document.querySelector(".top-link");

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

// -----client cards-----
const cardContainer = document.getElementById("client_logos");

const clientImgs = [
  ["/clientLogos/coca-cola.svg"],
  ["/clientLogos/espn.svg"],
  ["/clientLogos/facebook-1.svg"],
  ["/clientLogos/microsoft-windows-22.svg"],
  ["/clientLogos/playstation-wordmark.svg"],
  ["/clientLogos/tesla-9.svg"],
  ["/clientLogos/amazon-2.svg"],
  ["/clientLogos/ebay.svg"],
];

(function displayClients() {
  clientImgs.forEach((img) => {
    const html = `
    <div class="client_card">
      <img src="${img}" alt="greetings!" />
    </div>`;
    cardContainer.insertAdjacentHTML("beforeend", html);
  });
})();

// map ------------------------------------
// initialize and add map
(function initMap() {
  // location of Washington DC
  const washDC = { lat: 38.9072, lng: 77.0369 };
  // the map, centered at DC
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: washDC,
  });
  // Marker at Washington DC
  const marker = new google.maps.Marker({
    position: washDC,
    map: map,
  });
})();

// // date ------------------------------------
// const label_date = document.getElementById("date");
// const date = new Date();
// label_date.innerHTML = date;

// scroll animation for language logos
const languageCards = document.querySelectorAll(".card");

window.addEventListener("scroll", checkLangCard);

checkLangCard();
function checkLangCard() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  languageCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
}

class Application {
  constructor() {
    this.#selectDom();
  }
  //Select DOM only Private For Class
  #selectDom() {
    this.preLoader = document.getElementById("preloader");
    this.navbar = document.getElementById("navbar");
    this.navTogglers = document.querySelectorAll("[data-nav-toggler]");
    this.overlay = document.getElementById("overlay");
    this.header = document.getElementById("header");
    this.EventForOneElement(this.preLoader, "load", "remove");
    this.EventForOneElement(this.header, "scroll", "active");
  }
  // Make Event Dry Class For One Element Only
  EventForOneElement(ele, eventType, className) {
    window.addEventListener(eventType, (_) => {
      if (eventType == "scroll") {
        this.header.classList[window.scrollY > 100 ? "add" : "remove"](
          "active",
        );
      } else {
        ele.classList.add(className);
      }
    });
  }
  // * Add Event On elements DRY
  AddEventOnElements = (Elements, eventType, callBack) => {
    for (let i = 0, len = Elements.length; i < len; i++)
      Elements[i].addEventListener(eventType, callBack);
  };
  // *  Toggler Navbar for Mobile;
  toggleNav = (_) => {
    this.navbar.classList.toggle("active");
    this.overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  };
}
const myApp = new Application();
// Call Event  Listener ===>;
myApp.AddEventOnElements(myApp.navTogglers, "click", myApp.toggleNav);

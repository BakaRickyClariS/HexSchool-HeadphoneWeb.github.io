import SimpleRouter from "./components/Router.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

// 組件註冊
customElements.define("my-navbar", Navbar);
customElements.define("my-footer", Footer);

// 頁面註冊

let router;

router = new SimpleRouter("outlet");
// router.addRoute("/", "my-home");

router.resolve();

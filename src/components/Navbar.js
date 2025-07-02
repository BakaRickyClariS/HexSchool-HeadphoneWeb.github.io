class Navbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <header>
      <nav
        class="flex flex-row justify-center items-center max-w-screen-xl mx-auto md:px-10 w-full"
      >
        <ul className="flex flex-row justify-between">
          <li>
            <a href="#">
              <img src="../assets/img/logo-b.png" alt="" />
            </a>
          </li>
          <li>
            <ul className="flex flex-row gap-4">
              <li>
                <a href="#">首頁</a>
              </li>
              <li>
                <a href="#">最新消息</a>
              </li>
              <li>
                <a href="#">商品列表</a>
              </li>
              <li>
                <a href="#">關於我們</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <img src="../assets/img/logo-search-b.png" alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
    `;
  }
}

export default Navbar;

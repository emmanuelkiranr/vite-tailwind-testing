const Navbar = () => {
  return (
    <>
      <nav className="bg-[#0f1624] fixed top-0 left-0 w-full py-3 ">
        <div className="flex justify-between">
          <h3 className="text-3xl text-white">Portfolio</h3>
          <div className="sm:hidden" id="burger">
            <svg
              className="brightness-0 invert w-6 h-6 cursor-pointer"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {/* <----------This div/svg is for small screen display---------->*/}
        </div>
      </nav>
      <div class="hidden relative top-10 right-0 mt-20" id="menu">
        <ul className="sm:hidden bg-[#0f1624] text-lg text-white container w-max ml-auto flex flex-col items-center p-6 rounded-b-lg rounded-br-none">
          <li>
            <a href="#About_Section" className="nav-anchor-text">
              About
            </a>
          </li>
          <li>
            <a href="#Project_Section" className="nav-anchor-text">
              Projects
            </a>
          </li>
          <li>
            <a href="#Contact_Section" className="nav-anchor-text">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
// var loader = setInterval(function () {
//   if (document.readyState !== "complete") return;
//   clearInterval(loader);
//   const menu = document.querySelector("#menu");
//   const burger = document.querySelector("#burger");
//   burger.addEventListener("click", () => {
//     if (menu.classList.contains("hidden")) {
//       menu.classList.remove("hidden");
//     } else {
//       menu.classList.add("hidden");
//     }
//   });
// }, 300);

export default Navbar;

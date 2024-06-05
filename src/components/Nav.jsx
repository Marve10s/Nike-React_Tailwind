import { hamburger } from "../assets/icons/index.js";
import { headerLogo } from "../assets/images";
// import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index.js";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex items-center justify-between max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Nike"
            width={130}
            height={20}
            className="h-10 w-auto"
          />
        </a>
        <ul className="flex-1 flex justify-center items-start gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            className="h-6 w-6"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;

import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaDribbble } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import NavLogo from "../assets/hero.png";
import Button from "./Button";
import Container from "./Container";

const NavBar = () => {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // DRY: Extracted nav links into an array to avoid repeating <li> + <a> markup 6 times
  const navLinks = ["Services", "Works", "Resume", "Skills", "Testimonials", "Contact"];

  // DRY: Extracted social icons into an array to avoid repeating <a> markup 4 times
  const socials = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaGithub />, href: "#" },
    { icon: <FaDribbble />, href: "#" },
  ];

  // DRY: A single handler used by both desktop and mobile links to scroll smoothly to a section
  const handleScroll = (e, id) => {
    e.preventDefault(); // Prevent the default anchor jump (URL change)
    const section = document.getElementById(id);
    if (section) {
      // Offset for the fixed header height so the section isn't hidden under the navbar
      const headerOffset = 80; // Adjust this if your navbar is a different height
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false); // Close the mobile menu after clicking a link
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black py-4">
      <Container>

        {/* Responsive: Added gap-4 to prevent elements from touching on small screens */}
        <nav className="mx-auto flex items-center justify-between gap-4">

          {/* Logo */}
          <button
            type="button"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3"
          >
            <img src={NavLogo} alt="Gerold" className="" />
          </button>

          {/* Nav Links - Hidden on mobile, visible on desktop */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => handleScroll(e, link.toLowerCase())}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Socials + Button + Mobile Menu Toggle */}
          <div className="flex items-center gap-4">

            {/* Social Icons - Hidden on mobile, visible on tablet+ */}
            <div className="hidden items-center gap-3 md:flex">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-xs text-gray-300 transition-colors hover:border-purple-500 hover:text-purple-400"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Lets Talk Button - Responsive: Wrapped in a div to control spacing on mobile */}
            <div className="shrink-0">
              <Button>
                Lets Talk
              </Button>
            </div>

            {/* Responsive: Hamburger menu button - visible only on mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>

        </nav>

        {/* Responsive: Mobile dropdown menu that appears when hamburger is clicked */}
        {isMenuOpen && (
          <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleScroll(e, link.toLowerCase())}
                className="text-base text-gray-400 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}

            {/* Show socials inside mobile menu because they are hidden at the top on mobile */}
            <div className="flex items-center gap-3 mt-4">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-xs text-gray-300 transition-colors hover:border-purple-500 hover:text-purple-400"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        )}

      </Container>
    </header>
  );
};

export default NavBar;
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({handleViewChange, searchBookByTitle, updateRightSection, setView, setViewBookList}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const links = [
    { view: 'showBooks', text: 'Show All Books', onClick: async() => {await handleViewChange("showBooks")} },
    { view: 'addBook', text: 'Add Book', onClick: () => handleViewChange("addBook") },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearch = (searchValue) => { 
    // e.preventDefault();
    setSearchValue(searchValue);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchValue);
    searchBookByTitle(searchValue);
    setSearchValue("");
  }

  return (
    <header className="bg-blue-500 fixed w-full z-10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-semibold text-lg">Bookwise</div>
          <div className="hidden md:flex items-center">
            <input
              type="text"
              className="border border-white rounded-3 p-2 focus:outline-none focus:border-white mr-2"
              placeholder="Search"
              name='search'
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button className="bg-white text-blue-500 rounded-l p-2" onClick={handleSubmit}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <nav
            className={`md:inline transition-all duration-700 ease-in-out w-full md:w-auto absolute md:relative left-0 md:top-0 bg-blue-500 md:bg-transparent p-4 md:p-0 ${
              menuOpen
                ? 'top-full opacity-100'
                : '-top-full opacity-0 md:opacity-100'
            }${menuOpen ? '' : ' invisible md:visible'}`}
          >
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-white">
              {links.map((link, index) => (
                <li key={index}>
                <p
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    link.onClick();
                  }}
                  className="text-white hover:text-white hover:opacity-75 cursor-pointer focus:outline-none"
                >
                  {link.text}
                </p>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="md:hidden text-white bg-blue-500"
            id="mobile-menu-button"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </header>
  )
};

export default Navbar;

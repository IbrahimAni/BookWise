import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faInfo } from '@fortawesome/free-solid-svg-icons';
import { LoadingOverlay } from '../components';

const Navbar = ({handleViewChange, searchBookByTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  const links = [
    { view: 'showBooks', text: 'Show All Books', onClick: async() => {setLoading(true); await handleViewChange("showBooks", () => setLoading(false))}},
    { view: 'addBook', text: 'Add Book', onClick: () => {setLoading(true); handleViewChange("addBook", () => setLoading(false))}},
    { view: 'info', type: 'icon', onClick: () => handleViewChange("settings") },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearch = (searchValue) => { 
    setSearchValue(searchValue);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchValue);
    setSearchValue("");
    setLoading(true)
    setMenuOpen(false);
    searchBookByTitle(searchValue, () => setLoading(false));
  }

  return (
    <header className="bg-blue-500 fixed w-full z-10">
      {loading && <LoadingOverlay />}
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-semibold text-lg">Bookwise</div>
          <div className="hidden md:flex items-center justify-between flex-grow">
            <div className="w-1/3"></div>
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
            <nav className="w-1/3 flex justify-end">
              <ul className="flex space-x-4 text-white">
                {links.map((link, index) => (
                  <li key={index} className="flex items-center">
                    {link.type === 'icon' ? (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          link.onClick();
                        }}
                        className="text-white bg-transparent hover:text-white hover:opacity-75 focus:outline-none"
                      >
                        <FontAwesomeIcon icon={faInfo} />
                      </button>
                    ) : (
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
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <button
            className="md:hidden text-white bg-transparent border-none"
            id="mobile-menu-button"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <nav
          className={`md:hidden transition-all duration-700 ease-in-out w-full md:w-auto absolute md:relative left-0 md:top-0 bg-blue-500 md:bg-transparent p-4 md:p-0 ${
            menuOpen
              ? 'top-full opacity-100'
              : '-top-full opacity-0 md:opacity-100'
          }${menuOpen ? '' : ' invisible md:visible'}`}
        >
          <div className="md:hidden mb-4">
            <input
              type="text"
              className="border border-white rounded-3 p-2 focus:outline-none focus:border-white w-full"
              placeholder="Search"
              name='search'
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button className="bg-white text-blue-500 w-full py-2 my-2" onClick={handleSubmit}>
              <FontAwesomeIcon icon={faSearch} /> Search
            </button>
          </div>
          <ul className="flex flex-col md:flex-row md:items-center md:space-y-0 md:space-x-4 text-white">
            {links.map((link, index) => (
              <li key={index} className="flex items-center">
                {link.type === 'icon' ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      link.onClick();
                    }}
                    className="text-white bg-transparent hover:text-white hover:opacity-75 focus:outline-none"
                  >
                    <FontAwesomeIcon icon={faInfo} />
                  </button>
                ) : (
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
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
};

export default Navbar;
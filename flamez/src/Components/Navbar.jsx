import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { MdRestaurantMenu } from "react-icons/md";


const navItems = [
  {
    title: "Home",
    path: "/",
    redirectPage: true,
  },
  {
    title: "About",
    path: "#about",
    redirectPage: false,
  },
  {
    title: "Category",
    path: "#category",
    redirectPage: false,
  },
  {
    title: "Recipe",
    path: "/recipie",
    redirectPage: true,
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuHandleClick =()=>{
    setMenuOpen(!menuOpen)
  }

  return (
    <div>
      <nav className="bg-primary text-white z-50 fixed w-full py-4">
        <div className="flex justify-between items-center mx-auto container px-4 md:px-10 max-w-[1250px]">
          <Link to={"/"} className="text-4xl font-allison">
            🔥Flamez
          </Link>

          <div className="space-x-10 text-lg  items-center hidden lg:flex">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.redirectPage === true ? (
                  <>
                    <Link  to={item.path} className="hover:opacity-70">
                      {item.title}
                    </Link>
                  </>
                ) : (
                  <a key={index} href={item.path} className="hover:opacity-70">
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={menuHandleClick}
            className="lg:hidden transition-all duration-700 ease-in-out"
          >
            {menuOpen ? (
              <MdRestaurantMenu className="text-3xl" />
            ) : (
              <CiMenuFries className="text-3xl" />
            )}
          </button>
        </div>

        {menuOpen === true && <MobileNavbar />}
      </nav>
    </div>
  );
};

export default Navbar;

export const MobileNavbar = () => {
  return (
    <>
      <div className=" lg:hidden w-full h-auto flex flex-col items-center space-y-6 py-6 rounded-b-2xl text-white bg-primary">
        {navItems.map((item, index) => (
          <div key={index}>
            {item.redirectPage === true ? (
              <>
                <Link key={index} to={item.path} className="hover:opacity-70">
                  {item.title}
                </Link>
              </>
            ) : (
              <a key={index} href={item.path} className="hover:opacity-70">
                {item.title}
              </a>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

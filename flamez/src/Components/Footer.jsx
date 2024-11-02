import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Footer = () => {
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

  return (
    <>
      <footer className=" py-20 w-full bg-primary">
        <div className="flex flex-col justify-between sm:flex-row mx-auto container px-4 max-w-[1200px] flex-wrap">
          <Link
            to="/"
            className="text-white text-3xl lg:text-5xl font-allison font-semibold"
          >
            🔥Flamez
          </Link>
          <div className="flex text-white flex-col space-y-4">
            <p className="font-semibold">Quick Links</p>
            {navItems.map((item, index) => (
              <div key={index}>
                {item.redirectPage === true ? (
                  <>
                    <Link to={item.path} className="hover:opacity-70">
                      {item.title}
                    </Link>
                  </>
                ) : (
                  <a href={item.path} className="hover:opacity-70">
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col space-y-4 text-white">
            <p className="font-semibold">Developer Tool</p>
            <a
              href="https://www.themealdb.com/api.php"
              className="hover:opacity-70"
            >
              API Link
            </a>
          </div>

          <div className="flex flex-col space-y-4 text-white">
            <p className="font-semibold">Social Links</p>
            <div className="flex items-center space-x-4">
              <a href="">
                <FaFacebook className="text-2xl hover:opacity-70" />
              </a>

              <a href="">
                <FaTwitter className='text-2xl hover:opacity-70'/>
              </a>

              <a href="">
                <FaLinkedin className='text-2xl hover:opacity-70'/>
              </a>
              <a href="">
                <FaInstagram className='text-2xl hover:opacity-70'/>
              </a>
              <a href="">
                <FaGithub className='text-2xl hover:opacity-70'/>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
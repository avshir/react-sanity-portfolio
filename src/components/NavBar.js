import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  const homeNavLinkClass =
    "inline-flex items-center py-6 px-3 mr-4 text-gray-200 hover:text-green-800 text-4xl font-bold cursive tracking-widest duration-500 ease-in-out";
  const homeActiveNavLinkClass = "text-white";

  const baseNavLinkClass =
    "inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-green-800 duration-500 ease-in-out";
  const activeNavLinkClass = "text-red-100 bg-red-700";

  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              homeNavLinkClass + (isActive ? homeActiveNavLinkClass : "")
            }
          >
            avshir
          </NavLink>
          <NavLink
            to="/post"
            className={({ isActive }) =>
              baseNavLinkClass + (isActive ? activeNavLinkClass : "")
            }
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              baseNavLinkClass + (isActive ? activeNavLinkClass : "")
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              baseNavLinkClass + (isActive ? activeNavLinkClass : "")
            }
          >
            About me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/avshir"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/anna-shirinskaya/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://youtube.com"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}

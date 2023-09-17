import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "../Link/Link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/products", name: "Products", id: 2 },
    { path: "/products/:id", name: "ProductDetail", id: 3 },
    { path: "/profile/:username", name: "UserProfile", id: 4 },
    { path: "/settings", name: "Settings", id: 5 },
  ];

  return (
    <nav className="p-6 bg-red-200 px-6">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineClose className="text-2xl"></AiOutlineClose>
        ) : (
          <HiMenuAlt1 className="text-2xl"></HiMenuAlt1>
        )}
      </div>

      <ul
        className={`md:flex justify-center ${
          open ? "top-12" : "-top-60"
        } bg-red-200 text-zinc-900 absolute md:static duration-1000 `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

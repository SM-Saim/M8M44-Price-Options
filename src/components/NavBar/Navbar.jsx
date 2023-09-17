import Link from "../Link/Link";

const Navbar = () => {
  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/products", name: "Products", id: 2 },
    { path: "/products/:id", name: "ProductDetail", id: 3 },
    { path: "/profile/:username", name: "UserProfile", id: 4 },
    { path: "/settings", name: "Settings", id: 5 },
  ];

  return (
    <nav>
      <ul className="md:flex justify-center">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

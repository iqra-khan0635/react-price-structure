import React from "react";

const arrayNavBar = [
  {
    title: "Features",
    path: "#",
  },
  {
    title: "Enterprise",
    path: "#",
  },
  {
    title: "Support",
    path: "#",
  },
  {
    title: "Pricing",
    path: "#",
  },
];

export default function NavBar() {
  return (
    <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      {arrayNavBar.map((link, index) => {
        return (
          <a
            className="me-3 py-2 text-dark text-decoration-none"
            href={link.path}
            key={index}
          >
            {link.title}
          </a>
        );
      })}
    </nav>
  );
}

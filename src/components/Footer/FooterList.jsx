import React from "react";

export default function FooterLinks(props) {
  const { title = "", links = [] } = props;
  return (
    <>
      <h5>{title}</h5>
      <ul className="list-unstyled text-small">
        {links.map((link, key) => {
          return (
            <li className="mb-1" key={key}>
              <a
                className="link-secondary text-decoration-none"
                href={link.path}
              >
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

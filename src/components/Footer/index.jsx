import React from "react";
import FooterLinks from "./FooterList";

export default function Footer() {
  const links = [
    {
      title: "Features",
      links: [
        {
          title: "Cool stuff",
          path: "#",
        },
        {
          title: "Random feature",
          path: "#",
        },
        {
          title: "Team feature",
          path: "#",
        },
        {
          title: "Stuff for developers",
          path: "#",
        },
        {
          title: "Another one",
          path: "#",
        },
        {
          title: "Last time",
          path: "#",
        },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          title: "Resource",
          path: "#",
        },
        {
          title: "Resource name",
          path: "#",
        },
        {
          title: "Another resource",
          path: "#",
        },
        {
          title: "Final resource",
          path: "#",
        },
      ],
    },
    {
      title: "About",
      links: [
        {
          title: "Team",
          path: "#",
        },
        {
          title: "Locations",
          path: "#",
        },
        {
          title: "Privacy",
          path: "#",
        },
        {
          title: "Terms",
          path: "#",
        },
      ],
    },
  ];

  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <div className="col-12 col-md">
          <img
            className="mb-2"
            src="../../bootstrap-logo.svg"
            alt=""
            width="24"
            height="19"
          />
          <small className="d-block mb-3 text-muted">&copy; 2017–2022</small>
        </div>
        {links.map((item, key) => (
          <div className="col-6 col-md" key={key}>
            <FooterLinks title={item.title} links={item.links} />{" "}
          </div>
        ))}
      </div>
    </footer>
  );
}

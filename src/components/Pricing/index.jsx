import React from "react";
import PricePlan from "./PricePlan";
import PriceCompare from "./PriceCompare";

export default function Pricing() {
  const pricePlan = [
    {
      title: "Free",
      price: 0,
      features: [
        "10 users included",
        "2 GB of storage",
        "Email support",
        "Help center access",
      ],
      btnText: "Sign up for free",
      default: false,
    },
    {
      title: "Pro",
      price: 15,
      features: [
        "20 users included",
        "10 GB of storage",
        "Priority email support",
        "Help center access",
      ],
      btnText: "Get Started",
      btnStyle: "btn-primary",
      default: false,
    },
    {
      title: "Enterprise",
      price: 29,
      features: [
        "30 users included",
        "15 GB of storage",
        "Phone and email support",
        "Help center access",
      ],
      btnText: "Contact Us",
      default: true,
    },
  ];
  return (
    <>
      <div
        style={{ maxWidth: "700px" }}
        className="p-3 pb-md-4 mx-auto text-center"
      >
        <h1 className="display-4 fw-normal">Pricing</h1>
        <p className="fs-5 text-muted">
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It’s built with default Bootstrap
          components and utilities with little customization.
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {pricePlan.map((item, key) => {
          return <PricePlan pricePlan={item} key={key} />;
        })}
      </div>
      <PriceCompare />
    </>
  );
}

import React from "react";

export default function PricePlan(props) {
  props = props.pricePlan;
  return (
    <>
      <div className="col">
        <div
          className={`card mb-4 rounded-3 shadow-sm ${
            props.default ? "border-primary" : ""
          }`}
        >
          <div
            className={`card-header py-3 ${
              props.default ? "text-bg-primary border-primary" : ""
            }`}
          >
            <h4 className="my-0 fw-normal">{props.title}</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              ${props.price}
              <small className="text-muted fw-light">/mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              {props.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button
              type="button"
              className={`w-100 btn btn-lg ${
                props.default
                  ? "btn-primary"
                  : props.btnStyle
                  ? props.btnStyle
                  : "btn-outline-primary"
              }`}
            >
              {props.btnText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

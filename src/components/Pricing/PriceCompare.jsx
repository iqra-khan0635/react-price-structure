import React from "react";

export default function PriceCompare() {
  const plans = [
    {
      title: "Public",
      free: true,
      pro: true,
      enterprise: true,
    },
    {
      title: "Private",
      free: false,
      pro: true,
      enterprise: true,
    },
    {
      title: "Permissions",
      free: true,
      pro: true,
      enterprise: true,
    },
    {
      title: "Sharing",
      free: false,
      pro: true,
      enterprise: true,
    },
    {
      title: "Unlimited members",
      free: false,
      pro: true,
      enterprise: true,
    },
    {
      title: "Extra security",
      free: false,
      pro: false,
      enterprise: true,
    },
  ];
  return (
    <>
      <h2 className="display-6 text-center mb-4">Compare plans</h2>
      <div className="table-responsive">
        <table className="table text-center">
          <thead>
            <tr>
              <th style={{ width: "34%" }}></th>
              <th style={{ width: "22%" }}>Free</th>
              <th style={{ width: "22%" }}>Pro</th>
              <th style={{ width: "22%" }}>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((item, key) => {
              return (
                <tr key={key}>
                  <th scope="row" className="text-start">
                    {item.title}
                  </th>
                  <td>
                    {item.free ? (
                      <svg className="bi" width="24" height="24">
                        <use href="#check" />
                      </svg>
                    ) : (
                      ""
                    )}
                  </td>
                  <td>
                    {item.pro ? (
                      <svg className="bi" width="24" height="24">
                        <use href="#check" />
                      </svg>
                    ) : (
                      ""
                    )}
                  </td>
                  <td>
                    {item.enterprise ? (
                      <svg className="bi" width="24" height="24">
                        <use href="#check" />
                      </svg>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

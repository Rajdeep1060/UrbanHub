import React, { useContext } from "react";
import style from "../styles/dashBoard.module.css";
import { Authcontext } from "../store/auth_context_prof_data";

import { v4 as uuidv4 } from "uuid";

function DashBoard() {
  const contextValue = useContext(Authcontext);

  // Check if the context value exists and has the necessary properties
  if (!contextValue || !contextValue[0] || !contextValue[0].city) {
    return null; // or return a loading/error message, or handle the case when the context value is not available
  }

  const { city, category, dashboard, dashboard_img } = contextValue[0];
  const route = [city, category];
  const options = dashboard;

  return (
    <div
      style={{
        background: `linear-gradient(to right,rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45)), url(${dashboard_img}) no-repeat center `,
      }}
      className={style.main}
    >
      <div className={style.route}>Home {route.map((el) => "/ " + el)}</div>
      <div className={style.herotext}>
        <ul className={style.herotext_head}>
          <h1>
            Get {route[1]} in {route[0]}
          </h1>
          {options.map((el) => (
            <li key={uuidv4()}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DashBoard;

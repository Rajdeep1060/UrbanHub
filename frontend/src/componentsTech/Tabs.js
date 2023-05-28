import style from "../styles/tabs.module.css";
import AboutProfsnal from "./AboutProfsnal";
import Faq from "./Faq";
import HowItWork from "./HowItWork";
import Professional from "./Professional";

import { Authcontext } from "../store/auth_context_prof_data";
import React, { useContext, useEffect } from "react";

const Tabs = () => {
  const contextValue = useContext(Authcontext);

  const initializeTabs = () => {
    const tabSelectFix = () => {
      let tabfix = document.getElementById("tabSelect");
      let elmnt = document.getElementById("howitworks_main");
      if (tabfix && elmnt) {
        let rect = elmnt.getBoundingClientRect();
        window.addEventListener("scroll", () => {
          rect = elmnt.getBoundingClientRect();
          if (rect.y < 150) tabfix.classList.add(style.tabSelect_active);
          else tabfix.classList.remove(style.tabSelect_active);
        });
      }
    };

    setTimeout(tabSelectFix, 2000);

    return () => {
      window.removeEventListener("scroll", tabSelectFix);
    };
  };

  useEffect(initializeTabs, []);

  if (!contextValue || !contextValue[0] || !contextValue[0].city) {
    return null;
  }

  const { city, category, numOfProf, faqs, aboutProf } = contextValue[0];
  const route = [city, category, numOfProf];

  let tabs = [
    ["How it Works", "howitworks"],
    [route[1], "professional"],
    ["FAQs", "faqs"],
    ["About " + route[1], "aboutprofsnal"],
  ];

  const tabSelection = (e) => {
    let element = e.target;
    if (element.id === "tabSelect" || !element.id) return;
    let x = element.parentElement.children;
    for (let i = 0; i < x.length; i++) x[i].classList.remove(style.current_tab);
    element.classList.add(style.current_tab);
    let elmnt = document.getElementById(`${element.id}_main`);
    elmnt.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={style.tablayout}>
      <div id={"tabSelect"} className={style.tabSelect} onClick={tabSelection}>
        {tabs.map((el, i) => (
          <div
            key={el[1]}
            className={i === 0 ? style.current_tab : ""}
            id={el[1]}
          >
            {el[0]}
          </div>
        ))}
      </div>
      <HowItWork />
      <Professional route={route} />
      <Faq faqs={faqs} />
      <AboutProfsnal aboutProf={aboutProf} technician={route[1]} />
    </div>
  );
};

export default Tabs;

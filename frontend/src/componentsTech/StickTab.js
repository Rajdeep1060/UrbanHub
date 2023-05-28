import style from "../styles/stickTab.module.css";
import { Authcontext } from "../store/auth_context_prof_data";
import React, { useContext, useState } from "react";

import { v4 as uuidv4 } from 'uuid';
import ModelOverlay from "./ModelOverlay";

function StickTab() {
  const [overlay, setOverlay] = useState(false);

  const { needfor, ratingStatus, category } = useContext(Authcontext);

  // Check if ratingStatus exists and has at least two elements
  const showRating = ratingStatus && ratingStatus.length >= 2;

  return (
    <>
      {overlay && <ModelOverlay onCancelbutton={() => setOverlay(false)} />}
      <div className={style.main}>
        <div className={style.reqfor}>
          <div className={style.reqfor_head}>Need an {category} for:</div>
          {needfor && needfor.map(el => (
            <div key={uuidv4()} className={style.reqfor_child} onClick={() => setOverlay(true)}>
              {el}
            </div>
          ))}
        </div>
        {showRating && (
          <div className={style.rating}>
            <div className={style.rating_num}>
              <div className={style.rating_green}>&#9733; {ratingStatus[0]}<span className={style.sub}>/5</span></div>
              <div className={style.rating_text}>Based on {ratingStatus[1]}</div>
            </div>
            <div className={style.rating_booking_num}>
              {ratingStatus[2] && (
                <>
                  <div className={style.rating_black}>{ratingStatus[2]}</div>
                  <div className={style.rating_text}>Bookings done in the last 1 year</div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default StickTab;

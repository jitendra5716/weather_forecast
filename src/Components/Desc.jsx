import style from "../Styles/main.module.css";
import Details from "./Details";
import Week from "./Week";
import { useContext } from "react";
import { weatherContext } from "../weatherContext";

const Desc = () => {
  const value = useContext(weatherContext);
  const cel = value.cel;
  const setCel = value.setCel;
  const handleCel = value.handleCel;
  const handleFaren = value.handleFaren;
  return (
    <>
      <div className={style.secondDiv}>
        <div className={style.nav}>
          <h2>Week</h2>
          <div className={style.btnDiv}>
            <button
              onClick={handleCel}
              className={style.tempIcon}
              id={cel ? style.celBtn : ""}
            >
              <sup>&deg;</sup>C
            </button>
            <button
              onClick={handleFaren}
              className={style.tempIcon}
              id={cel ? "" : style.farBtn}
            >
              <sup>&deg;</sup>F
            </button>
          </div>
        </div>
        <Week />
        <h2 id={style.todayTitle}>Today's Highlights</h2>
        <div className={style.today}>
          <Details />
        </div>
      </div>
    </>
  );
};
export default Desc;

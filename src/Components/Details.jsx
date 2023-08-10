import style from "../Styles/main.module.css";
import { weatherContext } from "../weatherContext";
import { useContext } from "react";

const Details = () => {
  const value = useContext(weatherContext);
  const cel = value.cel;
  const data = value.value?.list?.[0];

  let tm = value?.value?.city?.sunrise;

  return (
    <>
      <div className={style.desc}>
        <div className={style.descDiv}>
          <h5>Min & Max Temp.</h5>
          <div className={style.minMaxDiv}>
            <p>
              <span>Min : </span>
              <span>
                {cel
                  ? (data?.main?.temp_min - 273.15).toFixed(2)
                  : (((data?.main?.temp_min - 273.15) * 9) / 5 + 32).toFixed(2)}
                <sup>&deg;{cel ? "C" : "F"}</sup>
              </span>
            </p>
            <p>
              <span>Max : </span>
              <span>
                {cel
                  ? (data?.main?.temp_max - 273.15).toFixed(2)
                  : (((data?.main?.temp_max - 273.15) * 9) / 5 + 32).toFixed(2)}
                <sup>&deg;{cel ? "C" : "F"}</sup>
              </span>
            </p>
          </div>
        </div>
        <div className={style.descDiv} id={style.humidityDiv}>
          <h5>Humidity</h5>
          <p className={style.humidityPara}>
            <span>
              {data?.main?.humidity} <sup>%</sup>
            </span>
          </p>
          <p className={style.normal}>Normal</p>
        </div>
        <div className={style.descDiv}>
          <h5>Wind Speed & Direction</h5>
          <p className={style.windDiv}>
            <span className={style.windSpeed}>{data?.wind?.speed} </span>
            <span className={style.kmh}>km/h</span>
          </p>
          <p className={style.windDirection}>
            <i class="fa-solid fa-wind"></i>{" "}
            <span>
              {data?.wind?.deg} <sup>&deg;</sup>
            </span>
          </p>
        </div>
        <div className={style.descDiv}>
          <h5>Weather Condition</h5>
          <div className={style.weateherConditionImgDiv}>
            <img
              src="https://img.icons8.com/?size=512&id=QZJFPE7TNi5Q&format=png"
              alt=""
            />
          </div>
          <p className={style.weatherDesc}>{data?.weather?.[0]?.description}</p>
        </div>
        <div className={style.descDiv}>
          <h5>Sunrise & Sunset</h5>
          <div className={style.sunrise}>
            <img
              src="https://img.icons8.com/?size=512&id=eB996llrCC83&format=png"
              alt=""
            />
            <span>
              6:35 <span>AM</span>
            </span>
          </div>
          <div className={style.sunrise}>
            <img
              src="https://img.icons8.com/?size=512&id=9XlIvJuZ1DEv&format=png"
              alt=""
            />
            <span>
              6:35 <span>PM</span>
            </span>
          </div>
        </div>
        <div className={style.descDiv}>
          <h5>Visibility</h5>
          <p className={style.visibilityPara}>
            {data?.visibility / 1000} <span>km</span>
          </p>
          <p className={style.average}>Average</p>
        </div>
      </div>
    </>
  );
};

export default Details;

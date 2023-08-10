import style from "../Styles/main.module.css";
import { useContext } from "react";
import { weatherContext } from "../weatherContext";

const Week = () => {
  const value = useContext(weatherContext);

  const data = value?.value;
  const cel = value.cel;

  const dataVal = data?.list?.["0"];
  const temp = data?.list?.["0"]?.main?.temp - 273.15;
  const date = data?.list?.["0"]?.dt_txt;
  const year = date?.slice(0, 4);
  const month = date?.slice(5, 7);
  const dt = date?.slice(8, 10);
  const time = date?.slice(11, 16);

  const currentDate = new Date(`${year}-${month}-${dt}`);
  const nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + 1);

  const secondDay = new Date(currentDate);
  secondDay.setDate(currentDate.getDate() + 2);

  const thirdDay = new Date(currentDate);
  thirdDay.setDate(currentDate.getDate() + 3);

  const fourDay = new Date(currentDate);
  fourDay.setDate(currentDate.getDate() + 4);

  const fiveDay = new Date(currentDate);
  fiveDay.setDate(currentDate.getDate() + 5);

  return (
    <>
      <div className={style.weekDiv}>
        <div className={style.weekDay}>
          <p>{nextDate.toDateString()}</p>
          <div className={style.imgIconDiv}>
            <img
              src="https://img.icons8.com/?size=512&id=zIVmoh4T8wh7&format=png"
              alt=""
            />
          </div>
          <div className={style.spanDiv}>
            <span>
              {cel
                ? (data.list?.[10]?.main?.temp - 273.15).toFixed(2)
                : (
                    ((data.list?.[10]?.main?.temp - 273.15) * 9) / 5 +
                    32
                  ).toFixed(2)}
              <sup>&deg;{cel ? "C" : "F"}</sup>
            </span>
            <span>{data.list?.[10]?.weather?.[0]?.description}</span>
          </div>
        </div>
        <div className={style.weekDay}>
          <p>{secondDay.toDateString()}</p>
          <div className={style.imgIconDiv}>
            <img
              src="https://img.icons8.com/?size=512&id=zIVmoh4T8wh7&format=png"
              alt=""
            />
          </div>
          <div className={style.spanDiv}>
            <span>
              {cel
                ? (data.list?.[17]?.main?.temp - 273.15).toFixed(2)
                : (
                    ((data.list?.[17]?.main?.temp - 273.15) * 9) / 5 +
                    32
                  ).toFixed(2)}
              <sup>&deg;{cel ? "C" : "F"}</sup>
            </span>
            <span>{data.list?.[17]?.weather?.[0]?.description}</span>
          </div>
        </div>
        <div className={style.weekDay}>
          <p>{thirdDay.toDateString()}</p>
          <div className={style.imgIconDiv}>
            <img
              src="https://img.icons8.com/?size=512&id=zIVmoh4T8wh7&format=png"
              alt=""
            />
          </div>
          <div className={style.spanDiv}>
            <span>
              {cel
                ? (data.list?.[24]?.main?.temp - 273.15).toFixed(2)
                : (
                    ((data.list?.[24]?.main?.temp - 273.15) * 9) / 5 +
                    32
                  ).toFixed(2)}
              <sup>&deg;{cel ? "C" : "F"}</sup>
            </span>
            <span>{data.list?.[24]?.weather?.[0]?.description}</span>
          </div>
        </div>
        <div className={style.weekDay}>
          <p>{fourDay.toDateString()}</p>
          <div className={style.imgIconDiv}>
            <img
              src="https://img.icons8.com/?size=512&id=zIVmoh4T8wh7&format=png"
              alt=""
            />
          </div>
          <div className={style.spanDiv}>
            <span>
              {cel
                ? (data.list?.[30]?.main?.temp - 273.15).toFixed(2)
                : (
                    ((data.list?.[30]?.main?.temp - 273.15) * 9) / 5 +
                    32
                  ).toFixed(2)}
              <sup>&deg;{cel ? "C" : "F"}</sup>
            </span>
            <span>{data.list?.[30]?.weather?.[0]?.description}</span>
          </div>
        </div>
        <div className={style.weekDay}>
          <p>{fiveDay.toDateString()}</p>
          <div className={style.imgIconDiv}>
            <img
              src="https://img.icons8.com/?size=512&id=zIVmoh4T8wh7&format=png"
              alt=""
            />
          </div>
          <div className={style.spanDiv}>
            <span>
              {cel
                ? (data.list?.[37]?.main?.temp - 273.15).toFixed(2)
                : (
                    ((data.list?.[37]?.main?.temp - 273.15) * 9) / 5 +
                    32
                  ).toFixed(2)}
              <sup>&deg;{cel ? "C" : "F"}</sup>
            </span>
            <span>{data.list?.[37]?.weather?.[0]?.description}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Week;

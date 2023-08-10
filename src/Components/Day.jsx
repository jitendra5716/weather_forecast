import style from "../Styles/main.module.css";
import { weatherContext } from "../weatherContext";
import { useContext } from "react";
import moment from "moment/moment";

const Day = () => {
  const value = useContext(weatherContext);
  const handleSubmit = value.handleSubmit;
  const cityName = value.cityName;
  const setCityName = value.setCityName;
  const data = value?.value;
  const icon = value.icon;
  const cel = value.cel;
  // console.log(data?.list);
  // let lst = data.list.map((li) => {
  //   return li;
  // });
  // console.log(lst);
  const dataVal = data?.list?.["0"];
  const temp = data?.list?.["0"]?.main?.temp - 273.15;
  const date = data?.list?.["0"]?.dt_txt;
  // console.log(date);
  const year = date?.slice(0, 4);
  const month = date?.slice(5, 7);
  const dt = date?.slice(8, 10);
  const time = date?.slice(11, 16);
  // console.log(year, " ", month, " ", dt, " ", time);
  var longDateStr = moment(`${month}/${dt}/${year}`, "M/D/Y").format(
    "dddd MMMM D Y"
  );
  // console.log(longDateStr);
  const day = longDateStr?.slice(0, 9);
  // console.log(day);
  return (
    <>
      <div>
        <img src={icon} alt="" />
        <div className={style.iconDiv}>
          <img
            src="https://img.icons8.com/?size=512&id=MVj2tmasj0Pp&format=png"
            alt="cloud_icon"
          />
        </div>
        <div className={style.degreeDiv}>
          <p id={style.deg}>
            {cel ? temp.toFixed(2) : ((temp * 9) / 5 + 32).toFixed(2)}
            <sup>&deg;{cel ? "C" : "F"}</sup>
          </p>
          <p id={style.dayAndTime}>
            <span>{day},</span> <span id={style.time}>{time}</span>
          </p>
        </div>
        <hr />
        <div>
          <div className={style.cloudDesc}>
            <div className={style.cloudDiv1}>
              <img
                src="https://img.icons8.com/?size=512&id=2767&format=png"
                alt=""
              />
              <span>{dataVal?.weather?.[0]?.description}</span>
            </div>
            <div className={style.cloudDiv2}>
              <img
                src="https://img.icons8.com/?size=512&id=18609&format=png"
                alt=""
              />
              <span>Rain-30%</span>
            </div>
          </div>
        </div>
        <div className={style.cityDiv}>
          <img
            src="https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          <p>{data?.city?.name}</p>
        </div>
      </div>
    </>
  );
};

export default Day;

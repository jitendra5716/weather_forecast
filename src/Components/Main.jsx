import style from "../Styles/main.module.css";
import Day from "./Day";
import Desc from "../Components/Desc";
import axios from "axios";
import { useEffect, useState } from "react";
import { weatherContext } from "../weatherContext";
import SearchDiv from "./SearchDiv";

const Main = () => {
  const [cityName, setCityName] = useState("Delhi");
  const [value, setValue] = useState([]);
  const [icon, setIcon] = useState();
  const [cel, setCel] = useState(true);

  useEffect(() => {
    setCityName("Delhi");
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=
          delhi
        &appid=03a8f6bc40d9794f67400983661d56ef`
      )
      .then((res) => {
        // console.log(res.data);
        setValue(res.data);
      });
  }, []);

  function fetchIcon(val) {
    axios.get(`https://openweathermap.org/img/wn/${val}@2x.png`).then((res) => {
      setIcon(res.data);
      // setIcon(res.data);
    });
  }

  function fetchUrl(cityName) {
    if (cityName == "") {
      // cityName = "Delhi";
      return;
    }
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${
          cityName ? cityName : "Delhi"
        }&appid=03a8f6bc40d9794f67400983661d56ef`
      )
      .then((res) => {
        // console.log(res.data);
        setValue(res.data);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityName === "") {
      alert("Please Enter City Name... \n City Name Can't be Empty!");
    }
    fetchUrl(cityName);
    fetchIcon("10n");
    setCityName("");
  };

  const handleCel = () => {
    setCel(!cel);
  };
  const handleFaren = () => {
    setCel(!cel);
  };

  return (
    <>
      <weatherContext.Provider
        value={{
          value,
          cityName,
          setCityName,
          handleSubmit,
          icon,
          cel,
          setCel,
          handleCel,
          handleFaren,
        }}
      >
        <div className={style.outerDiv}>
          <div className={style.firstDiv}>
            <SearchDiv />
            <Day />
          </div>
          <Desc />
        </div>
      </weatherContext.Provider>
    </>
  );
};
export default Main;

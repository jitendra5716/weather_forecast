import style from "../Styles/main.module.css";
import { weatherContext } from "../weatherContext";
import { useContext } from "react";
// import moment fro

const SearchDiv = () => {
  const value = useContext(weatherContext);
  const handleSubmit = value.handleSubmit;
  const cityName = value.cityName;
  const setCityName = value.setCityName;
  const data = value.value;

  return (
    <div className={style.searchDiv}>
      <form action="">
        <input
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
          id={style.cityInput}
          type="text"
          name="city"
          required
          placeholder="Search for places..."
        />
        <button onClick={handleSubmit} type="submit" id={style.searchIcon}>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchDiv;

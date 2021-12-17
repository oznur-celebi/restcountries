import React, { useEffect, useState } from "react";

const FlagApp = () => {
  const [ulkeler, setUlkeler] = useState([]);
  const [hata, setHata] = useState(false);
  useEffect(() => {
    //update
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setHata(true);
        }
      })
      .then((data) => setUlkeler(data))
      .catch((err) => console.log(err));
    return () => {
      //didanmount
    };
  }, []);
  if (!hata) {
    return (
      <div>
        {ulkeler.map((ulke) => {
          const { name, capital, flags } = ulke;
          return (
            <div key={name.common}>
              <h2>{name.common}</h2>
              <img src={flags.png} alt="" />
              <img src={flags[1]} alt="" />
              <h4>{capital}</h4>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Hata var !!!</h1>
      </div>
    );
  }
};

export default FlagApp;

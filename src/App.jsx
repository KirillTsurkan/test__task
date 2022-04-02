import React from "react";
import Slider from "./components/CountrySlaider";

function App() {

  const handleSubmit =(e)=> {
    e.preventDefault()
    console.log('hi')
  }

  const clickButton =(e) => {
    e.target.classList.toggle('chips__button_active')

  }
  return (
    <main className="content">
      <Slider />

      <h2 className="slider__subtitle">Мир Brezzor огромный, исследуй его!</h2>
      <div className="switch-container">
        <div className="switch-container__wrapper">
          <button onClick={clickButton} className="chips__button">
            Пляжи
          </button>
          <button onClick={clickButton} className="chips__button">Brezzor Pass</button>
          <button onClick={clickButton}className="chips__button"> Впечатления</button>
          <button onClick={clickButton}className="chips__button">Маршруdddты</button>
        </div>
        <form onSubmit={handleSubmit}>
          <input className="text__input"
            id="search"
            type="text"
            tabIndex={1}
            placeholder="Поиск по стране, региону, название пляжа"
          />
          <div className="button-wrapper">
            <button type="button" className="map-button">на карте</button>
            <button type="submit"  className="submit-button"> Все пляжи страны</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;

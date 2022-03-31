import React from "react";
import Slider from "./components/CountrySlayder";

function App() {
  return (
    <main className="content">
      <Slider />

      <h2 className="slider__subtitle">Мир Brezzor огромный, исследуй его!</h2>
      <div className="switch-container">
        <div className="switch-container__wtapper">
          <button className="switch__button switch__button_active">Пляжи</button>
          <button className="switch__button">Brezzor Pass</button>
          <button className="switch__button"> Впечатления</button>
          <button className="switch__button">Маршруты</button>
        </div>
        <form>
          <input
            id="search"
            type="text"
            tabIndex={1}

            placeholder="Поиск по стране, региону, название пляжа"
          />
          <div className="button-wrapper">
            <button className="buttonSubmitMap"> на карте</button>
            <button className="buttonSubmit"> Все пляжи страны</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;

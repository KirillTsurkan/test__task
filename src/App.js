import React from "react";
import Slider from "./components/CountrySlayder";

function App() {

  const handleSubmit =(e)=> {
    e.preventDefault()
    console.log('hi')
  }

  const clickButton =(e) => {
    e.target.classList.toggle('switch__button_active')
      // console.log('hello')
      // e.target.classList.add('switch__button_active')
    // if (e.target && e.target.classList.contains("switch__button" &&'switch__button_active')) {
    //   console.log('nononno')
    //   e.target.classList.remove('switch__button_active')
    // }
  }
  return (
    <main className="content">
      <Slider />

      <h2 className="slider__subtitle">Мир Brezzor огромный, исследуй его!</h2>
      <div className="switch-container">
        <div className="switch-container__wtapper">
          <button onClick={clickButton} className="switch__button">
            Пляжи
          </button>
          <button onClick={clickButton} className="switch__button">Brezzor Pass</button>
          <button onClick={clickButton}className="switch__button"> Впечатления</button>
          <button onClick={clickButton}className="switch__button">Маршруты</button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            id="search"
            type="text"
            tabIndex={1}
            placeholder="Поиск по стране, региону, название пляжа"
          />
          <div className="button-wrapper">
            <button type="button" className="buttonSubmitMap">на карте</button>
            <button type="submit"  className="buttonSubmit"> Все пляжи страны</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;

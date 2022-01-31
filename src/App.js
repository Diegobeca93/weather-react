import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from './components/Weather';
// import WeatherInfo from './components/WeatherInfo'


// const REACT_APP_API_URL = 'api.openweathermap.org/data/2.5/weather?q={city name}&appid={API_key}';
// const API_key = 'f4a6b3e6dacf5f21bc96e5306edbe116';
// const REACT_APP_ICON_URL = 'https://openweathermap.org/img/w';

function App() {
  

  return (
    <div className="App">
    <Weather />   
    </div>  
  );
}

export default App;
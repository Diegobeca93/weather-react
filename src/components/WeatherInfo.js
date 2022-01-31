import React from 'react';
import './WeatherInfo.css';
import Clock from 'react-live-clock';


const WeatherInfo = ({data}) => {

  const iconUrl = 'https://openweathermap.org/img/wn/' + `${data.weather[0].icon}` + '.png';
  
  return (

      <div className="grid align__item">
        <div className="card__info">
            <div className="time">
                <spand className='time__date'>  <Clock date={''} format={'dddd, MMMM Mo, YYYY'} /></spand>
                <spand className='time__clock'> <Clock format={'HH:mm:ss'} ticking={true} /></spand>
            </div>
            <div className="info-header">
              <div className="info-header-temp">
                <h2 className="city">{data.name}, {data.sys.country}</h2>
                <span className="Temp">{Math.round(data.main.temp)}<span className='celsius'>°</span> </span> 
              </div>
              <div>
                <img src={iconUrl} className='weather-icon' alt=''/>
                <h5>{data.weather[0].main}</h5>
              </div>

            </div>
            <div className="info-footer">
                <div className="container">
                  <div className="row">
                      <div className="col-md-4">  
                        <div className="card-counter">
                          <span className="count-numbers">{data.main.humidity}%</span>
                          <span className="count-name">Humidity</span>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="card-counter">
                          <span className="count-numbers">{data.main.temp_min}&deg;</span>
                          <span className="count-name">Min Temp.</span>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="card-counter">
                          <span className="count-numbers">{data.main.temp_max}&deg;</span>
                          <span className="count-name">Max temp.</span>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
  )
};

export default WeatherInfo;

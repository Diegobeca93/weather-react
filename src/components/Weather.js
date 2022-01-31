/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
// import { getApi } from '../service/api';
import './Weather.css';
import WeatherInfo from './WeatherInfo'


const API_key = 'f4a6b3e6dacf5f21bc96e5306edbe116';


function Weather() {

    const [ form, setForm ] = useState({city:'', country:''});
    const [ weather, setWeather ] = useState([]);
  
    const getWeather = async (e) => {
        e.preventDefault()
        
        const data = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${API_key}&units=metric`
            )
        .then((res) => res.json())
        .then((data) => data)
        
        setWeather( { data: data } )    
        

    }


    const handlechange = (e) =>{    
        let name = e.target.name;
        let value = e.target.value;

        if (name == 'city') {
            setForm({...form, city: value})
        }if (name == 'country') {
            setForm({...form, country: value})
        }
        console.log(form.city, form.country)
    }

    return (
        
            <div className="grid align__item">
                <div className="card">  
                 {/* <img className='site__logo' alt='logo weather app' /> */}
                    <h2>WEATHER REACT APP</h2>
                    <form className="form" >
                        <div className="form__field">
                            <input 
                                type="text" 
                                placeholder="City" 
                                name='city'
                                onChange={(e)=> handlechange(e)}
                            />
                        </div>
                        <div className="form__field">
                            <input 
                                type="text" 
                                placeholder="Country"
                                name='country'  
                                onChange={(e)=> handlechange(e)}
                            />
                        </div>
                        <div className="form__field">
                            <button 
                                value="Buscar"
                                onClick={(e)=> getWeather(e)}
                                >Buscar</button>
                        </div>
                    </form>
            
                </div>
                {
                    weather.data !== undefined ?(
                        <WeatherInfo data={weather.data}/>
                    ) : null    
                }
            </div>
    )
}

export default Weather

import './App.css'
import WeatherApp from './Components/WeatherApp'
import React, { Component } from 'react'
import Logo from "./Components/Logo.png"



export default class App extends Component {
  CityWeatherArr = []
  constructor() {


    super()
    this.state = {
      loading: false,
      City: "Amreli"


    }
  }

  TextChangeHandler = (e) => {
    this.setState({
      City: e.target.value
    })
  }
  SubmitClick = (e) => {

    this.fetchDetails()
    e.preventDefault()
  }



  componentDidMount() {

    this.fetchDetails()

  }
  fetchDetails = async (props) => {
    let options = {
      method: 'GET',
      headers: {
        'X-Api-Key': process.env.REACT_APP_WHEATHER_API
      }
    }
    let url = `https://api.api-ninjas.com/v1/weather?city=${this.state.City}`
    this.setState({ loading: true })
    let data = await fetch(url, options)

    let ParsedData = await data.json()
    // console.log(ParsedData);
    this.CityWeatherArr = ParsedData


    this.setState({
      loading: false
    })

  }
  render() {
    return (

      <div className="card shadow-4-strong " >
        <div className="card-body shadow-4-strong my-3 py-2  d-flex justify-content-between  ">

          <div>
            <img src={Logo} alt="Spinner" srcset="Spinner" />
          </div>
          <div className='row d-flex justify-content-end'>
            <div className="col-7">
              <input className="form-control mx-1 " type="search" placeholder="Search" aria-label="Search" onChange={this.TextChangeHandler} />
            </div>
            <div className="col-5">


              <button className='btn btn-dark' onClick={this.SubmitClick} >Check Weather</button>
            </div>

          </div>



        </div>

        <WeatherApp City={this.state.City} Temprature={this.CityWeatherArr.temp} Cloud_ptc={this.CityWeatherArr.cloud_ptc} feels_like={this.CityWeatherArr.feels_like} humidity={this.CityWeatherArr.humidity} max_temp={this.CityWeatherArr.max_temp} min_temp={this.CityWeatherArr.min_temp} sunrise={this.CityWeatherArr.sunrise} sunset={this.CityWeatherArr.sunset} wind_degrees={this.CityWeatherArr.wind_degrees} wind_speed={this.CityWeatherArr.wind_speed}
        />




      </div>
    )
  }
}




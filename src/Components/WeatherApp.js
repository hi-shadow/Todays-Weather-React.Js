import React, { Component } from 'react'


export default class WeatherApp extends Component {


    WeatherImage = <svg class="icon" data-src="/images/weathericons/3.svg" viewBox="0 0 288 288" width="120" height="120"><g stroke-width="9.593" fill="none" fill-rule="evenodd"><path d="M143.898 21v47.966M0 164.898h47.966M211.722 97.074l33.912-33.912M76.074 97.074 42.162 63.162M42.162 266.634l33.912-33.912M220.356 159.142c-2.666-35.73-29.7-64.861-65.133-70.183-35.433-5.322-69.833 14.581-82.878 47.952-13.045 33.37-1.264 71.327 28.384 91.446" stroke="#FF8700"></path><path d="M239.83 169.695h-7.53a52.763 52.763 0 0 0-92.958 28.78h-9.834c-15.894 0-28.78 12.885-28.78 28.78 0 15.894 12.886 28.779 28.78 28.779h110.323c23.841 0 43.169-19.328 43.169-43.17 0-23.841-19.328-43.17-43.17-43.17Z" stroke="#BABABA"></path></g></svg>

    render() {
        return (

            <div>




                <div className="row d-flex justify-content-center " style={{ Color: "#282828 " }}>
                    <div className="col-md-9 col-lg-7 col-xl-6">

                        <div className="card mb-4 gradient-custom  shadow-4-strong" style={{ borderRadius: " 25px " }}>
                            <div className="card-body p-4">

                                <div id="demo1" className="carousel slide" data-ride="carousel">


                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="d-flex justify-content-between mb-4 pb-2">

                                                <div>
                                                    <h2 className="display-2"><strong>{this.props.Temprature}</strong></h2>

                                                    <p className="mb-0 mx-1 ">Feel Like : <strong>{this.props.feels_like ? this.props.feels_like : "0"}</strong>&#8451;
                                                    </p>

                                                    <span className="mb-0 mx-1">Min. Temp <strong> {this.props.min_temp ? this.props.min_temp : "0"}</strong> &#8451;</span>
                                                    <span className="mb-0 mx-1">Max Temp  <strong>{this.props.max_temp ? this.props.max_temp : "0"}</strong>&#8451;
                                                    </span>

                                                    <p className="text-muted mb-0 fs-4 my-2">{this.props.City} , India</p>

                                                    <p className="text-muted mb-0">{ }</p>
                                                </div>
                                                <div>
                                                    {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp" alt="sun-image" style={{ width: "150px" }} /> */}
                                                    {this.WeatherImage}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div><div className="card mb-4 shadow-4-strong" style={{ borderRadius: " 25px " }}>
                            <div className="card-body p-4">

                                <div id="demo2" className="carousel slide" data-ride="carousel">

                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="d-flex justify-content-around text-center mb-3  pt-2">
                                                <div className="flex-column">

                                                    &#9729;
                                                    <p className="mb-0"><strong>{this.props.Cloud_ptc ? this.props.Cloud_ptc : "0"}</strong></p>
                                                    <p className="mb-0 text-muted" style={{ fontSize: ".90rem " }}>Cloud</p>
                                                </div>

                                                <div className="flex-column">
                                                    &#10084;
                                                    <p className="mb-0"><strong>{this.props.humidity ? this.props.humidity : "0"}</strong></p>
                                                    <p className="mb-0 text-muted" style={{ fontSize: ".90rem " }}>Humidity</p>
                                                </div>
                                                <div className="flex-column">
                                                    &#9728;
                                                    <p className="mb-0"><strong>{this.props.sunrise ? this.props.sunrise : "0"}</strong></p>
                                                    <p className="mb-0 text-muted" style={{ fontSize: ".90rem " }}>Sunrise</p>
                                                </div>
                                                <div className="flex-column">
                                                    &#9788;
                                                    <p className="mb-0"><strong>{this.props.sunset ? this.props.sunset : "0"}</strong></p>
                                                    <p className="mb-0 text-muted" style={{ fontSize: ".90rem " }}>Sunset</p>
                                                </div>
                                                <div className="flex-column">
                                                    &#8599;
                                                    <p className="mb-0"><strong>{this.props.wind_degrees ? this.props.wind_degrees : "0"}</strong></p>
                                                    <p className="mb-0 text-muted" style={{ fontSize: ".90rem " }}>Wind Degrees</p>
                                                </div>
                                                <div className="flex-column">
                                                    &rArr;
                                                    <p className="mb-0"><strong>{this.props.wind_speed ? this.props.wind_speed : "0"} km/h</strong></p>
                                                    <p className="mb-0 text-muted" style={{ fontSize: ".90rem " }}>Wind Speed</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>





        )
    }
}

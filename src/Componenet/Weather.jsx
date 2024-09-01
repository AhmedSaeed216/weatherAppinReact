import React from 'react'

const Weather = ({ WeatherData }) => {
    console.log(WeatherData)
    return (
        <div>
            {
                WeatherData.weather ? (
                    <div className="weather  p-1 w-[500px] h-[250px] bg-gray-400 border border-black rounded-lg m-auto relative shadow-md">
                        <div className="flex justify-between w-full ">
                            <div className='w-1/2 my-4 mx-auto flex justify-between items-center'>
                                <div className='flex flex-col items-start justify-between h-full'>
                                    <div>
                                        <p className='text-xl'>
                                            <h1 className='text-xl  font-bold'>

                                                {WeatherData.name}
                                                <br />
                                            </h1>

                                            <div className="text-xs">

                                                {WeatherData.weather[0].description}
                                            </div>



                                            <div >
                                                <h2 className=' m-[3.0rem] text-6xl font-bold inline'>

                                                    {WeatherData.main.temp.toFixed()} °C
                                                </h2>
                                            </div>



                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 2nd half */}
                            <div className="w-1/2 flex flex-col justify-between items-end">
                                <div className="relative">
                                    {/* <img src={WeatherData.weather[0].icon} alt="img" srcset="" className='w-[120px]' /> */}
                                    <img
                                        src={`http://openweathermap.org/img/wn/${WeatherData.weather[0].icon}@2x.png`}
                                        alt="img"
                                        className="w-[120px]"
                                    />

                                </div>
                                {WeatherData.name !== undefined ? (
                                    <div className="flex flex-col justify-evenly gap-y-2 my-2 mx-auto text-xs">
                                        <div className="flex-justify-between gap-x-8">
                                            <p className='font-bold w-40'>Feels like :
                                                {"" + WeatherData.main.temp} °C

                                            </p>
                                        </div>
                                        <div className="flex-justify-between gap-x-8">
                                            <p className='font-bold w-40'>

                                                {"Humidity: " + WeatherData.main.humidity} %
                                            </p>
                                        </div>
                                        <div className="flex-justify-between gap-x-8">
                                            <p className='font-bold w-40'>

                                                {"Wind Speed  :" + WeatherData.wind.speed} KPH
                                            </p>
                                        </div>

                                        <div className="flex-justify-between gap-x-8">
                                            <p className='font-bold w-40'>


                                                {"Pressure is  :" + WeatherData.main.pressure} hpa
                                            </p>
                                        </div>
                                    </div>


                                ) : null}
                            </div>
                        </div>
                    </div>
                ) : null}
        </div>
    )
}

export default Weather
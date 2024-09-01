import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import Weather from './Componenet/Weather'

// function App() {
  

//   // https://api.openweathermap.org/data/2.5/weather?lat=74.3413&lon=31.5105&appid=b24ed4bfa7f7b14aefc35ad20e09bf32

//   const APIKey ="b24ed4bfa7f7b14aefc35ad20e09bf32"   
  
//   const [Longitutde, setLongitutde] = useState("")
//   const [Latitutde, setLatitutde] = useState("")
//   const [data,setdata]=useState({})
//   const [WeatherData, setWeatherData] = useState()
//   const url=`https://api.openweathermap.org/data/2.5/weather?lat=${Latitutde}&lon=${Longitutde}&units=metric&appid=${APIKey}`

//   const SearchFunction=(e)=>{
//     if (e.key==="Enter") {
//       axios.get(url)
//         .then((response) =>{
//           setdata(response.data)
//           console.log(response.data)
//         })


      
//     }
//   }

//   const handleClick=()=>{   //mousec click handle
//     axios.get(url)
//         .then((response) =>{
         
//           setdata(response.data)
         
//           console.log(response.data)
//         })

//   }

//   return (
//     <>
//       <div className='w-full h-full '>
//         <div className="text-center p-1     ">
//           <input type="text" className=' border border-black m-2 w-[400px] bg-blue py-4 px-2 text-lg border rounded-xl border-white border-radius text-red-700' 
//           placeholder='Enter the longitde' 
//           value={Longitutde}
//           onChange={(e)=>{setLongitutde(e.target.value)}}
//           />

//           <input type="text" 
//           className=' w-[400px] bg-black py-4 px-2 text-lg border rounded-xl border-white text-red-700' 
//           placeholder='Enter the Latitude' 
//           value={Latitutde}
//           onChange={(e)=>{setLatitutde(e.target.value)}}
//           onKeyDownCapture={SearchFunction}
//           />

//           {/* <button className="btn" onKeyDownCapture={SearchFunction} onClickCapture={sear}>Check</button> */}
//         </div>
//           <button className="btn m-1 border border-black  rounded-xl w-40 pointer h-10 bg-slate-500 text-emerald-50" onClick={handleClick}>Check</button>
//         <Weather WeatherData={data}/>
//       </div>
//     </>
//   )
// }

// export default App




//  https://api.openweathermap.org/data/2.5/weather?lat=74.3413&lon=31.5105&appid=b24ed4bfa7f7b14aefc35ad20e09bf32

function App() {
  
  const [Latitude, setLatitude] = useState("")
  const [Longitude, setLongitude] = useState("")
  const [data, setdata] = useState({})
  
  const apiKey="b24ed4bfa7f7b14aefc35ad20e09bf32"

  const url=` https://api.openweathermap.org/data/2.5/weather?lat=${Latitude}&lon=${Longitude}&units=metric&appid=${apiKey}`


  
  const SearchFunctions=(e)=>{
    if(e.key==="Enter"){
      axios.get(url).then((response) =>{
        setdata(response.data)
        console.log(response.data)
      })
    }
  }

  const SearchbyBtn=(e)=>{
    axios.get(url).then((response)=>{
      setdata(response.data)
      console.log(response.data)
    })
  }

  return (
   <>
      <div className="mainClass w-full h-full ">
          <div className="input flex flex-col justify-center">
            <input type="text" 
            placeholder='Enter Latitude' 
            className='border border-black  w-[300px] rounded-xl  p-2'
            value={Latitude}
            onChange={(e)=>{setLatitude(e.target.value)}}
            />

            <input type="text" 
            placeholder='Enter Longitude'
            className='border border-red-400 w-[300px]  bg-black text-white rounded-xl m-2 p-2'
            value={Longitude}
            onChange={(e)=>{setLongitude(e.target.value)}}
            onKeyDownCapture={SearchFunctions}
            />
            
            <br />
            <button className=' w-28 h-16 bg-black justify-center border-4 rounded-full  text-white font-bold hover:bg-slate-500' onClick={SearchbyBtn}>Search </button>
          </div>

          

          <Weather WeatherData={data}/>

      </div>
   </>
  );
}

export default App;
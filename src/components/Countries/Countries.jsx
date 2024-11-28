import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
const Countries = () => {
    const [countries ,setCountries]=useState([]);

    const [visitedCounries,setvisitedCiuntries] = useState([]);
    
   

   useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json())
    .then(data =>setCountries(data));
   },[]);

   const handleVisitedCountry = country=>{
    console.log('Add this to your visited country');
    const newvisitedCountries = [...visitedCounries,country];
    setvisitedCiuntries(newvisitedCountries);
 }

    return (
        <div >
            <h3> Countries:{countries.length}</h3>

            <div>
                <h5>VISITED COUNTRIES:{visitedCounries.length} </h5>
             <ol>
             {
                visitedCounries.map(country=> <li key={country.cca3}> Country name :  {country.name.common}</li>)
              }
             </ol>
            </div>
           <div  className="country-container">
           {
               countries.map(country =><Country key={country.cca3} 
                handleVisitedCountry={handleVisitedCountry}
                country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;
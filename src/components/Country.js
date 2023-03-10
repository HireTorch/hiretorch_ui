// import "./styles.css";
// import { getCode, getName } from "country-list";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  
  
  useEffect(() => {
    console.log(selectedCountry);
    console.log(selectedCountry?.isoCode);
    console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
  }, [selectedCountry]);
 
  const handleApi = () => {
    console.log(selectedCountry, selectedState,selectedCity);
    axios.post('http://localhost:3000/api/adminlogin',{
      country : selectedCountry,
      state : selectedState, 
      city : selectedCity
    }).then(result => {
      console.log(result.data)
    }).catch(err =>
      {
        console.log(err)
        alert('Server Error')
      })
  }


  return (
    <div className="App">
      <Select
        options={Country.getAllCountries()}
        getOptionLabel={(options) => {
          return options["name"];
        }}
        getOptionValue={(options) => {
          return options["name"];
        }}
        value={selectedCountry}
        onChange={(item) => {
          setSelectedCountry(item);
        }}
      />
      <Select
        options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
        getOptionLabel={(options) => {
          return options["name"];
        }}
        getOptionValue={(options) => {
          return options["name"];
        }}
        value={selectedState}
        onChange={(item) => {
          setSelectedState(item);
        }}
      />

      <Select
        options={City.getCitiesOfState(
          selectedState?.countryCode,
          selectedState?.isoCode
        )}
        getOptionLabel={(options) => {
          return options["name"];
        }}
        getOptionValue={(options) => {
          return options["name"];
        }}
        value={selectedCity}
        onChange={(item) => {
          setSelectedCity(item);
        }}
      />
      <a
            name="login-button "
            id="login"
            class="btn btn-success"
            href="/country"
            role="button"
            onClick={handleApi}
          >
            submit
          </a>
    </div>
  );
}



//const url=""
// const history = useHistory;
// useEffect(() => {
//   if (localStorage.getItem("user-info")) {
//     history.push("/add");
//   }
// }, []);

  // const handleLogin = (e) => {
  //   e.preventDeFault();
  //   console.log(adminemail, adminpassword);
  // };


// async function AdminLogin() {   // console.warn(adminemail, adminpassword);
// let item = { adminemail, adminpassword };
//   let result = await fetch("http://localhost:3000/api/adminlogin", {
//     method: "post",
//     headers: {
//       "Content-type": "application/json",
//       Accept: "application/json",
//     },

//     body: JSON.stringify(item),
//   });
//   result = await result.json();
//   localStorage.setItem("user-info", JSON.stringify(result));
//   history.push("add");
// }




// import "./styles.css";
// // import { getCode, getName } from "country-list";
// import { Country, State, City } from "country-state-city";
// import Select from "react-select";
// import { useEffect, useState } from "react";

// export default function App() {
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedState, setSelectedState] = useState(null);
//   const [selectedCity, setSelectedCity] = useState(null);
//   useEffect(() => {
//     console.log(selectedCountry);
//     console.log(selectedCountry?.isoCode);
//     console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
//   }, [selectedCountry]);
//   return (
//     <div className="App">
//       <Select
//         options={Country.getAllCountries()}
//         getOptionLabel={(options) => {
//           return options["name"];
//         }}
//         getOptionValue={(options) => {
//           return options["name"];
//         }}
//         value={selectedCountry}
//         onChange={(item) => {
//           setSelectedCountry(item);
//         }}
//       />
//       <Select
//         options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
//         getOptionLabel={(options) => {
//           return options["name"];
//         }}
//         getOptionValue={(options) => {
//           return options["name"];
//         }}
//         value={selectedState}
//         onChange={(item) => {
//           setSelectedState(item);
//         }}
//       />
//       <Select
//         options={City.getCitiesOfState(
//           selectedState?.countryCode,
//           selectedState?.isoCode
//         )}
//         getOptionLabel={(options) => {
//           return options["name"];
//         }}
//         getOptionValue={(options) => {
//           return options["name"];
//         }}
//         value={selectedCity}
//         onChange={(item) => {
//           setSelectedCity(item);
//         }}
//       />
//     </div>
//   );
// }

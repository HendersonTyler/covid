import { useContext } from "react";
import CountryContext from "../../context/countries/countryContext";

const Country = () => {
  const countryContext = useContext(CountryContext);
  const { country } = countryContext;
  return (
    <div>
      <p>{country}</p>
    </div>
  );
};

export default Country;

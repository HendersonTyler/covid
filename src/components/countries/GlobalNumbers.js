import { useEffect, useContext } from "react";

import Spinner from "../layout/Spinner";
import CountryContext from "../../context/countries/countryContext";

const GlobalNumbers = () => {
  const countryContext = useContext(CountryContext);
  const { loading, globalData, getGlobalData } = countryContext;

  useEffect(() => {
    getGlobalData();
    // eslint-disable-next-line
  }, []);

  if (loading || !globalData.Global) {
    return <Spinner />;
  } else {
    return (
      <>
        <h1 className="display-1 text-center">
          {globalData.Global.NewConfirmed.toLocaleString()} cases of Covid have
          been recorded today.
        </h1>
        <h2 class="text-center">
          So far {globalData.Global.TotalRecovered.toLocaleString()} have
          <strong> recovered</strong>, and{" "}
          {globalData.Global.TotalDeaths.toLocaleString()} have
          <strong> died.</strong>
        </h2>
      </>
    );
  }
};

export default GlobalNumbers;

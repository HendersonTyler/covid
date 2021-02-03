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
        <h1>
          {globalData.Global.NewConfirmed.toLocaleString()} cases of Covid have
          been recorded today.
        </h1>
        <h2>
          So far {globalData.Global.TotalRecovered.toLocaleString()} have
          recovered, and {globalData.Global.TotalDeaths.toLocaleString()} have
          died.
        </h2>
      </>
    );
  }
};

export default GlobalNumbers;

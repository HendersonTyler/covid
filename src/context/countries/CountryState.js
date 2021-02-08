import { useReducer } from "react";
import axios from "axios";
import CountryContext from "./countryContext";
import CountryReducer from "./countryReducer";
import { SET_COUNTRY, GET_GLOBAL_DATA, SET_LOADING } from "../types";

const CountryState = (props) => {
  const initialState = {
    country: "",
    loading: false,
    globalData: {},
  };

  const [state, dispatch] = useReducer(CountryReducer, initialState);

  // Get Specific Country Details
  const setCountry = (text) => {
    dispatch({
      type: SET_COUNTRY,
      payload: text,
    });
  };

  // Get Global Stats
  const getGlobalData = async () => {
    setLoading();
    // const res = await axios.get("http://localhost:3000/db.json");
    const res = await axios.get("https://api.covid19api.com/summary");

    dispatch({
      type: GET_GLOBAL_DATA,
      payload: res.data,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <CountryContext.Provider
      value={{
        setCountry,
        getGlobalData,
        country: state.country,
        loading: state.loading,
        globalData: state.globalData,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryState;

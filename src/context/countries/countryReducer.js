import { SET_COUNTRY, GET_GLOBAL_DATA, SET_LOADING } from "../types";

const countryReducer = (state, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case GET_GLOBAL_DATA:
      return {
        ...state,
        globalData: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default countryReducer;

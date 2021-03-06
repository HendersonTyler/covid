import { useContext } from "react";
import { Link } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";

import Spinner from "../layout/Spinner";
import CountryContext from "../../context/countries/countryContext";

const Search = () => {
  const countryContext = useContext(CountryContext);

  const { globalData } = countryContext;

  if (!globalData.Countries) {
    return <Spinner />;
  } else {
    return (
      <div className="m-5" style={{ textAlign: "center" }}>
        <h4>Country details:</h4>

        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Select a Country:
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ height: "300px", overflowY: "scroll" }}>
            {globalData.Countries.map((x) => (
              <Link key={x.Country} to={`/country/${x.Country}`}>
                <Dropdown.Item href={x.Country}>{x.Country}</Dropdown.Item>
              </Link>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
};

export default Search;

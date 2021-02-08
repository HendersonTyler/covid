import { useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";

import CountryContext from "../../context/countries/countryContext";
import Spinner from "../layout/Spinner";

const Country = () => {
  const countryContext = useContext(CountryContext);
  const {
    country,
    loading,
    getGlobalData,
    globalData,
    setCountry,
  } = countryContext;

  let urlLocation = useLocation();

  useEffect(() => {
    setCountry(urlLocation.pathname.split("/").pop());
    getGlobalData();
    // eslint-disable-next-line
  }, [urlLocation]);

  if (loading || !country || !globalData.Countries) {
    return <Spinner />;
  } else {
    const countryList = globalData.Countries.map((x) => x.Country);
    const countryNumber = countryList.indexOf(country);
    if (countryNumber === -1) {
      return <h1>Sorry, we couldn't find that country, please try again.</h1>;
    } else {
      return (
        <div>
          <div className="d-flex justify-content-center p-5">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={`https://www.countryflags.io/${globalData.Countries[countryNumber].CountryCode}/flat/64.png`}
                style={{
                  width: "64px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Card.Body>
                <Card.Title>{country}</Card.Title>
                <Card.Text>
                  There has been a total of{" "}
                  {globalData.Countries[
                    countryNumber
                  ].TotalConfirmed.toLocaleString()}{" "}
                  recorded cases of Covid in {country}.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Cases Today:{" "}
                  {globalData.Countries[countryNumber].NewConfirmed}
                </ListGroupItem>
                <ListGroupItem>
                  Deaths Today: {globalData.Countries[countryNumber].NewDeaths}
                </ListGroupItem>
                <ListGroupItem>
                  Total Deaths:{" "}
                  {globalData.Countries[countryNumber].TotalDeaths}
                </ListGroupItem>
                <ListGroupItem>
                  Recovered:{" "}
                  {globalData.Countries[countryNumber].TotalRecovered}
                </ListGroupItem>
              </ListGroup>
            </Card>
          </div>
          <div className="text-center">
            <Link to="/">
              <button type="button" className="btn center btn-secondary">
                Back
              </button>
            </Link>
          </div>
        </div>
      );
    }
  }
};

export default Country;

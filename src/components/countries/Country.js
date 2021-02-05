import { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import CountryContext from "../../context/countries/countryContext";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import { useLocation } from "react-router-dom";

const Country = () => {
  const countryContext = useContext(CountryContext);
  const {
    country,
    loading,
    getGlobalData,
    globalData,
    setCountry,
  } = countryContext;

  // Get Country from url

  let urlLocation = useLocation();

  useEffect(() => {
    setCountry(urlLocation.pathname.split("/").pop());
    getGlobalData();
  }, [urlLocation]);

  if (!globalData.Countries) {
    console.log("waiting for global data");
    return <Spinner />;
  } else {
    if (loading || !country) {
      console.log("the other one");
      return <Spinner />;
    } else {
      const countryList = globalData.Countries.map((x) => x.Country);
      const countryNumber = countryList.indexOf(country);
      if (countryNumber === -1) {
        return <h1>Sorry, we couldn't find that country, please try again.</h1>;
      } else {
        return (
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.countryflags.io/be/flat/64.png"
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
                  {globalData.Countries[countryNumber].TotalConfirmed} recorded
                  cases of Covid in {country}.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  New Cases: {globalData.Countries[countryNumber].NewConfirmed}
                </ListGroupItem>
                <ListGroupItem>
                  New Deaths: {globalData.Countries[countryNumber].NewDeaths}
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
        );
      }
    }
  }
};

export default Country;

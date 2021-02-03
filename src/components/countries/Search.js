import { useState, useContext } from "react";
import CountryContext from "../../context/countries/countryContext";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

const Search = () => {
  const countryContext = useContext(CountryContext);
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    if (text === "") {
      e.preventDefault();
      console.log("Empty String");
    } else {
      countryContext.setCountry(text);
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div className="m-5" style={{ textAlign: "center" }}>
      <h4>Search a Country</h4>
      <Form className="form">
        <FormControl
          onChange={onChange}
          value={text}
          type="text"
          placeholder="Australia"
          className="mr-sm-2"
        />
        <Link onClick={onSubmit} to={`/country/${text}`}>
          <Button className="m-2" type="submit" variant="primary">
            Search
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Search;

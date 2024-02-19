import { useContext, useState } from "react";
import DataContext from "../../contexts/DataContext";
import CategoryContext from "../../contexts/CategoryContext";
import categories from "../../constants/categories";
import "./Output.css";
import PropTypes from "prop-types";

const Output = ({ setInputErrors }) => {
  const [result, setResult] = useState("");
  const { selectedCategory } = useContext(CategoryContext);
  const { firstData, secondData } = useContext(DataContext);

  const selectedCategoryData = categories.find(
    ({ category }) => category === selectedCategory
  );

  const endpointDataForCategory = selectedCategoryData?.endpoint;
  const firstDataForCategory = selectedCategoryData?.firstData;
  const secondDataForCategory = selectedCategoryData?.secondData;

  const validateInput = (options, data) => {
    if (selectedCategoryData?.[options]) {
      if (!data || data === "") {
        return "Incorrect selected value";
      }
    } else if (typeof data !== "number" && data <= 0) {
      return "Incorrect value";
    }
  };

  const validateForm = () => {
    let errors = {};
    if (validateInput("optionFirst", firstData))
      errors.firstInputError = validateInput("optionFirst", firstData);
    if (validateInput("optionSecond", secondData))
      errors.secondInputError = validateInput("optionSecond", secondData);

    setInputErrors(errors);

    return Object.keys(errors) <= 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      const url = `https://tracker-for-carbon-footprint-api.p.rapidapi.com/${endpointDataForCategory}`;

      const options = {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": "tracker-for-carbon-footprint-api.p.rapidapi.com",
        },
        body: new URLSearchParams({
          [firstDataForCategory]: `${firstData}`,
          [secondDataForCategory]: `${secondData}`,
        }),
      };

      try {
        const response = await fetch(url, options);
        const res = await response.text();
        setResult(res.message);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="result">
      <button onClick={handleSubmit}>Calculate</button>
      <span>Carbon Footprint: {result}</span>
    </div>
  );
};

Output.propTypes = {
  setInputErrors: PropTypes.func,
};

export default Output;

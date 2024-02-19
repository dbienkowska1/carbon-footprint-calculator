import { useContext } from "react";
import CategoryContext from "../Contexts/CategoryContext";
import categories from "../../constants/categories";
import DataContext from "../Contexts/DataContext";
import Input from "../Input/Input";
import "./InputData.css";
import PropTypes from "prop-types";
import SelectBox from "../SelectBox/SelectBox";

const InputData = ({ inputErrors }) => {
  const { selectedCategory } = useContext(CategoryContext);
  const { firstData, secondData, setFirstData, setSecondData } =
    useContext(DataContext);

  const selectedCategoryData = categories.find(
    ({ category }) => category === selectedCategory
  );

  const firstDataForCategory = selectedCategoryData?.firstData;
  const secondDataForCategory = selectedCategoryData?.secondData;

  const handleDataChange = (e, setData) => {
    setData(e.target.value);
  };

  return (
    <div className="inputs">
      {selectedCategoryData && selectedCategoryData.optionFirst ? (
        <SelectBox
          options={selectedCategoryData.optionFirst}
          label={firstDataForCategory}
          value={firstData}
          onChange={(e) => handleDataChange(e, setFirstData)}
          error={inputErrors?.firstInputError}
        />
      ) : (
        <Input
          label={firstDataForCategory}
          value={firstData}
          onChange={(e) => handleDataChange(e, setFirstData)}
          unit={selectedCategoryData.unitFirst}
          error={inputErrors?.firstInputError}
        />
      )}
      {selectedCategoryData && selectedCategoryData.optionSecond ? (
        <SelectBox
          options={selectedCategoryData.optionSecond}
          label={secondDataForCategory}
          value={secondData}
          onChange={(e) => handleDataChange(e, setSecondData)}
          error={inputErrors?.secondInputError}
        />
      ) : (
        <Input
          label={secondDataForCategory}
          value={secondData}
          onChange={(e) => handleDataChange(e, setSecondData)}
          unit={selectedCategoryData.unitSecond}
          error={inputErrors?.secondInputError}
        />
      )}
    </div>
  );
};

Input.propTypes = {
  inputErrors: PropTypes.object,
};

export default InputData;

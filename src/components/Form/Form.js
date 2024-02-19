import { useContext } from "react";
import InputData from "../InputData/InputData";
import Output from "../Output/Output";
import DataContext from "../Contexts/DataContext";

const Form = () => {
  const { inputErrors, setInputErrors } = useContext(DataContext);

  return (
    <>
      <InputData inputErrors={inputErrors} />
      <Output setInputErrors={setInputErrors} />
    </>
  );
};

export default Form;

import "./SelectBox.css";
import PropTypes from "prop-types";

const SelectBox = ({ options, label, onChange, value, error }) => {
  const mappedOptions = options.map((option, idx) => {
    return (
      <option key={idx} value={option}>
        {option}
      </option>
    );
  });

  return (
    <div className="single-input">
      <label>{label}</label>

      <select onChange={onChange} value={value}>
        <option value="">Select location</option>
        {mappedOptions}
      </select>

      {error && <span>{error}</span>}
    </div>
  );
};

SelectBox.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.string,
};

export default SelectBox;

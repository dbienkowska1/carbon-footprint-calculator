import "./Input.css";
import PropTypes from "prop-types";

const Input = ({ label, value, onChange, unit, error }) => {
  return (
    <div className="single-input">
      <label>{label}</label>
      <div className="box">
        <input type="number" value={value} onChange={onChange} />
        <div className="unit">{unit}</div>
      </div>
      {error && <span>{error}</span>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  unit: PropTypes.string,
  error: PropTypes.string,
};

export default Input;

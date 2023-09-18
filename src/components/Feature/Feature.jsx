import PropTypes from "prop-types";
const Feature = ({ feature }) => {
  return (
    <div className="pl-5">
      <p>{feature}</p>
    </div>
  );
};
Feature.propTypes = {
  feature: PropTypes.string,
};
export default Feature;

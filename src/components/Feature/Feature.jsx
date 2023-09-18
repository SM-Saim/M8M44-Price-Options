import PropTypes from "prop-types";
import { AiFillThunderbolt } from "react-icons/ai";
const Feature = ({ feature }) => {
  return (
    <div className="pl-5">
      <p className="flex items-center">
        <AiFillThunderbolt className="text-cyan-700 mr-2"></AiFillThunderbolt>
        {feature}
      </p>
    </div>
  );
};
Feature.propTypes = {
  feature: PropTypes.string,
};
export default Feature;

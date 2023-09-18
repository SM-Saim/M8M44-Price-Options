import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({ option }) => {
  const { price, name, features } = option;
  return (
    <div className="border-2 bg-cyan-600 text-white p-5 rounded-xl flex flex-col">
      <h2 className="text-center">
        <span className="text-6xl font-semibold ">{price}</span>
        <span className="text-4xl ">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-4 font-semibold flex-grow">
        {name}
      </h4>
      {features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}
      <button className="w-full bg-cyan-800 hover:bg-cyan-950 mt-5 py-2 rounded-lg font-semibold text-lg ">
        Buy Now
      </button>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;

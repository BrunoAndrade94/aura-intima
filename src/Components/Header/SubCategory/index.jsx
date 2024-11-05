import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SubCategory = ({ to, subCategory }) => {
  return (
    <div className="sub-category">
      <Link to={to}>{subCategory}</Link>
    </div>
  );
};

SubCategory.propTypes = {
  to: PropTypes.string,
  subCategory: PropTypes.string,
};

export default SubCategory;

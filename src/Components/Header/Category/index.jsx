import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Category = ({ to, category }) => {
  return (
    <>
      <li className="list-inline-item">
        <Link to={to}>{category}</Link>
      </li>
    </>
  );
};

Category.propTypes = {
  to: PropTypes.string,
  category: PropTypes.string,
};

export default Category;

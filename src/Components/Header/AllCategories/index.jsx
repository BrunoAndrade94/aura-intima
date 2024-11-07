import { Button } from "@mui/material";
import { CiCircleList } from "react-icons/ci";
import { TfiAngleDoubleDown } from "react-icons/tfi";
// import { TODAS_CATEGORIAS } from "../../../assets/var-const";
import Categories from "../Categories";
import { CATEGORIAS_MENU } from "../../../assets/var-const";

const AllCategories = () => {
  return (
    <div className="col-sm-3">
      <Categories
        iconName={CATEGORIAS_MENU[1]}
        nameMenu={CATEGORIAS_MENU[0]}
        itemsMenu={CATEGORIAS_MENU}
      />
    </div>
  );
};

export default AllCategories;

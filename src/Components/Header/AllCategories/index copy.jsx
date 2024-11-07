import { Button } from "@mui/material";
import { CiCircleList } from "react-icons/ci";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import { TODAS_CATEGORIAS } from "../../../assets/var-const";

const AllCategories = () => {
  return (
    <div className="col-sm-3">
      <Button className="allCatTab">
        <span className="icon1 mr-2">
          <CiCircleList />
        </span>
        <span className="text">{TODAS_CATEGORIAS}</span>
        <span className="icon2 ml-3">
          <TfiAngleDoubleDown />
        </span>
      </Button>
    </div>
  );
};

export default AllCategories;

import { Home } from "@mui/icons-material";
import AllCategories from "../Header/AllCategories";
import ListCategories from "../Header/ListCategories";

const Navigation = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="row">
            <Home />
            <div className="container mt-4">
              <div className="row">
                <AllCategories />
                <ListCategories />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

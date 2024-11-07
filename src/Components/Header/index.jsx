import CardUser from "./CardUser";
import SearchBox from "./SearchBox";
import TextHeader from "./TextHeader";
import LogoHeader from "./LogoHeader";
import Navigation from "../Navigation";
import SearchCEP from "./SearchCEP";
import { PESQUISAR_PRODUTO } from "../../assets/var-const";
import AllCategories from "./AllCategories";
import ListCategories from "./ListCategories";

const Header = () => {
  return (
    <div className="headerWrapper">
      <TextHeader />
      <header className="header">
        <div className="container">
          <div className="row">
            <LogoHeader />
            <div className="col-sm-10 d-flex align-items-center part2">
              <SearchCEP />
              <SearchBox className="mr-3" placeHolder={PESQUISAR_PRODUTO} />
              <CardUser />
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row">
            <AllCategories />
            <ListCategories />
          </div>
        </div>
      </header>
      <Navigation />
    </div>
  );
};

export default Header;

import { PESQUISAR_PRODUTO } from "../../assets/var-const";
import Navigation from "../Navigation";
import AllCategories from "./AllCategories";
import CardUser from "./CardUser";
import ListCategories from "./ListCategories";
import LogoHeader from "./LogoHeader";
import SearchBox from "./SearchBox";
import SearchCEP from "./SearchCEP";
import TextHeader from "./TextHeader";

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
      </header>
      <Navigation />
    </div>
  );
};

export default Header;

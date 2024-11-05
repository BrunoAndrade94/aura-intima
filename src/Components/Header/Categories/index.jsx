import { Dropdown } from "@mui/base/Dropdown";
import Category from "../Category";
import SubCategory from "../SubCategory";
import { TIPOS_CATEGORIAS } from "../../../assets/var-const";
import { MenuButton } from "@mui/base";

const Categories = () => {
  return (
    <>
      <div className="navPartCategories col-sm-9 align-items-center">
        <ul className="list list-inline ml-auto">
          <Category to="/" category={TIPOS_CATEGORIAS.home} />
          {/* <SubCategory to="/" subCategory="Grande" /> */}
          <Category to="/" category={TIPOS_CATEGORIAS.promocao} />
          <Category to="/" category={TIPOS_CATEGORIAS.sutias} />
          <Category to="/" category={TIPOS_CATEGORIAS.calcinhas} />
          <Category to="/" category={TIPOS_CATEGORIAS.maisVendidos} />
        </ul>
        <Dropdown>
          <MenuButton>My account</MenuButton>
          <Menu slots={{ listbox: AnimatedListbox }}>
            <MenuItem onClick={createHandleMenuClick("Profile")}>
              Profile
            </MenuItem>
            <MenuItem onClick={createHandleMenuClick("Language settings")}>
              Language settings
            </MenuItem>
            <MenuItem onClick={createHandleMenuClick("Log out")}>
              Log out
            </MenuItem>
          </Menu>
        </Dropdown>
      </div>
    </>
  );
};

export default Categories;

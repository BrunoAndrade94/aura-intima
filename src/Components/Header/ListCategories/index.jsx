import Categories from "../Categories";
import {
  CATEGORIAS_CONJUTOS,
  CATEGORIAS_CONTATO,
  CATEGORIAS_MAIS_VENDIDOS,
  CATEGORIAS_MODA_PRAIA,
  CATEGORIAS_SUTIA,
} from "../../../assets/var-const";

const ListCategories = () => {
  return (
    <div className="list-categories">
      <div className="category">
        {/* <Categories nameMenu="HOME" /> */}
        <Categories
          iconName={CATEGORIAS_MAIS_VENDIDOS[1]}
          nameMenu={CATEGORIAS_MAIS_VENDIDOS[0]}
          itemsMenu={CATEGORIAS_MAIS_VENDIDOS}
        />
      </div>
      <div className="category">
        <Categories
          iconName={CATEGORIAS_CONJUTOS[1]}
          nameMenu={CATEGORIAS_CONJUTOS[0]}
          itemsMenu={CATEGORIAS_CONJUTOS}
        />
      </div>
      <div className="category">
        <Categories
          iconName={CATEGORIAS_SUTIA[1]}
          nameMenu={CATEGORIAS_SUTIA[0]}
          itemsMenu={CATEGORIAS_SUTIA}
        />
      </div>
      <div className="category">
        <Categories
          iconName={CATEGORIAS_MODA_PRAIA[1]}
          nameMenu={CATEGORIAS_MODA_PRAIA[0]}
          itemsMenu={CATEGORIAS_MODA_PRAIA}
        />
      </div>
      <div className="category">
        <Categories
          iconName={CATEGORIAS_CONTATO[1]}
          nameMenu={CATEGORIAS_CONTATO[0]}
          itemsMenu={CATEGORIAS_CONTATO}
        />
      </div>
    </div>
  );
};

export default ListCategories;

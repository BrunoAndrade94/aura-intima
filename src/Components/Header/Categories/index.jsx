import { Link } from "react-router-dom"
import { TIPOS_CATEGORIAS } from "../../../assets/var-const"

const Categories = () => {
	return (
		<>
			<div className="navPartCategories col-sm-9 align-items-center">
				<ul className="list list-inline ml-auto">
					<li className="list-inline-item"><Link to={"/"}>{TIPOS_CATEGORIAS.home}</Link></li>
					<li className="list-inline-item"><Link to={"/"}>{TIPOS_CATEGORIAS.promocao}</Link></li>
					<li className="list-inline-item"><Link to={"/"}>{TIPOS_CATEGORIAS.sutias}</Link></li>
					<li className="list-inline-item"><Link to={"/"}>{TIPOS_CATEGORIAS.calcinhas}</Link></li>
					<li className="list-inline-item"><Link to={"/"}>{TIPOS_CATEGORIAS.maisVendidos}</Link></li>
					<li className="list-inline-item"><Link to={"/"}>{TIPOS_CATEGORIAS.modaPraia}</Link></li>
					<li className="list-inline-item"><Link to={"/"}>{TIPOS_CATEGORIAS.modaSex}</Link></li>
					<li className="list-inline-item"><Link to={"/"}>{TIPOS_CATEGORIAS.contato}</Link></li>
				</ul>
			</div>
		</>
	)
}

export default Categories
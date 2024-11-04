import Category from "../Category"
import { TIPOS_CATEGORIAS } from "../../../assets/var-const"
import { Button } from "@mui/material"

const Categories = () => {
	return (
		<>
			<div className="navPartCategories col-sm-9 align-items-center">
				<ul className="list list-inline ml-auto">
					<Category to="/" categoria={TIPOS_CATEGORIAS.home} />
					<Category to="/" categoria={TIPOS_CATEGORIAS.promocao} />
					<Category to="/" categoria={TIPOS_CATEGORIAS.sutias} />
					<Category to="/" categoria={TIPOS_CATEGORIAS.calcinhas} />
					<Category to="/" categoria={TIPOS_CATEGORIAS.maisVendidos} />
					<Category to="/" categoria={TIPOS_CATEGORIAS.modaPraia} />
					<Category to="/" categoria={TIPOS_CATEGORIAS.modaSex} />
					<Category to="/" categoria={TIPOS_CATEGORIAS.contato} />
				</ul>
			</div>
		</>
	)
}

export default Categories
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { Button, Dialog, Slide } from "@mui/material";
import { INFORME_O_CEP, LOCALIZACAO } from "../../../assets/var-const"

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />
})


const SearchCEP = () => {

	const [isOpenModal, setIsOpenModal] = useState(false)

	return (
		// <div className="searchCEP ml-3 mr-3">
		<div className="ml-3 mr-3">
			<Button className="searchCEP">
				<div className="info d-flex flex-column">
					<span className="label">{INFORME_O_CEP}</span>
					<span className="local">{LOCALIZACAO}</span>
				</div>
				<span className="ml-auto"><CiLocationOn /></span>
			</Button>

			<Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)} className="locationModal" TransitionComponent={Transition}>
				<h4 className="mb-0">Informe seu CEP</h4>
				<p>Entregamos para todo o país</p>
				<Button className="close_" onClick={() => setIsOpenModal(false)}><MdClose /></Button>

				<div className="headerSearch" w-100>
					<input type="text" placeholder="informe o cep..." />
					<Button><IoIosSearch /></Button>
				</div>

				<ul className="lista mt-3">
					{

					}
					<li><Button onClick={() => setIsOpenModal(false)}>São Paulo</Button></li>
				</ul>

			</Dialog>

		</div>
	)
}

export default SearchCEP
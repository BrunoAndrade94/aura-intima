import { useState } from "react";
import { MdClose } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { INFORME_O_CEP, VALOR_E_PRAZO } from "../../../assets/var-const";
import { Dialog, DialogTitle, Slide, Button } from "@mui/material";
import SearchBox from "../SearchBox";

// const Transition = React.forwardRef(function Transition(pros, ref) {
// 	return <Slide direction="up" ref={ref} {...props} />
// })

const DialogCEP = () => {
	const [isOpenModal, setIsOpenModal] = useState(false)
	return (
		<>
			<Dialog className="locationModal" open={true}>
				<h4>{INFORME_O_CEP}</h4>
				<p>{VALOR_E_PRAZO}</p>
				<SearchBox place={INFORME_O_CEP} />

			</Dialog>


			{/* <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)} className="locationModal" TransitionComponent={Transition}>
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

			</Dialog> */}

		</>
	)
}

export default DialogCEP
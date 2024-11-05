import React, { useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { CEP, CONSULTAR_FRETE, INFORME_O_CEP, VALOR_E_PRAZO } from "../../../assets/var-const";
import { Dialog, DialogTitle, Slide, Button, ButtonBase } from "@mui/material";
import MyButton from "../../MyButton";
import GetCEP from '../../../services/apis/apiCEP'
import { InputProvider, InputContext } from "../../../context/InputContext";
import SearchBox from "../SearchBox";
import { useSelector } from "react-redux";

// const Transition = React.forwardRef(function Transition(pros, ref) {
// 	return <Slide direction="up" ref={ref} {...props} />
// })

const DialogCEP = () => {
	// const [isOpenModal, setIsOpenModal] = useState(false)
	const [input, setInput] = useState("")
	const [cep, setCEP] = useState({})

	const { inputContext } = useContext(InputContext)

	// const inputValue = useSelector((state) => state.input.inputValue);

	console.log(inputContext)

	async function handleSearch() {
		if (setInput === '' || setCEP.cep === '') {
			alert("preencha algum cep")
			alert(cep.cep)
			return
		}

		try {
			const response = await GetCEP.get(`${input}/json/`)
			setCEP(response.data)
			setInput('')
		} catch (error) {
			alert("erro no servidor, tente novamente.")
			setInput('')
			return
		}
	}

	return (
		<Dialog className="locationModal" open={true}>
			<h4>{CONSULTAR_FRETE}</h4>
			<span className="valor-e-prazo">{VALOR_E_PRAZO}</span>

			{inputContext}
			<SearchBox className="w-100" placeHolder={CEP} />

			<Button onClick={handleSearch}>CONF</Button>
			{/* <MyButton placeHolder="CONFIRMAR" /> */}

		</Dialog>
	)
}

export default DialogCEP
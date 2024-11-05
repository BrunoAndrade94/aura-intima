import React, { useContext, useState } from 'react'
import { Button } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5"
import { InputContext } from "../../../context/InputContext";
// import { useDispatch } from 'react-redux';
// import { setInputValue } from '../../../redux/input-value/reducer';

const SearchBox = (props) => {
	const [inputLocal, setInputLocal] = useState('')
	// const dispatch = useDispatch();
	const { setInputContext } = useContext(InputContext)

	const enviarInputLocal = () => {
		setInputContext(inputLocal)
	}

	return (
		<div className={"headerSearch " + `${props.className}`}>
			<input
				type="text"
				value={inputLocal}
				placeholder={props.placeHolder}
				onChange={(evento) => setInputLocal(evento.target.value)}
			/>
			<Button
				onClick={enviarInputLocal}
			><IoSearchOutline /></Button>
		</div>
	)
}

export default SearchBox
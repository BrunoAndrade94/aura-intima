import DialogCEP from "../DialogCEP"
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { Button } from "@mui/material";
import { LOCALIZACAO, SUA_LOCALIZACAO } from "../../../assets/var-const"

const SearchCEP = () => {
	return (
		<>
			<div className="ml-3 mr-3">
				<Button className="searchCEP">
					<div className="info d-flex flex-column">
						<span className="label">{SUA_LOCALIZACAO}</span>
						<span className="local">{LOCALIZACAO}</span>
					</div>
					<span className="ml-auto"><CiLocationOn /></span>
				</Button>

				<DialogCEP />
			</div>
		</>
	)
}

export default SearchCEP
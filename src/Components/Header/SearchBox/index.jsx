import { Button } from "@mui/material";
import { PESQUISA_PLACEHOLDER } from "../../../assets/text-const"
import { IoSearchOutline } from "react-icons/io5"

const SearchBox = () => {
	return (
		<>
			<div className="headerSearch ml-3 mr-3">
				<input type="text" placeholder={PESQUISA_PLACEHOLDER} />
				<Button><IoSearchOutline /></Button>
			</div>
		</>
	)
}

export default SearchBox
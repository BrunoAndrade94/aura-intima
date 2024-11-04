import { Button } from "@mui/material";
import { PESQUISA_PLACEHOLDER } from "../../../assets/var-const"
import { IoSearchOutline } from "react-icons/io5"

const SearchBox = (props) => {
	return (
		<>
			<div className="headerSearch ml-3 mr-3">
				<input type="text" placeholder={props.place} />
				<Button><IoSearchOutline /></Button>
			</div>
		</>
	)
}

export default SearchBox
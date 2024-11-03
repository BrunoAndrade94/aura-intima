import { INFORME_O_CEP } from "../../../assets/text-const"
import { CiLocationOn } from "react-icons/ci";

const SearchCEP = () => {
	return (
		<div className="searchCEP ml-3 mr-3">
			<input type="text" placeholder={INFORME_O_CEP} />
			{/* <span className="icon"><CiLocationOn /></span> */}
		</div>
	)
}

export default SearchCEP
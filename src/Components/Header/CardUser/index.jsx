import { Button } from "@mui/material";
import { FaRegUser } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

const CardUser = () => {

	return (
		<>
			<div className="part3 d-flex align-items-center ml-auto">
				<Button className="circle mr-3"><FaRegUser /></Button>
				<div className="ml-auto cardTab d-flex align-items-center">
					<span className="price">R$ 420,00</span>
					<div className="position-relative ml-2"><Button className="circle"><GiShoppingCart /></Button>
						<span className="count d-flex align-items-center justify-content-center">1</span></div>
				</div>
			</div>
		</>
	)
}

export default CardUser;
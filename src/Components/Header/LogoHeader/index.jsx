import Logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom"

const LogoHeader = () => {
	return (
		<>
			<div className="logoWrapper d-flex align-items-center col-sm-2">
				<Link to={"/"}><img src={Logo} alt="Logo" /></Link>
			</div>
		</>
	)
}

export default LogoHeader
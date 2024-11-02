import { Button } from "@mui/material";
import { Link } from "react-router-dom"
import { FaRegUser } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import Logo from "../../assets/images/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import {
	PESQUISA_PLACEHOLDER,
	TEXTO_HEADER
} from "../../assets/text-const";

const Header = () => {
	return (
		<>
			<div className="headerWrapper">
				<div className="top-strip bg-aura">
					<div className="container">
						<p className="mb-0 mt-0 text-center"><b>{TEXTO_HEADER}</b></p>
					</div>
				</div>
				<header className="header">
					<div className="container">
						<div className="row">
							<div className="logoWrapper d-flex align-items-center col-sm-2">
								<Link to={"/"}><img src={Logo} alt="Logo" /></Link>
							</div>
							<div className="col-sm-10 d-flex align-items-center part2">
								{/* BARRA DE PESQUISA INCIO */}
								<div className="headerSearch ml-3 mr-3">
									<input type="text" placeholder={PESQUISA_PLACEHOLDER} />
									<Button><IoSearchOutline /></Button>
								</div>
								{/* BARRA DE PESQUISA FINAL */}
								<div className="part3 d-flex align-items-center ml-auto">
									<Button className="circle mr-3"><FaRegUser /></Button>
									<div className="ml-auto cardTab d-flex align-items-center">
										<span className="price">R$ 420,00</span>
										<div className="position-relative ml-2"><Button className="circle"><GiShoppingCart /></Button>
											<span className="count d-flex align-items-center justify-content-center">1</span></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
			</div>
		</>
	)
}

export default Header
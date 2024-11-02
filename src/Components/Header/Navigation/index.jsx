import { Button } from "@mui/material"
import { CiCircleList } from "react-icons/ci";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import { TODAS_CATEGORIAS } from "../../../assets/text-const";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<>
			<nav>
				<div className="container">
					<div className="row">
						<div className="col-sm-3 navPart1">
							<Button className="allCatTab align-items-center">
								<span className="icon1 mr-2"><CiCircleList /></span>
								<span class="text">{TODAS_CATEGORIAS}</span>
								<span className="icon2 ml-3"><TfiAngleDoubleDown /></span>
							</Button>
						</div>
						<div className="col-sm-9 navPart2">
							<ul className="list list-inline">
								<li className="list-inline-item">
									<Link />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navigation
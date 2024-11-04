import CardUser from "./CardUser";
import SearchBox from "./SearchBox";
import TextHeader from "./TextHeader";
import LogoHeader from "./LogoHeader";
import Navigation from "./Navigation";
import SearchCEP from "./SearchCEP";


const Header = () => {
	return (
		<>
			<div className="headerWrapper">
				<TextHeader />
				<header className="header">
					<div className="container">
						<div className="row">
							<LogoHeader />
							<div className="col-sm-10 d-flex align-items-center part2">
								<SearchCEP />
								<SearchBox />
								<CardUser />
							</div>
						</div>
					</div>
				</header>

				<Navigation />

			</div>
		</>
	)
}

export default Header
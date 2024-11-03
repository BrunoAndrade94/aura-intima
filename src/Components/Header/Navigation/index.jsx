
import AllCategories from "../AllCategories";
import Categories from "../Categories";
import SearchCEP from "../SearchCEP";

const Navigation = () => {
	return (
		<>
			<nav>
				<div className="container">
					<div className="row">
						{/* <SearchCEP /> */}
						<AllCategories />
						<Categories />
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navigation
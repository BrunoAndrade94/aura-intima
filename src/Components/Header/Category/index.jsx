import { Link } from "react-router-dom"

const Category = (props) => {
	return (
		<>
			<li className="list-inline-item">
				<Link to={props.to}>
					{props.categoria}
				</Link>
			</li>
		</>
	)
}

export default Category
import { Button } from "@mui/material"

const MyButton = (props) => {
	return (
		<>
			<div className="bbb">
				<Button className="my-button">
					<span>{props.placeHolder}</span>
				</Button>
			</div>
		</>
	)
}

export default MyButton
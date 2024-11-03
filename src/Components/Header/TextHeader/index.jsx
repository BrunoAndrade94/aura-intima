import { TEXTO_HEADER } from "../../../assets/var-const";

const TextHeader = () => {
	return (
		<>
			<div className="top-strip bg-aura">
				<div className="container">
					<p className="mb-0 mt-0 text-center"><b>{TEXTO_HEADER}</b></p>
				</div>
			</div>
		</>
	)
}

export default TextHeader;
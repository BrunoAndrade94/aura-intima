import Logo from "../../../public/logo.png"


const Header = () => {
    return (
        <>
            <h1 className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper col-sm-2">
                            <Link to={"/"}><img src={Logo} alt='Logo' /></Link>
                        </div>
                    </div>
                </div>
            </h1>
        </>
    )
}

export default Header 
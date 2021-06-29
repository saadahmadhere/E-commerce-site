const Navbar = (props) =>{
    return (
        <div className="nav-items">
            <img className="cart-icon" src="https://image.flaticon.com/icons/png/512/4296/4296929.png" alt="cart-icon" />
            <span className="cart-items" >{props.count}</span>
        </div>
    )
}

export default Navbar;
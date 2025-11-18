import { Link, Outlet } from "react-router-dom";

function NavBar() {
    return (
        <div>
        <nav>
            <Link to="/">icons-commit</Link>
            <Link to="/fundraiser">Fundraiser</Link>
        </nav>
        <Outlet />
        </div>
    );
}

export default NavBar;
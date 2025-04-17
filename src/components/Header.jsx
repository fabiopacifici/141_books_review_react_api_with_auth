import { NavLink } from "react-router-dom"

export default function Header() {


  return (
    <header>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav w-100" >
          <NavLink className="nav-link" to="/">Home</NavLink>

          <div className="ms-auto d-flex gap-2">
            <NavLink className="nav-link" to="/login">Login</NavLink>
            <NavLink className="nav-link" to="/register">Register</NavLink>
          </div>

        </div>
      </nav>

    </header>
  )
}
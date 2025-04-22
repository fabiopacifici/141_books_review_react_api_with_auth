import { NavLink } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function Header() {
  const { user, logout } = useAuth();


  return (
    <header>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav w-100" >
          <NavLink className="nav-link" to="/">Home</NavLink>

          <div className="ms-auto d-flex gap-2">

            {
              !user && (
                <>
                  <NavLink className="nav-link" to="/login">Login</NavLink>
                  <NavLink className="nav-link" to="/register">Register</NavLink>
                </>
              )
            }


            {
              user && (
                <>
                  <NavLink className="nav-link" to="/admin">Admin</NavLink>
                  <button className="nav-link" onClick={logout}>Logout</button> {/* Added Logout button */}
                </>
              )
            }


          </div>

        </div>
      </nav>

    </header>
  )
}
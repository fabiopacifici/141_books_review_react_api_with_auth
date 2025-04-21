import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function AuthLayout() {



  //console.log(isLoading, 'isLoading from DefaultLayout');


  return (
    <>
      <header>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav w-100" >
            <NavLink className="nav-link" to="/admin">Admin</NavLink>

            <div className="ms-auto d-flex gap-2">
              <NavLink className="nav-link" to="/">Welcome</NavLink>
              <a href="#">Logout</a>
            </div>

          </div>
        </nav>

      </header>


      <main className="mb-5" style={{ minHeight: 'calc(100vh - 56px)' }}>


        <Outlet />


      </main>



    </>

  )


}
export default function Footer() {


  return (

    <footer className="py-4 bg-light">
      <div className="container">

        <div className="row g-3">
          <div className="col-12 col-md-4">
            <div className="logo">
              LOGO
            </div>
            <p>
              <i className="bi bi-copyright"></i> All rights reserved.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <h3>Quick links</h3>
            <ul className="list-unstyled">
              <li><a href="#" className="nav-link">Lorem</a></li>
              <li><a href="#" className="nav-link">Lorem</a></li>
              <li><a href="#" className="nav-link">Lorem</a></li>
              <li><a href="#" className="nav-link">Lorem</a></li>

            </ul>

          </div>
          <div className="col-12 col-md-4">
            <h3>Legal</h3>
            <ul className="list-unstyled">
              <li><a href="#" className="nav-link">Privacy</a></li>
              <li><a href="#" className="nav-link">Cookies</a></li>

            </ul>
          </div>
        </div>

      </div>
    </footer>

  )

}
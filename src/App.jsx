import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout.jsx"
import HomePage from "./pages/HomePage.jsx"
import SingleBook from "./pages/SingleBook.jsx"
import Register from "./pages/auth/Register.jsx"
import Login from "./pages/auth/Login.jsx"
import NotFound from "./pages/NotFound.jsx"
import GlobalContext from "./contexts/GlobalContext.jsx"

function App() {

  const [isLoading, setIsLoading] = useState(true)

  return (

    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>

            <Route path="/" Component={HomePage} />
            <Route path="/books/:id" Component={SingleBook} />

            <Route path="/*" Component={NotFound} />


            {/* Auth routes */}
            <Route path="/register" Component={Register} />
            <Route path="/login" Component={Login} />

          </Route>



        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )

}

export default App

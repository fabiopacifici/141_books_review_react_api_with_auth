
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout.jsx"
import HomePage from "./pages/HomePage.jsx"
import SingleBook from "./pages/SingleBook.jsx"
import NotFound from "./pages/NotFound.jsx"
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>

          <Route path="/" Component={HomePage} />
          <Route path="/books/:id" Component={SingleBook} />

          <Route path="/*" Component={NotFound} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

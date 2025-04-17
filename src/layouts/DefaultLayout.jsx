import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import LoaderComponent from "../components/reviews/LoaderComponent";

export default function DefaultLayout() {

  const { isLoading } = useContext(GlobalContext)

  //console.log(isLoading, 'isLoading from DefaultLayout');


  return (
    <>
      <Header />


      <main className="mb-5" style={{ minHeight: 'calc(100vh - 56px)' }}>

        {
          isLoading && (
            <LoaderComponent />
          )
        }

        <Outlet />


      </main>


      <Footer />


    </>

  )


}
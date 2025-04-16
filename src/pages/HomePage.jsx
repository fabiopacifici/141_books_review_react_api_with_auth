import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';

export default function HomePage() {
  const [books, setBooks] = useState([]);


  useEffect(() => {

    fetch('http://localhost:3000/api/v1/books')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBooks(data);

      })


  }, []);



  return (
    <>

      <div className="p-5 mb-4 bg-light rounded-3" >
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Amazing books reviews</h1>
          <p className="col-md-8 fs-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          </p>

        </div>
      </div>



      <section className="books">
        <div className="container">


          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {

              books.map(book => (

                <BookCard key={book.id} book={book} />
              ))

            }
          </div>
        </div>

      </section>


    </>

  )
}
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Admin() {
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
    <div className="container mt-5">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h1>Admin</h1>
        <Link className="btn btn-primary" to="/admin/books/create">Add Book</Link>
      </header>



      <div
        className="table-responsive"
      >
        <table
          className="table table-primary"
        >
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Cover</th>
              <th scope="col">Title</th>
              <th scope="col">Abstract</th>
              <th scope="col">Author</th>
              <th scope="col">Actions</th>

            </tr>
          </thead>
          <tbody>

            {

              books.map(book => (
                <tr className="" key={book.id}>
                  <td scope="row">{book.id}</td>
                  <td>{book.cover_image}</td>
                  <td>{book.title}</td>
                  <td>{book.abstract}</td>
                  <td>{book.author}</td>
                  <td className="d-flex gap-2">
                    <button className="btn btn-success">View</button>
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>


                </tr>
              ))

            }

          </tbody>
        </table>
      </div>



    </div>
  )

}
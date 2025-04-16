import { Link } from 'react-router-dom'

export default function BookCard({ book }) {

  const { id, cover_image, title, author } = book

  return (
    <div className='col'>

      <div className="card h-100">

        <Link to={`/books/${id}`} className="text-decoration-none text-dark">
          <img src={`http://localhost:3000/images/${cover_image}`} alt="" className='card-img-top' />
        </Link>

        <div className="card-body">
          <h3>{title}</h3>
          <p>{author}</p>
        </div>
      </div>


    </div>
  )
}
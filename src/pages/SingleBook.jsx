import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookReviewCard from '../components/BookReviewCard';
import BookReviewForm from '../components/reviews/BookReviewForm';


export default function SingleBook() {

  // get the route param from the url
  const { id } = useParams()

  // prepare the state variable to hold the book data
  const [book, setBook] = useState({});

  // create an instance of the navigate function to redirect the user
  const navigate = useNavigate()

  useEffect(() => {

    fetch('http://localhost:3000/api/v1/books/' + id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data?.error) {
          navigate('/404')
        }
        setBook(data);

      }).catch(err => {
        console.log('ERROR', err);
      })


  }, [])



  return (

    <>

      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">

          <div className="row">
            <div className="col-8">

              <h1 className="display-5 fw-bold">{book?.title}</h1>

              <p className="col-md-8 fs-4">
                {book?.abstract}
              </p>


              {book?.price && (
                <div>
                  Price: ${book.price}
                </div>
              )}
            </div>

            <div className="col-4">
              {book.cover_image ? (<img src={`http://localhost:3000/images/${book?.cover_image}`} alt="" className='img-fluid' style={{ height: '250px' }} />) : (<img src="https://placehold.co/600x400" alt="" className='img-fluid' style={{ height: '250px' }} />)}


            </div>
          </div>


        </div>
      </div>

      <div className="container">

        <BookReviewForm bookId={book.id} />

        <hr />

        <h3 className='mb-3'>Reviews</h3>
        {
          book?.reviews && book.reviews.length > 0 ? (
            <div>
              {/* Render reviews here */}


              {book.reviews.map(review => (
                <BookReviewCard key={review.id} userReview={review} />
              ))}

            </div>
          ) : (
            <p> No reviews yet </p>
          )
        }

      </div>

    </>
  )

}
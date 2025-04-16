import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookReviewCard from '../components/BookReviewCard';


export default function SingleBook() {

  // get the route param from the url
  const { id } = useParams()

  // prepare the state variable to hold the book data
  const [book, setBook] = useState({});


  useEffect(() => {

    fetch('http://localhost:3000/api/v1/books/' + id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
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

        <div className="add-review">
          <h3 className='mb-3'>Add your review</h3>

          <form action="POST" className='mb-3'>


            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                id="username"
                aria-describedby="helpId"
                placeholder="anonymous"
              />

            </div>

            <div className="mb-3">
              <label htmlFor="vote" className="form-label">Vote</label>
              <input
                type="number"
                className="form-control"
                name="vote"
                id="vote"
                min={1}
                max={5}
                aria-describedby="helpId"
                placeholder=""
              />

            </div>


            <div className="mb-3">
              <label htmlFor="summary" className="form-label">Summary</label>
              <input
                type="text"
                className="form-control"
                name="summary"
                id="summary"
                aria-describedby="helpId"
                placeholder="Write a summary..."
              />

            </div>


            <div className="mb-3">
              <label htmlFor="review" className="form-label">Review</label>
              <textarea name='review' className="form-control" rows="3" placeholder="Write your review here..."></textarea>
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary mt-2">Submit Review</button>
            </div>
          </form>

        </div>



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
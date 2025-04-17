import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function BookReviewForm({ bookId }) {


  const api_url = 'http://localhost:3000/api/v1/books/' + bookId + '/review'
  console.log(bookId, 'bookId from BookReviewForm');
  console.log(api_url, 'api_url from BookReviewForm');
  const navigate = useNavigate()
  // add a state object for the form fields
  const initialFormData = {
    username: 'anonymous',
    vote: 1,
    summary: '',
    review: ''
  }
  const [formData, setFormData] = useState(initialFormData)
  const [formErrors, setFormErrors] = useState({})
  const [success, setSuccess] = useState(false)


  function isFormValid(data) {
    const errors = {}
    // check if the fields are empty

    if (!data.vote) errors.vote = 'Vote is required'


    // check if the fields are valid
    // username
    if (data.username.length < 3) errors.username = 'Username must be at least 3 characters long'
    if (data.username.length > 50) errors.username = 'Username must be less than 50 characters long'
    //summary
    if (data.summary.length < 10) errors.summary = 'Summary must not be less than 10 characters long'
    if (data.summary.length > 100) errors.summary = 'Summary must not be greather than 100 characters long'
    // review
    if (data.review.length < 10) errors.review = 'Review must be at least 10 characters long'
    if (data.review.length > 500) errors.review = 'Review must be not more than least 500 characters long'
    // vote
    if (data.vote < 1 || data.vote > 5) errors.vote = 'Vote must be between 1 and 5'

    setFormErrors(errors)

    console.log(errors, 'errors from isFormValid function');
    console.log(Object.keys(errors));


    // check if there are any errors
    return Object.keys(errors).length === 0

  }



  function handleFormSubmit(e) {
    e.preventDefault()

    console.log('Form submitted', formData);


    // validate the form data
    if (!isFormValid(formData)) {
      console.log('Form is not valid');
      return
    }

    console.log('Form is valid', formData);



    // perform an ajax call to the given endpoint
    fetch(api_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Form submitted successfully', data);
        if (data?.message) {
          setSuccess(data.message)


          setTimeout(() => {
            setSuccess(false)
            navigate(0)
          }, 2000)



        }

      }).catch(err => {
        console.log('Error submitting form', err);

      })


  }



  return (

    <div className="add-review">
      <h3 className='mb-3'>Add your review</h3>

      {/* [summary, review] */}
      {Object.keys(formErrors).length > 0 && (
        <div className="alert alert-danger" role="alert">
          <ul className='mb-0'>
            {Object.keys(formErrors).map((key) => (
              <li key={key}>{formErrors[key]}</li>
            ))}
          </ul>
        </div>
      )}

      {success && (
        <div className="alert alert-success" role="alert">
          {success}
        </div>
      )}



      <form action="POST" className='mb-3' onSubmit={handleFormSubmit}>


        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            aria-describedby="helpId"
            placeholder="anonymous"
            autoComplete='off'
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
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
            value={formData.vote}
            onChange={(e) => setFormData({ ...formData, vote: parseInt(e.target.value) })}
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
            autoComplete='off'
            value={formData.summary}
            onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
          />

        </div>


        <div className="mb-3">
          <label htmlFor="review" className="form-label">Review</label>
          <textarea
            name='review'
            className="form-control"
            rows="3"
            placeholder="Write your review here..."
            value={formData.review}
            autoComplete='off'
            onChange={(e) => setFormData({ ...formData, review: e.target.value })}></textarea>
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary mt-2">Submit Review</button>
        </div>
      </form>

    </div>


  )

}
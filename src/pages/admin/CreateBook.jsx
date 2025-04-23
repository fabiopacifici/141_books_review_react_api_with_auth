import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateBook = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    author: '',
    cover_image: ''
  });

  function handleSubmit(e) {
    e.preventDefault()

    const form = new FormData()
    form.append('title', formData.title)
    form.append('abstract', formData.abstract)
    form.append('author', formData.author)
    form.append('cover_image', formData.cover_image)


    fetch('http://localhost:3000/api/v1/books/create', {
      method: 'POST',
      body: form,
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data, 'Book created successfully');
        navigate('/admin');
      })
      .catch(err => {
        console.error(err, 'Error creating book');
      })
  }

  return (
    <div className="container py-4">
      <h1 className="mb-4">Create New Book</h1>

      <form className="col-md-6" encType='multipart/form-data' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="abstract" className="form-label">
            Abstract
          </label>
          <textarea
            id="abstract"
            name="abstract"
            value={formData.abstract}
            onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
            rows="4"
            className="form-control"
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="cover_image" className="form-label">
            Cover Image URL
          </label>
          <input
            type="file"
            id="cover_image"
            name="cover_image"
            onChange={(e) => setFormData({ ...formData, cover_image: e.target.files[0] })}
            className="form-control"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Create Book
        </button>
      </form>
    </div>
  );
};

export default CreateBook;
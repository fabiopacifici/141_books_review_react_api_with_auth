import { useState } from 'react';

const CreateBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    author: '',
    cover_image: ''
  });

  return (
    <div className="container py-4">
      <h1 className="mb-4">Create New Book</h1>

      <form className="col-md-6">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
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
            rows="4"
            className="form-control"
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="cover_image" className="form-label">
            Cover Image URL
          </label>
          <input
            type="text"
            id="cover_image"
            name="cover_image"
            value={formData.cover_image}
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
export default function BookReviewCard({ userReview }) {

  const { summary, vote, review, username, created_at } = userReview;



  function printRating(vote) {

    const stars = [];
    const empty = [];


    for (let i = 0; i < vote; i++) {
      stars.push(<i key={`star-fill-${i}`} className="bi bi-star-fill"></i>);
    }

    for (let i = 0; i < 5 - vote; i++) {
      empty.push(<i key={`star-empty-${i}`} className="bi bi-star"></i>);
    }

    return [...stars, ...empty];

  }





  return (
    <div className="card mb-3">

      <div className="card-header d-flex justify-content-between align-items-center">
        {/* summary */}
        <h3>{summary}</h3>
        {/* vote */}
        <div className="vote">{printRating(vote)}</div>
      </div>
      <div className="card-body">
        {/* review */}
        <p>{review}</p>

      </div>
      <div className="card-footer d-flex justify-content-between align-items-center">
        {/* username */}
        <div>Author: {username}</div>
        {/* created at */}
        <div className="created-at">created at: {created_at}</div>
      </div>

    </div>
  )

}
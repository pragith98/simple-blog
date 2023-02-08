function PostCard() {
  return (
    <div className="col-sm-3 mt-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary me-1">
            View
          </a>
          <a href="#" className="btn btn-danger">
            Delete
          </a>
        </div>
      </div>
    </div>
  );
}

export default PostCard;

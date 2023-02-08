function PostCard(props) {
  return (
    <div className="col-sm-3 mt-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{(props.post.title.length >20) ? (props.post.title.slice(0,20)+" ...") :props.post.title}</h5>
          <p className="card-text">{(props.post.content.length >80) ? (props.post.content.slice(0,80)+" ...") : props.post.content}</p>
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

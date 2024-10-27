import "../assets/css/CommentSection.css";

export default function CommentSection({ comments }) {
  return (
    <div className="comment-section">
      {comments.map((comment, index) => (
        <div className="comment-card" key={index}>
          <img
            src={comment.avatar}
            alt={`${comment.userName}'s avatar`}
            className="comment-avatar"
          />
          <div className="comment-content">
            <span className="comment-date">{comment.date}</span>
            <p className="comment-username">{comment.userName}</p>
            <p className="comment-text">{comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

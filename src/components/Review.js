import "../styles/Review.css"
const Review = ({stars,image,name,review}) => {
  return (
    <div className="rev-card">
      <div className="rating">
        {Array.from( { length: stars}, (_,i) => (
          <span key={i}>⭐</span>
        ))}
      </div>
      <div className="info">
      <div className="card-image">
        <img src={image} alt="profile"/>
      </div>
      <div className="name">
        {name}
      </div>
      </div>
      <div className="rev">
        {review}
      </div>
    </div>
  );
}
export default Review;
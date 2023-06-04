import Review from "./Review";
import '../styles/Reviews.css';

const Feedbacks = [
  {
    stars : 4,
    getImageSrc: () => require("../images/profile1.jpg"),
    name : "Ali S.",
    review : "The greek salad was excellent!",
  },
  {
    stars : 5,
    getImageSrc: () => require("../images/profile2.jpg"),
    name : "Samia J.",
    review : "Really enjoyed the atmosphere.",
  },
  {
    stars : 3,
    getImageSrc: () => require("../images/profile3.jpg"),
    name : "Lia H.",
    review : "You have to try the Greek Salad!",
  },
  {
    stars : 4,
    getImageSrc: () => require("../images/profile4.jpg"),
    name : "Peter R.",
    review: "Awesome place peaceful atmosphere with delicious food.",
  },
]

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="reviews-header">
        <h1>Testimonials</h1>
      </div>
      <div className="wrapper">
        {Feedbacks.map((feedback) => (
          <Review
            stars={feedback.stars}
            image={feedback.getImageSrc()}
            name={feedback.name}
            review={feedback.review}
          />
        ))}
      </div>
    </div>
  );
}
export default Reviews;
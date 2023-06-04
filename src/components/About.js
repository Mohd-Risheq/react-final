import "../styles/About.css"
import about1 from "../images/Mario and Adrian b.jpg"
import about2 from "../images/restaurant.jpg"
const About = () => {
  return (
    <div className="about container">
      <div className="about-left">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.
        </p>
      </div>
      <div className="about-right">
        <img className="about-img1" src={about1} alt="img1"/>
        <img className="about-img2" src={about2} alt="img2"/>
      </div>
    </div>
  );
}
export default About;
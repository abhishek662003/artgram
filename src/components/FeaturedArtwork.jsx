import "./FeaturedArtwork.css"
import Artcard from "./Artcard"

const FeaturedArtwork = () => {
  return (
    <div className="featuredartworks">
        <Artcard
    image="image1.jpg"
    title="Abstract Dreams"
    description="A colorful abstract painting"
  />
        <Artcard
    image="image2.jpg"
    title="Watercolor"
    description="pure watercolor painting"
  />
        <Artcard
    image="image3.jpg"
    title="Homemade"
    description="no artifical material used"
  />
    </div>
  )
}

export default FeaturedArtwork
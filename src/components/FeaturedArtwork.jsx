import "./FeaturedArtwork.css"
import Artcard from "./Artcard"

const FeaturedArtwork = () => {
  return (
    <div className="featuredartworks">
        <Artcard
    image="https://unsplash.com/illustrations/seamless-cubes-vector-background-lined-boxes-repeating-tile-pattern-3d-architecture-and-construction-geometric-design-q_QzDHxPvlI"
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
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
    </div>
  )
}

export default FeaturedArtwork
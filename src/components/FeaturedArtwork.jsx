import "./FeaturedArtwork.css"
import Artcard from "./Artcard"

const FeaturedArtwork = () => {
  return (
    <div className="featuredartworks">
        <Artcard
    image="https://plus.unsplash.com/premium_vector-1683133917118-b6ca6aee67c3?q=80&w=970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
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
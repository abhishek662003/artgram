import "./Artcard"

function Artcard(props) {
  return (
    <div className="Artcard">
        <img src={props.image} alt={props.title}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>
  )
}

export default Artcard
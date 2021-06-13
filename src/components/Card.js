import '../styles/Card.css'

function Card(props) {
    return (
        <div className="Card">
            <img src={props.data.imageUrl} alt={props.data.name}/>
        </div>
    )
}

export default Card
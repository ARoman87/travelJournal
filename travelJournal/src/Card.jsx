

function Card(props) {
    return (
        <div class="card">
            <div class="cardImage">
                <img src={props.data.img} alt="" />
            </div>
            <div class="cardData">
                <span><i class="fa fa-map-marker"></i><p class="location">{props.data.location}</p><a href={props.data.maps} target="_blank">View on Google Maps</a></span>
                <h2>{props.data.locationName}</h2>
                <h5>{props.data.date}</h5>
                <p class="description">{props.data.description}</p>
            </div>
        </div>
    )
}

export default Card
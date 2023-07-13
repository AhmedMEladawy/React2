const Product = (props) => {
    return (
        <>
            <img src={props.Source} alt={props.Name}/>
            <h1>{props.Name}</h1>
            <p>{props.Description}</p>
            <span>{props.Price}$</span>
        </>
    )
}

export default Product
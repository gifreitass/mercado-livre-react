const Product: React.FC<{
    src: string,
    p: string,
    h4: string
}> = (props) => {
    return (
        <div>
            <img src={props.src} />
            <p>{props.p}</p>
            <h4>{props.h4}</h4>
        </div>
    )
}

export default Product
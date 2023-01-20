const Information: React.FC<{
    h2: string,
    h4: string
}> = (props) => {
    return(
        <div>
            <h2>{props.h2}</h2>
            <h4>{props.h4}</h4>
        </div>
    )
}

export default Information
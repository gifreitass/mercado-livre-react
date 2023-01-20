const NavegationTitle: React.FC<{
    children: string | React.ReactElement | React.ReactElement[]
}> = (props) => {
    return (
        <p>{props.children}</p>
    )
}

export default NavegationTitle
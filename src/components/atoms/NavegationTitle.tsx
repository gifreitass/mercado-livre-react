import { LetterNavBar } from "../../styled-components"

const NavegationTitle: React.FC<{
    children: string | React.ReactElement | React.ReactElement[]
}> = (props) => {
    return (
        <LetterNavBar>{props.children}</LetterNavBar>
    )
}

export default NavegationTitle
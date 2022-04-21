import { useContext } from "react"
import { ThemeContext } from "../../contexts/themeContext"

export const Button = (props) => {
    const {theme} = useContext(ThemeContext)

    return(
        <button {...props} style={{color: theme.color, backgroungColor: theme.background}}></button>
    )
}
//import { Children } from "react";


function Button({title, children}) {
    return (
        <>
        <h2>{title}</h2>
        {children}
        </>
    )
}

export default Button;
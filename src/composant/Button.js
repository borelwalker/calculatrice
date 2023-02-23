import React from "react";


const Button = ({synbole,color,handleClick}) => {

    return (
        
        <div onClick={()=>handleClick(synbole)}
        className='Button-wrapper' style={{backgroundColor: color}}>
            {synbole}
        </div>

    )

}
export default Button;
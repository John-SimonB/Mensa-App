import React from 'react'
import './whitebubble.css';


export const whitebubble = ({
    children,
}) => {

    return (
        <div className="bubble">
            <h4>{children}</h4>
        </div>
    )

}


export default whitebubble

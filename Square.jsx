import { useState } from "react"

export default function Square(props) {
    return (
        <div onClick={props.handleSquareClick}  className="square">{props.value}</div>
    )
}   
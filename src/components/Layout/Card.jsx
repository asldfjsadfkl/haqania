import React from 'react';
import '../styles/Card.css';
const Card = (props) => {
    return (
        <>
            <div className="card_main">
                <section>{props.title}</section>
                <section><h1> {props.icon}</h1></section>
                <p>{props.text}

                </p>
            </div>

        </>
    )
}

export default Card
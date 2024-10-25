import React from 'react';
import '../../styles/service.css';
const Info = (props) => {
    return (
        <>

            <div className="card-body">
                <div className="cardbody">
                    <div className='icons text-center'>{props.icon}</div>
                    <h5 className=" text-center headofInfo card-title">{props.head}</h5>
                    <p className="cont">{props.content}</p>
                    <div className="buttofinfo">{props.button}</div>
                </div>
            </div>

        </>
    )
}

export default Info
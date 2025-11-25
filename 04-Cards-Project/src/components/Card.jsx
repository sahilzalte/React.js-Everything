import React from 'react'
import { Bookmark } from 'lucide-react'
const Card = (props) => {
    return (

            <div className="card">
                <div className="top">
                    <img src={props.brandLogo} alt="" />
                    <button>Save <Bookmark /></button>
                </div>
                <div className="center">
                    <h3>{props.company} <span> {props.datePosted}</span></h3>
                    <h2>{props.post}</h2>
                    <div>
                        <h4>{props.tags}</h4>
                        <h4>{props.tag2}</h4>
                    </div>
                </div>
                <div className="bottom">
                    <div className="">
                          <h3>${props.pay}/hr</h3>
                        <p>{props.location}</p>
                    </div>
                    <button>Apply</button>
                </div>
            </div>

    )
}

export default Card
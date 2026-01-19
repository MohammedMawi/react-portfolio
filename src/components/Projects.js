import React from "react";
import '../CSS/projects.css';

export default function Projects(props) {
    return(
        <>
            <div className="example">
                <div class="thumb">
                    <a href={`${props.link}`} target="_blank" rel="noreferrer">
                        <img class="pic" src={`${props.pic}`} alt="" />
                    </a>
                </div>

                <div className="pname">
                    <a href={`${props.link}`} target="_blank" className="link" rel="noreferrer">
                        <h3>{props.name}</h3>
                    </a>
                </div>

                <div className="tool">
                    <h3>{props.language}</h3>
                </div>

                <div className="desc">
                    <p>{props.description}</p>
                </div>
            </div>
        </>
        
    )
}
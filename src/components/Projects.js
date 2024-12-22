import React from "react";
import '../CSS/projects.css';

export default function Projects(props) {
    return(
        <>
            <div class="example">
                <div class="thumb">
                    <a href={`${props.link}`} target="_blank">
                        <img class="pic" src={`${props.pic}`} alt="" />
                    </a>
                </div>

                <div class="pname">
                    <a href={`${props.link}`} target="_blank" class="link">
                        <h3>{props.name}</h3>
                    </a>
                </div>

                <div class="tool">
                    <h3>{props.language}</h3>
                </div>

                <div class="desc">
                    <p>{props.description}</p>
                </div>
            </div>
        </>
        
    )
}
import React from 'react'
import Tag from "./tag";


function Card(props) {
    return (
        <a href={props.project.url} target="_blank" rel="noopener noreferrer" data-aos="fade-up">
            <div className="rounded-lg overflow-hidden shadow-lg mb-10 bg-gray-100 mx-10">
                <img className="w-full" src={props.project.image_url} alt={props.project.name} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{props.project.name}</div>
                    <h6 className="my-3 text-sm text-gray-700">Autor: <b>{props.project.author}</b></h6>
                    <p className="text-gray-700 text-base">
                        {props.project.description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {props.project.languages.split(" ").map(language => <Tag key={language} name={language}/>)}
                </div>
            </div>
        </a>
    );
}

export default Card;
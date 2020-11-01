import React from 'react';

function Progressbar(props) {
    return (
        <div className="shadow-lg w-full bg-gray-100 rounded">
            <div
                className="bg-main text-lg leading-none py-1 shadow text-center text-white rounded font-semibold"
                style={{width: props.barlength}}>{props.barlength}
            </div>
        </div>
    );
}

export default Progressbar
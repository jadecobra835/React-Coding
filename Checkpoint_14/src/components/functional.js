import React from 'react';

// This is how we accept props
export default function(props) {
    return (
        <div>
            {/* This is how we use props */}
            <button onClick={props.title}>Click Me!</button>
        </div>
    );
}
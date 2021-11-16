import React from 'react';
const View = (props) => {
    return (
        <div>

            <h3>name:{props.name}</h3>
            <h3>age:{props.age}</h3>
            <h3>hobbies: {props.hobbies}</h3>

        </div>
    )
}

export default View


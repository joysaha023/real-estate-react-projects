import React from 'react';

const EstateCard = ({estate}) => {
    const {estate_title} = estate;
    return (
        <div>
            <h2>{estate_title}</h2>
        </div>
    );
};

export default EstateCard;
import React from 'react';


const Card = ({name, email, id}) => {
    return(
        <div className="tc bg-light-yellow dib br3 pa3 ma2 grow shadow-5 bw2">
            <img alt="robots" src={`https://robohash.org/${id}?set=set2`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;
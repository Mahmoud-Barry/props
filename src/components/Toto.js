import React from 'react';

const Toto = (props) => {

    const btnReponse = props.leState.messageMaman !== null ? (<button onClick={props.reponseToto}>Reponse</button>) : (<button disabled> Reponse</button>) 

    
    return(
        <div>
            <h2>{props.name}</h2>
            <h2>{btnReponse}</h2>
            <p>{props.leState.messageToto}</p>
        </div>
    )
}

export default Toto;
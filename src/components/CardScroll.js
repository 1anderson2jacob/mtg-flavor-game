
import { useState, useEffect } from 'react'
import Card from './Card'

function CardScroll(props) {
    const [selected, setSelected] = useState(0);

    // const toggleSelected = (cardId) => {
    //     selected === cardId ? setSelected(0) : setSelected(cardId);
    // };

    const handleClick = (cardId) => {
        props.onChildClick(cardId)
        selected === cardId ? setSelected(0) : setSelected(cardId);
    };

    const cardComponents = props.cards.map(card => {
        return(
            <div
            key={`div${card.id}`}
            onClick={() => handleClick(card.id)}
            // onClick={() => props.onChildClick(card.id)}
            className={'card-container ' + (selected === card.id && 'selected')}>
                <Card key={`c${card.id}`} data={card} />
            </div>
        )
    })

    return (
        <div>
            <div className="hScrollBar">
                {cardComponents}
            </div>
        </div>
    )   
}

export default CardScroll;

// chain animation where the loading animation is mtg cardbacks are loaded into the horizontal scroll, and from left to right the 
// cards lift up and come down. eg.
// 
// o o o o o o
// O o o o o o 
// o O o o o o 
// o o O o o o 
// o o o O o o
// o o o o O o
// o o o o o O
// o o o o o o

// then, when cards are loaded, they flip in this same chain sequential pattern
// eg. u = unflipped, f = flipped
// u u u u u u
// f u u u u u
// f f u u u u 
// f f f u u u 
// f f f f u u
// f f f f f u
// f f f f f f 
import GetCards from '../scripts/getCards'
import Card from './Card'
import FlavorText from './FlavorText'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function Board(props) {
    
    let cards = GetCards(); //put this on a component w/ onclick
    let numCards = 3;

    cards.length = numCards;
    const cardComponents = cards.map(card => <Card key={card.id} data={card}/>)
    const flavorComponents = cards.map(card => <FlavorText key={`ft${card.id}`} data={card}/>)
    const flavorComponent = flavorComponents[getRandomInt(numCards)];
    
    return (
        <div>
            {cardComponents}
            {flavorComponent}
        </div>
    )   
}

export default Board
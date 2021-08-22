import CardScroll from './CardScroll'
import FlavorText from './FlavorText'
import SubmitButton from './SubmitButton'
import { useState, useEffect } from 'react'
import useAxios from '../hooks/useAxios'
import '../styles/CardPicker.css'

function CardPicker(props) {
    const [randomInt, setRandomInt] = useState(0);
    const [selected, setSelected] = useState(0);

    const numCards = 20;
    const numDisplay = 10; 

    const [updateCount, setUpdateCount] = useState(0);
    const [isLoading, error, cards] = useAxios(updateCount, `https://api.magicthegathering.io/v1/cards?random=true&pageSize=${numCards}&flavor=.&imageUrl=.`)
 

    useEffect(() => {
        setRandomInt(Math.floor(Math.random() * numDisplay))
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }
    
    if (error) {
        return <div>Error...</div>
    }

    const toggleSelected = (cardId) => {
        console.log(cardId)
        selected === cardId ? setSelected(0) : setSelected(cardId);
        //return true
    };
    
    const filteredCards = cards.filter(card => Boolean(card.imageUrl))
    filteredCards.length = numDisplay;

    const flavorComponents = filteredCards.map(card => <FlavorText key={`ft${card.id}`} flavor={card.flavor}/>)
    const flavorComponent = flavorComponents[randomInt];

    function updateCards() {
        setUpdateCount(updateCount+1);
        setSelected(0);
    }
    
    return (
        
        <div>
            {flavorComponent}
            <CardScroll cards={filteredCards} onChildClick={toggleSelected}/> 
            <SubmitButton onChildClick={updateCards}/>
            <h1>{selected}</h1>
        </div>
    )
}

export default CardPicker

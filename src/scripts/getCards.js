import { useState, useEffect } from 'react'
import axios from "axios"

function GetCards() {
    const[cards, setCards] = useState([]);
    const numCards = 10;

    useEffect(() => {
        const fetchData = async() => {
            const res = await axios.get(`https://api.magicthegathering.io/v1/cards?random=true&pageSize=${numCards}&flavor=.&imageUrl=.`);
            setCards(res.data.cards);
        }

        fetchData();
    }, []);

    const cardData = cards.filter(card => Boolean(card.imageUrl))

    return cardData;
}

export default GetCards;
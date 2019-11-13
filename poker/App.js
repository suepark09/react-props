// Render the cards using React!
const App = (props) => {
    let { cards } = props;

    const AllCards = props.cards.map(Card)
    return (
        <span>{ AllCards }</span>
    )
}

// CHALLENGE: Write a separate Card component for use in the App component
// TIP: Use props to pass the suit and number to each Card component
const Card = (props) => {
    console.log('card props', props)
    const cardImg = {
        value: props.value,
        suit: props.suit
    }

    console.log('++++++', cardImg.suit)
    return <div className="card-container">

    <img src= { `cards/${cardImg.value}${cardImg.suit}.png` } height="200px"/>

    </div>
  
}
// Render the tweets using React!
const App = (props) => {
    let { tweets } = props;
    // console.log('props in app function', tweets)
    const AllTweets = props.tweets.map(Tweet)
    return (
        <span>{ AllTweets }</span>
    )
}

// CHALLENGE: Write a separate Tweet component for use in the App component
const Tweet = (props) => {
    return <div className="tweet-container">
        {User(props.user) }
        <h2 className="tweet-text">{props.text}</h2>
        <hr/>
        {Metrics(props)}
    </div>
}


// CHALLENGE: Write a separate User component for use in the Tweet component
const User =  (props) => {
        return <div className="user-container">
            { props.username } <img src="twitterIcons/check-circle.svg" height="20px"/><br />
            {props.handle} 
        </div>
    }

 // CHALLENGE: Write a separate Metrics component for use in the Tweet component (likes, retweets, replies)
 const Metrics = (props) => {
        return <div className="metrics-container">
          <div className="metric-item"><img src="twitterIcons/message-circle.svg" /> {props.replies}</div> 
          <div className="metric-item"><img src="twitterIcons/repeat.svg" /> {props.retweets}</div>
          <div className="metric-item"><img src="twitterIcons/heart.svg" /> {props.likes}</div>
        </div>
    }

// BONUS CHALLENGE - Delete your Tweet component code and rewrite the App component so that it uses User and Metrics directly
// Render the tweets using React!
const App = (props) => {
    let { tweets } = props;
    const AllTweets = props.tweets.map(Tweet)
    return (
        <span>{ AllTweets }</span>
    )
}

// CHALLENGE: Write a separate Tweet component for use in the App component
const Tweet = (props) => {
console.log('return tweet prop', props.text)
    const tweetImg = {
        user: props.user,
        text: props.text,
        likes: props.likes,
        retweets: props.retweets,
        replies: props.replies
    }

    // console.log('teh hell is this', tweetImg)

    return <div className="tweet-container">

        { tweetImg }
    </div>
}



const User = null;  // CHALLENGE: Write a separate User component for use in the Tweet component

const Metrics = null;  // CHALLENGE: Write a separate Metrics component for use in the Tweet component (likes, retweets, replies)

// BONUS CHALLENGE - Delete your Tweet component code and rewrite the App component so that it uses User and Metrics directly
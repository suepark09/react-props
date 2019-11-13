// Render the rectangle using React!
const App = (props) => {
    console.log('props in App', props)
    let { rectangle } = props;
    let AllRectangle = Object.values(rectangle)

    return (
        <div className="rectangle-container">
            <div style={{width: AllRectangle[0] + 'px', height: AllRectangle[1] + 'px', background: AllRectangle[2]}}></div>
        </div>
    )
}
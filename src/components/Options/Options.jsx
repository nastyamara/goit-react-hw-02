export default function Options({ onUpdateGood, onUpdateNeutral,onUpdateBad, totalFeedback, reset }) {

    return (
            <div>
        <button onClick={onUpdateGood}>Good</button>
        <button onClick={onUpdateNeutral}>Neutral</button>
            <button onClick={onUpdateBad}>Bad</button>
            
            {totalFeedback !== 0 &&
                (<button onClick={reset}>Reset</button>) }
        
        
    </div>
    )

}
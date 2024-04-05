export default function Feedback({value, total}) {
    return (
        <ul>
            <li>Good: { value.good}</li>
            <li>Neutral: { value.neutral}</li>
            <li>Bad: {value.bad}</li>
            <li>Total: { total}</li>
            <li>Positive: {Math.round((value.good / total) * 100) }%</li>
       
        
           
        </ul>
    )
}
export default function Feedback({value}) {
    return (
        <ul>
            <li>Good: { value.good}</li>
            <li>Neutral: { value.neutral}</li>
            <li>Bad: { value.bad}</li>
        </ul>
    )
}
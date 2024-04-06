import { useEffect, useState } from "react"
import Description from "../Description/Description"
import Options from "../Options/Options"
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

function App() {

  const [feedback, setFeedback] = useState(() => { 
    const savedFeedback = localStorage.getItem('feedbackNumber');
    if (savedFeedback !== null) { return JSON.parse(savedFeedback); }

  return (  {
      good:0,
      neutral:0,
      bad:0,
    })
  
});
  
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
 
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

const updateFeedback = feedbackType => {
 setFeedback({...feedback,
   [feedbackType]: feedback[feedbackType] + 1
  }) 

}

  const resetFeedback = () => setFeedback({
  good: 0,
	neutral: 0,
	bad: 0
});

  useEffect(() => {
    localStorage.setItem('feedbackNumber', JSON.stringify(feedback));
  }, [feedback])

  return (
    <div>
      <Description /> 
      <Options onUpdate={updateFeedback}
        totalFeedback={totalFeedback}
        reset={ resetFeedback } />
      
      {totalFeedback === 0 ? <Notification /> :
        <Feedback value={feedback} total={totalFeedback} positive={positiveFeedback} />}
    
    </div>
 
  )
}

export default App

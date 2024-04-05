import { useEffect, useState } from "react"
import Description from "../Description/Description"
import Options from "../Options/Options"
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

function App() {

  const [feedback, setFeedback] = useState(() => { 
    const savedFeedback = localStorage.getItem('feedbackNumber');
    if (savedFeedback !== 0) { return JSON.parse(savedFeedback); }

  return (  {
      good:0,
      neutral:0,
      bad:0,
    })
  
});
  
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  console.log(totalFeedback);

const updateFeedback = feedbackType => {
 setFeedback({...feedback,
   [feedbackType]: feedback[feedbackType] + 1
  }) 
  console.log(feedback);
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
        <Feedback value={feedback} total={ totalFeedback } />}
    
    </div>
 
  )
}

export default App

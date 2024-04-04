import { useState } from "react"
import Description from "../Description/Description"
import Options from "../Options/Options"
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";



function App() {


const [review, setReview] = useState({
  good: 0,
	neutral: 0,
	bad: 0
});
  
  const totalFeedback = review.good + review.neutral + review.bad;
  console.log(totalFeedback);

const handleReviewGood = () => {
  setReview({...review,
    good: review.good + 1
  }) 
  console.log(review);
}
  
const handleReviewNeutral = () => {
   setReview({...review,
    neutral: review.neutral + 1
  }) 
  console.log(review);
}
  
const handleReviewBad = () => {
   setReview({...review,
    bad: review.bad + 1
  }) 
}
  const resetReview = () => setReview({
  good: 0,
	neutral: 0,
	bad: 0
});

//  props for feedback

  return (
    <div>

      <Description />
      
      <Options onUpdateGood={handleReviewGood}
        onUpdateNeutral={handleReviewNeutral}
        onUpdateBad={handleReviewBad}
        totalFeedback={totalFeedback}
        reset={ resetReview} />
      
      {totalFeedback === 0 ? <Notification />: <Feedback value={review} />}
      
  
    </div>
 
  )
}

export default App

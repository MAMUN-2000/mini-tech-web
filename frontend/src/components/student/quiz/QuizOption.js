import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  correctAns,
  deleteAns,
} from "../../../features/student/quizzes/quizzesSlice";

function QuizOption({ option, ...others }) {
  const [correct, setCorrect] = useState(false);
  const dispatch = useDispatch();
  console.log(option);

  const handleChange = (e) => {
    setCorrect(e.target.checked);

    if (!correct && option.isCorrect) {
      dispatch(correctAns(option));
    } else dispatch(deleteAns(option));
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={correct}
        {...others}
        onChange={handleChange}
        // readOnly={correct}
        // disabled={correct}
      />
      {option?.option}
    </label>
  );
}

export default QuizOption;

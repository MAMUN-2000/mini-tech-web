import QuizOption from "./QuizOption";

function QuizItem({ item }) {
  const { question, options } = item;

  return (
    <div className="space-y-8 ">
      <div className="quiz">
        <h4 className="question">{question}</h4>
        <form className="quizOptions">
          {options.map((option) => (
            <QuizOption key={option?.id} option={option} />
          ))}
        </form>
      </div>
    </div>
  );
}

export default QuizItem;

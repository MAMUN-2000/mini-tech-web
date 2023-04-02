import { useSelector } from "react-redux";
import QuizItem from "./QuizItem";

function QuizList() {
  const { quizzes: data } = useSelector((state) => state.studentQuiz);

  // console.log(data);

  // decide what to render
  let content;

  if (data?.length > 0) {
    content = data.map((item) => <QuizItem key={item?.id} item={item} />);
  }

  return (
    <section className="py-6 bg-primary">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">{data[0]?.video_title}</h1>
          <p className="text-sm text-slate-200">
            Each question contains 5 Mark
          </p>
        </div>
        {content}

        <button className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">
          Submit
        </button>
      </div>
    </section>
  );
}

export default QuizList;

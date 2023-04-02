import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useGetStudentAssignmentQuery } from "../../../features/student/assignment/assignmentAPI";
import { useGetStudentQuizzesQuery } from "../../../features/student/quizzes/quizzesAPI";
import { getQuiz } from "../../../features/student/quizzes/quizzesSlice";
// import Description from "./Description";

function Player({ video }) {
  const { data: a } = useGetStudentAssignmentQuery({ id: video?.id });
  const { data: q } = useGetStudentQuizzesQuery({ id: video?.id });
  const dispatch = useDispatch();
  const handleQuizBtn = () => {
    dispatch(getQuiz(q));
  };

  return (
    <div className="col-span-full w-full space-y-8 lg:col-span-2">
      <iframe
        width="100%"
        className="aspect-video"
        src={video?.url}
        title={video?.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div>
        <h1 className="text-lg font-semibold tracking-tight text-slate-100">
          {video?.title}
        </h1>
        <h2 className=" pb-4 text-sm leading-[1.7142857] text-slate-400">
          Uploaded on {video?.createdAt}
        </h2>

        <div className="flex gap-4">
          {a?.length > 0 && <Button title=" এসাইনমেন্ট" path="/" />}
          {q?.length > 0 && (
            <Button
              title="কুইজে অংশগ্রহণ করুন"
              path="/quiz"
              onClick={handleQuizBtn}
            />
          )}
        </div>
        <p className="mt-4 text-sm text-slate-400 leading-6">
          {video?.description}
        </p>
      </div>
    </div>
  );
}

export default Player;

function Button({ title, path, ...others }) {
  return (
    <Link
      {...others}
      to={path}
      className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
    >
      {title}
    </Link>
  );
}

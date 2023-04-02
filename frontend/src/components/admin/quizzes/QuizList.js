import { useGetQuizzesQuery } from "../../../features/admin/quizzes/quizzesAPI";
import Error from "../../common/ui/error/Error";
import Loading from "../../common/ui/loaders/Loading";
import QuizItem from "./QuizItem";

function QuizList() {
  const { data: quizzes, isError, isLoading } = useGetQuizzesQuery();

  // decide what to renden
  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <Error msg="some error heppend" />;
  } else if (!isLoading && !isError && quizzes?.length === 0) {
    content = <Error msg="No video Found" />;
  } else if (!isLoading && !isError && quizzes?.length > 0) {
    content = (
      <table className="divide-y-1 text-base divide-gray-600 w-full">
        <thead>
          <tr>
            <th className="table-th">Question</th>
            <th className="table-th">Video</th>
            <th className="table-th justify-center">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-600/50">
          {quizzes?.map((quiz) => (
            <QuizItem key={quiz?.id} quiz={quiz} />
          ))}
        </tbody>
      </table>
    );
  }

  return content;
}

export default QuizList;

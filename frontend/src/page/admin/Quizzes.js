import AdminNavbar from "../../components/common/navbar/AdminNavbar";
import QuizList from "../../components/admin/quizzes/QuizList";
import { Link } from "react-router-dom";
// import AddQuiz from "../../components/common/models/AddQuiz";

function Quizzes() {
  return (
    <>
      <AdminNavbar />
      {/* <AddQuiz open={opened} control={controlModal} /> */}
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
          <div className="px-3 py-20 bg-opacity-10">
            <div className="w-full flex">
              <Link to="/admin/add-quiz" className="btn ml-auto">
                Add Quiz
              </Link>
            </div>
            <div className="overflow-x-auto mt-4">
              <QuizList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Quizzes;

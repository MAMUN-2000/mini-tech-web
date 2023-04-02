import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../components/common/form/TextInput";
import AdminQuizOption from "../../components/admin/quizzes/AdminQuizOption";
import AdminNavbar from "../../components/common/navbar/AdminNavbar";
import { useEditQuizMutation } from "../../features/admin/quizzes/quizzesAPI";
import { clearQuizOptions } from "../../features/admin/quizzes/quizzesSlice";
import { useGetAdminVideosQuery } from "../../features/admin/videos/videosAPI";
import useChangeTitle from "../../hooks/changeTitle/useChangeTitle";

function EditQuiz() {
  const { data: videos, isError, isLoading } = useGetAdminVideosQuery();
  const { singleQuiz: s, quizOptions } = useSelector((state) => state.quiz);
  const [question, setQuestion] = useState(s.question);
  const [video_title, setVideoTitle] = useState(s.video_title);
  const [video_id, setVideoId] = useState(s.video_id);
  const [opened, setOpened] = useState(false);
  const [editQuiz, { isLoading: quizLoading }] = useEditQuizMutation();
  const dispatch = useDispatch();

  const controlModal = () => {
    setOpened((prevState) => !prevState);
  };

  const formData = {
    question,
    video_title,
    video_id: Number(video_id),
    options: quizOptions,
  };
  const reset = () => {
    setQuestion("");
    setVideoTitle("");
    setVideoId("");
  };
  const handleForm = (e) => {
    e.preventDefault();
    const confirm = window.confirm("Confirm Update Quiz ! ");
    if (confirm) {
      editQuiz({
        data: formData,
        id: s.id,
      });
      reset();
      dispatch(clearQuizOptions());
    }
  };
  useChangeTitle("LWS - Edit Quiz ");

  return (
    <>
      <AdminNavbar />
      <AdminQuizOption open={opened} control={controlModal} />

      <div className="rounded w-[400px] lg:w-[1000px] absolute space-y-8 bg-white text-slate-700 p-10  top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 capitalize">
          Add new quiz
        </h2>
        <form className="mt-8 space-y-6" method="POST" onSubmit={handleForm}>
          <div className="rounded-md shadow-sm -space-y-px">
            <TextInput
              title="Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <TextInput
              title="Video ID"
              value={video_id}
              type="number"
              onChange={(e) => setVideoId(e.target.value)}
            />

            <div className="">
              <label className="text-sm font-medium text-slate-800 ">
                Video Title
              </label>
              <select
                required
                value={video_title}
                onChange={(e) => setVideoTitle(e.target.value)}
                className="login-input rounded-t-md"
              >
                <option
                  value="login-input rounded-t-md"
                  hidden
                  defaultValue={""}
                  className="text-sm font-medium text-slate-800"
                >
                  Select Assignment
                </option>
                {!isError &&
                  !isLoading &&
                  videos?.length > 0 &&
                  videos?.map((item) => (
                    <option
                      value={item?.title}
                      key={item?.id}
                      className="text-sm font-medium text-slate-200"
                    >
                      {item?.title}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <button
                // disabled={isLoading}
                onClick={controlModal}
                type="button"
                className="group mt-5  capitalize relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              >
                select quiz options
              </button>
            </div>
          </div>

          <div>
            <button
              disabled={quizLoading}
              type="submit"
              className="group capitalize relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            >
              Add quiz
            </button>
          </div>

          {/* <Error message="There was an error" /> */}
        </form>
      </div>
    </>
  );
}

export default EditQuiz;

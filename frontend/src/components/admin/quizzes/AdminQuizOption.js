import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuizOption } from "../../../features/admin/quizzes/quizzesSlice";
// import TextInput from "../form/TextInput";

function AdminQuizOption({ open, control }) {
  const [option, setTitle] = useState("");
  const [isCorrect, setChecked] = useState(false);
  const { quizOptions } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  console.log(quizOptions.length);

  const formData = {
    isCorrect,
    option,
  };

  const reset = () => {
    setTitle("");
    setChecked(false);
  };
  const handleForm = (e) => {
    e.preventDefault();

    const confirm = window.confirm("Confirm Add Video");
    if (confirm) {
      dispatch(addQuizOption(formData));
      reset();
    }
  };
  const disableButton = () => {
    if (quizOptions.length === 4) {
      return true;
    } else return false;
  };

  return (
    open && (
      <>
        <div
          onClick={control}
          className="fixed w-full h-full inset-0 z-20 bg-black/90 cursor-pointer"
        ></div>
        <div className="rounded w-[400px] lg:w-[600px] space-y-8 text-gray-700 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 capitalize">
            add quiz options
          </h2>
          <form className="mt-8 space-y-6" method="POST" onSubmit={handleForm}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  required
                  // className="login-input rounded-t-md"
                  placeholder="add option"
                  value={option}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="checkbox"
                  checked={isCorrect}
                  onChange={(e) => setChecked(e.target.checked)}
                />
              </div>
            </div>

            <div>
              <button
                disabled={disableButton()}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              >
                {disableButton() ? "Stop" : "Add Options"}
              </button>
            </div>

            {/* <Error message="There was an error" /> */}
          </form>
        </div>
      </>
    )
  );
}

export default AdminQuizOption;

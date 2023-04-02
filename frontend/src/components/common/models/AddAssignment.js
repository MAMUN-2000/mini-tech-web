import { useState } from "react";
import { useAddAssignmentMutation } from "../../../features/admin/assignment/assignmentAPI";
import { useGetAdminVideosQuery } from "../../../features/admin/videos/videosAPI";
import TextInput from "../form/TextInput";

function AddAssignment({ open, control }) {
  const { data: videos, isError } = useGetAdminVideosQuery();
  const [addAssignment, { isLoading }] = useAddAssignmentMutation();
  const [title, setTitle] = useState("");
  const [video_title, setVideoTitle] = useState("");
  const [video_id, setVideoId] = useState("");
  const [totalMark, setTotalMark] = useState("");

  const formData = {
    title,
    video_title,

    video_id: Number(video_id),
    totalMark: Number(totalMark),
  };
  const reset = () => {
    setTitle("");
    setVideoTitle("");
    setTotalMark("");
    setVideoId("");
  };
  const handleForm = (e) => {
    e.preventDefault();

    console.log(formData);

    const confirm = window.confirm("Confirm Add Assignment");
    if (confirm) {
      addAssignment(formData);
      reset();
      control();
    }
  };

  return (
    open && (
      <>
        <div
          onClick={control}
          className="fixed w-full h-full inset-0 z-10 bg-black/60 cursor-pointer"
        ></div>
        <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 capitalize">
            Add new assignment
          </h2>
          <form className="mt-8 space-y-6" method="POST" onSubmit={handleForm}>
            <div className="rounded-md shadow-sm -space-y-px">
              <TextInput
                title="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextInput
                title="Video ID"
                value={video_id}
                type="number"
                onChange={(e) => setVideoId(e.target.value)}
              />
              <TextInput
                title="Total Mark"
                type="number"
                value={totalMark}
                onChange={(e) => setTotalMark(e.target.value)}
              />
              <TextInput
                title="Video Title"
                value={video_title}
                onChange={(e) => setVideoTitle(e.target.value)}
              />
              <div className="rounded-md shadow-sm -space-y-px">
                <label className="text-sm font-medium text-slate-800 sr-only">
                  Assignment Video Title
                </label>
                <select
                  required
                  value={video_title}
                  onChange={(e) => setVideoTitle(e.target.value)}
                  className=""
                >
                  <option
                    value=""
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
                        className="text-sm font-medium text-slate-800"
                      >
                        {item?.title}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div>
              <button
                disabled={isLoading}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              >
                Add Assignment
              </button>
            </div>

            {/* <Error message="There was an error" /> */}
          </form>
        </div>
      </>
    )
  );
}

export default AddAssignment;

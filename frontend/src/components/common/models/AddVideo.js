import { useState } from "react";
import { useAddVideoMutation } from "../../../features/admin/addVideo/addVideoAPI";
import TextInput from "../form/TextInput";

// "https://www.youtube.com/embed/Q_vrGCz9TXw"
// https://www.youtube.com/watch?v=Q_vrGCz9TXw

function AddVideo({ open, control }) {
  const [addVideo, { isLoading }] = useAddVideoMutation();
  const [title, setTitle] = useState("");
  const [views, setViews] = useState("");
  const [description, setDescription] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [duration, setDuration] = useState("");
  const [url, setUrl] = useState("");
  const formData = {
    title,
    views,
    description,
    duration,
    createdAt,
    url: url.replace(/watch\?v=/g, "embed/"),
  };
  const reset = () => {
    setTitle("");
    setDuration("");
    setDescription("");
    setCreatedAt("");
    setViews("");
    setUrl("");
  };

  const handleForm = (e) => {
    e.preventDefault();

    console.log(formData);
    const confirm = window.confirm("Confirm Add Video");
    if (confirm) {
      addVideo(formData);
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
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Add new video
          </h2>
          <form className="mt-8 space-y-6" method="POST" onSubmit={handleForm}>
            <div className="rounded-md shadow-sm -space-y-px">
              <TextInput
                title="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextInput
                title="Url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <TextInput
                title="Created At"
                value={createdAt}
                onChange={(e) => setCreatedAt(e.target.value)}
              />
              <TextInput
                title="Views"
                value={views}
                onChange={(e) => setViews(e.target.value)}
              />
              <TextInput
                title="Duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
              <div>
                <label className="sr-only">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 borderlogin-input rounded-t-md text-gray-800 focus:z-10 sm:text-sm"
                  placeholder="Description"
                />
              </div>
            </div>

            <div>
              <button
                disabled={isLoading}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              >
                Add Video
              </button>
            </div>

            {/* <Error message="There was an error" /> */}
          </form>
        </div>
      </>
    )
  );
}

export default AddVideo;

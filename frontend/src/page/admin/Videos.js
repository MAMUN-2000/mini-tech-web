import { useState } from "react";
import VideoList from "../../components/admin/videos/VideoList";
import AddVideo from "../../components/common/models/AddVideo";
import AdminNavbar from "../../components/common/navbar/AdminNavbar";
import useChangeTitle from "../../hooks/changeTitle/useChangeTitle";

function Videos() {
  useChangeTitle("LWS - Admin Videos");
  const [opened, setOpened] = useState(false);
  const controlModal = () => {
    setOpened((prevState) => !prevState);
  };

  return (
    <>
      <AdminNavbar />
      <AddVideo open={opened} control={controlModal} />
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
          <div className="px-3 py-20 bg-opacity-10">
            <div className="w-full flex">
              <button className="btn ml-auto" onClick={controlModal}>
                Add Video
              </button>
            </div>
            <div className="overflow-x-auto mt-4">
              <VideoList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Videos;

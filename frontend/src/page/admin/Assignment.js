import { useState } from "react";
import AssignmentList from "../../components/admin/assignment/AssignmentList";
import AddAssignment from "../../components/common/models/AddAssignment";
import AdminNavbar from "../../components/common/navbar/AdminNavbar";
import useChangeTitle from "../../hooks/changeTitle/useChangeTitle";

function Assignment() {
  useChangeTitle("LWS - Assignment");
  const [opened, setOpened] = useState(false);
  const controlModal = () => {
    setOpened((prevState) => !prevState);
  };

  return (
    <>
      <AdminNavbar />
      <AddAssignment open={opened} control={controlModal} />
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
          <div className="px-3 py-20 bg-opacity-10">
            <div className="w-full flex">
              <button className="btn ml-auto" onClick={controlModal}>
                Add Assignment
              </button>
            </div>
            <AssignmentList />
          </div>
        </div>
      </section>
    </>
  );
}

export default Assignment;

import AssignmentMarkList from "../../components/admin/assignmentMark/AssignmentMarkList";
import AdminNavbar from "../../components/common/navbar/AdminNavbar";
import { useGetAssignmentMarksQuery } from "../../features/admin/assignmentMark/assignmentMarkAPI";
import useChangeTitle from "../../hooks/changeTitle/useChangeTitle";

function AssignmentMark() {
  const { data: marksList } = useGetAssignmentMarksQuery();
  const pendingMarks = () =>
    marksList?.filter((item) => item?.status === "pending");
  const markSend = () =>
    marksList?.filter((item) => item?.status === "published");
  useChangeTitle("LWS - Assignment Mark");
  return (
    <>
      <AdminNavbar />
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
          <div className="px-3 py-20 bg-opacity-10">
            <ul className="assignment-status">
              <li>
                Total <span>{marksList?.length}</span>
              </li>
              <li>
                Pending <span> {pendingMarks()?.length} </span>
              </li>
              <li>
                Mark Sent <span> {markSend()?.length} </span>
              </li>
            </ul>
            <div className="overflow-x-auto mt-4">
              <AssignmentMarkList marksList={marksList} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AssignmentMark;

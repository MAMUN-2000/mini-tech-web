import { useGetAssignmentQuery } from "../../../features/admin/assignment/assignmentAPI";
import Error from "../../common/ui/error/Error";
import Loading from "../../common/ui/loaders/Loading";
import AssignmentItem from "./AssignmentItem";

function AssignmentList() {
  const { data: assignments, isError, isLoading } = useGetAssignmentQuery();

  // decide what to renden
  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <Error msg="some error heppend" />;
  } else if (!isLoading && !isError && assignments?.length === 0) {
    content = <Error msg="No video Found" />;
  } else if (!isLoading && !isError && assignments?.length > 0) {
    content = (
      <table className="divide-y-1 text-base divide-gray-600 w-full">
        <thead>
          <tr>
            <th className="table-th">Title</th>
            <th className="table-th">Video Title</th>
            <th className="table-th">Mark</th>
            <th className="table-th">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-600/50">
          {assignments?.map((assignment) => (
            <AssignmentItem key={assignment?.id} assignment={assignment} />
          ))}
        </tbody>
      </table>
    );
  }

  return content;
}

export default AssignmentList;

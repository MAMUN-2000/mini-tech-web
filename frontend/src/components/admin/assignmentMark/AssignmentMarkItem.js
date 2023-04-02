import { useState } from "react";
import { useUpdateAssignmentMarkMutation } from "../../../features/admin/assignmentMark/assignmentMarkAPI";

function AssignmentMarkItem({ markItem }) {
  const {
    repo_link,
    createdAt,
    title,
    student_name,
    id,
    status,
    // studen_id,
    mark: quizMark,
  } = markItem;
  const [hidden, setHidden] = useState(status);
  const [mark, setMark] = useState(quizMark);
  const [updateAssignmentMark] = useUpdateAssignmentMarkMutation();

  const handleSubmit = () => {
    if (mark > Number(100)) {
      alert("Max number is 100 ");
    } else {
      setHidden("published");
      const formData = {
        status: "published",
        mark: Number(mark),
      };
      updateAssignmentMark({
        id,
        data: formData,
      });
    }
  };

  // decide what to render
  let content;

  if (hidden === "published") {
    content = <td className="table-td">{mark}</td>;
  } else if (hidden === "pending") {
    content = (
      <td className="table-td input-mark">
        <input
          max="100"
          type="number"
          value={mark}
          onChange={(e) => setMark(e.target.value)}
        />
        <button onClick={handleSubmit}>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </button>
      </td>
    );
  }
  return (
    <tr>
      <td className="table-td">{title} </td>
      <td className="table-td"> {createdAt} </td>
      <td className="table-td">{student_name}</td>
      <td className="table-td">{repo_link}</td>
      {content}
    </tr>
  );
}

export default AssignmentMarkItem;

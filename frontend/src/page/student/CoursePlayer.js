import Navbar from "../../components/common/navbar/Navbar";
import { useEffect } from "react";
import Blank from "../../components/student/coursePlayer/Blank";

function CoursePlayer() {
  useEffect(() => {
    document.title = "LWS - Player";
  }, []);

  return (
    <>
      <Navbar />
      <Blank />
    </>
  );
}

export default CoursePlayer;

import { Route, Routes } from "react-router-dom";
import StudentLogin from "./page/student/StudentLogin";
import StudentRegistration from "./page/student/StudentRegistration";
import CoursePlayer from "./page/student/CoursePlayer";
import Leaderboard from "./page/student/Leaderboard";
import Quiz from "./page/student/Quiz";
import Quizzes from "./page/admin/Quizzes";
import Dashboard from "./page/admin/Dashboard";
import Assignment from "./page/admin/Assignment";
import AssignmentMark from "./page/admin/AssignmentMark";
import Videos from "./page/admin/Videos";
import useCheckAuth from "./hooks/checkAuth/useCheckAuth";
import Loading from "./components/common/ui/loaders/Loading";
import PrivateRoute from "./components/common/customRoutes/PrivateRoute";
import PublicRoute from "./components/common/customRoutes/PublicRoute";
import CustomAdimRoute from "./components/common/customRoutes/CustomAdimRoute";
import SingleVideo from "./components/student/coursePlayer/SingleVideo";
import AddQuizzes from "./page/admin/AddQuizzes";
import EditQuiz from "./page/admin/EditQuiz";

function App() {
  const isAuthCheck = useCheckAuth();

  if (!isAuthCheck) {
    return <Loading />;
  } else
    return (
      <>
        <Routes>
          {/* studen part  */}
          <Route
            path="/"
            element={
              <PublicRoute>
                <StudentLogin />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <StudentRegistration />
              </PublicRoute>
            }
          />
          <Route
            path="/course-player"
            element={
              <PrivateRoute>
                <CoursePlayer />
              </PrivateRoute>
            }
          />
          <Route
            path="/course-player/:id"
            element={
              <PrivateRoute>
                <SingleVideo />
              </PrivateRoute>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <PrivateRoute>
                <Leaderboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/quiz"
            element={
              <PrivateRoute>
                <Quiz />
              </PrivateRoute>
            }
          />
          {/* adim part  */}
          <Route
            path="/admin"
            element={
              <CustomAdimRoute>
                <Dashboard />
              </CustomAdimRoute>
            }
          />
          <Route
            path="/admin/quizzes"
            element={
              <CustomAdimRoute>
                <Quizzes />
              </CustomAdimRoute>
            }
          />
          <Route
            path="/admin/add-quiz"
            element={
              <CustomAdimRoute>
                <AddQuizzes />
              </CustomAdimRoute>
            }
          />
          <Route
            path="/admin/edit-quiz"
            element={
              <CustomAdimRoute>
                <EditQuiz />
              </CustomAdimRoute>
            }
          />
          <Route
            path="/admin/assignment"
            element={
              <CustomAdimRoute>
                <Assignment />
              </CustomAdimRoute>
            }
          />
          <Route
            path="/admin/assignment-mark"
            element={
              <CustomAdimRoute>
                <AssignmentMark />
              </CustomAdimRoute>
            }
          />
          <Route
            path="/admin/videos"
            element={
              <CustomAdimRoute>
                <Videos />
              </CustomAdimRoute>
            }
          />
        </Routes>
      </>
    );
}

export default App;

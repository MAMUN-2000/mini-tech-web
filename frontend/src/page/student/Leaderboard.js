import React, { useEffect } from "react";
import Navbar from "../../components/common/navbar/Navbar";
import TopPositionList from "../../components/student/leaderboard/TopPositionList";
import UserPosition from "../../components/student/leaderboard/UserPosition";

function Leaderboard() {
  useEffect(() => {
    document.title = "LWS - Leaderboard";
  }, []);

  return (
    <>
      <Navbar />
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          <UserPosition />
          <TopPositionList />
        </div>
      </section>
    </>
  );
}

export default Leaderboard;

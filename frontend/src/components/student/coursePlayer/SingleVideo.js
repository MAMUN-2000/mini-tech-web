import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleVideoQuery } from "../../../features/student/videos/videosAPI";
// import { useParams } from "react-router-dom";
// import { useGetSingleVideosQuery } from "../../../features/student/videos/videosAPI";
import Navbar from "../../common/navbar/Navbar";
import Player from "./Player";
import ReletedVideoList from "./ReletedVideoList";

function SingleVideo() {
  const { id } = useParams();
  const { data: single } = useGetSingleVideoQuery({ id: Number(id) });

  return (
    <>
      <Navbar />

      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <Player video={single} />
            <ReletedVideoList />
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleVideo;

// "https://www.youtube.com/embed/Q_vrGCz9TXw"
// const u = "https://www.youtube.com/watch?v=Q_vrGCz9TXw";

// const myurl = (url) => {
//   // const surl = url.split("=");
//   const surl = url.replace(/watch\?v=/g, "embed/");
//   console.log(surl);
// };
// myurl(u);

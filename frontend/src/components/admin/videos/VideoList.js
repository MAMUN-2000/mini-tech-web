import { useGetAdminVideosQuery } from "../../../features/admin/videos/videosAPI";
import Error from "../../common/ui/error/Error";
import Loading from "../../common/ui/loaders/Loading";
import VideoItem from "./VideoItem";

function VideoList() {
  const { data: adminVideos, isError, isLoading } = useGetAdminVideosQuery();

  // decide what to renden
  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <Error msg="some error heppend" />;
  } else if (!isLoading && !isError && adminVideos?.length === 0) {
    content = <Error msg="No video Found" />;
  } else if (!isLoading && !isError && adminVideos?.length > 0) {
    content = (
      <table className="divide-y-1 text-base divide-gray-600 w-full">
        <thead>
          <tr>
            <th className="table-th">Video Title</th>
            <th className="table-th">Description</th>
            <th className="table-th">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-600/50">
          {adminVideos?.map((video) => (
            <VideoItem key={video?.id} video={video} />
          ))}
        </tbody>
      </table>
    );
  }

  return content;
}

export default VideoList;

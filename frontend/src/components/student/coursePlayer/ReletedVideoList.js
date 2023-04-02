import { useGetVideosQuery } from "../../../features/student/videos/videosAPI";
import ReletedVideoItem from "./ReletedVideoItem";
import Loading from "../../common/ui/loaders/Loading";
import Error from "../../common/ui/error/Error";

function ReletedVideoList() {
  const { data: videos, isError, isLoading } = useGetVideosQuery();

  // decide what to renden
  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <Error msg="some error heppend" />;
  } else if (!isLoading && !isError && videos?.length === 0) {
    content = <Error msg="No video Found" />;
  } else if (!isLoading && !isError && videos?.length > 0) {
    content = videos?.map((video) => (
      <ReletedVideoItem key={video?.id} video={video} />
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30">
      {content}
    </div>
  );
}

export default ReletedVideoList;

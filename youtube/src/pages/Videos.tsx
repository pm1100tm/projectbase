import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useYoutubeApi from '../hooks/youtubeApiHooks';
import { makeUniqueVideoId } from '../util/common/uuid';

import VideoType from '../types/VideoType';
import VideoCard from '../component/VideoCard';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery<VideoType[]>({
    queryKey: ['videos', keyword],
    queryFn: (): Promise<VideoType[]> => {
      return youtube.search(keyword);
    },
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          lx:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4"
        >
          {videos.map((video: VideoType) => (
            <VideoCard
              key={makeUniqueVideoId(video.id)}
              video={video}
              type=""
            />
          ))}
        </ul>
      )}
    </>
  );
}

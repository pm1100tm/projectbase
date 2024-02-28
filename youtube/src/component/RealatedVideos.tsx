import { useQuery } from '@tanstack/react-query';

import VideoCard from './VideoCard';

import useYoutubeApi from '../hooks/youtubeApiHooks';
import { makeUniqueVideoId } from '../util/common/uuid';

import VideoType from '../types/VideoType';

type RealatedVideosProps = {
  channelId: string;
};

export default function RealatedVideos({ channelId }: RealatedVideosProps) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery<VideoType[]>({
    queryKey: ['channelId', channelId],
    queryFn: (): Promise<VideoType[]> => {
      return youtube.search(channelId);
    },
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul>
          {videos.map((video: VideoType) => (
            <VideoCard
              key={makeUniqueVideoId(video.id)}
              video={video}
              type={'list'}
            />
          ))}
        </ul>
      )}
    </>
  );
}

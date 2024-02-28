import { useQuery } from '@tanstack/react-query';
import useYoutubeApi from '../hooks/youtubeApiHooks';

type ChannelInfoProps = {
  id: string;
  channelTitle: string;
};

export default function ChannelInfo({ id, channelTitle }: ChannelInfoProps) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: thumbnailUrl,
  } = useQuery({
    queryKey: ['channel', id],
    queryFn: (): Promise<string> => {
      return youtube.channelThumbnailUrl(id);
    },
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something is wrong</p>;
  }

  return (
    thumbnailUrl && (
      <div className="flex my-4 mb-4 items-center">
        <img
          className="w-10 h-10 rounded-full"
          src={thumbnailUrl}
          alt={channelTitle}
        ></img>
        <p className="text-lg font-medium ml-2">{channelTitle}</p>
      </div>
    )
  );
}

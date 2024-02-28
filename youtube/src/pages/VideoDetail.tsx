import { useLocation } from 'react-router-dom';

import ChannelInfo from '../component/ChannelInfo';

import VideoType from '../types/VideoType';
import RealatedVideos from '../component/RealatedVideos';

export default function VideoDetail() {
  const {
    state: { video },
  }: { state: { video: VideoType } } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section className="flex flex-col lg:flex-row gap-2">
      <article className="basis-9/12">
        <iframe
          id="player"
          width="100%"
          height="500"
          src={`http://www.youtube.com/embed/${video.id}`}
        />
        <div className="p-1">
          <h2 className="text-xl font-bold mt-2">{title}</h2>
          <ChannelInfo id={channelId} channelTitle={channelTitle} />
        </div>
        <pre className="whitespace-pre-wrap">{description}</pre>
      </article>
      <section className="basis-3/12">
        <RealatedVideos channelId={channelId} />
      </section>
    </section>
  );
}

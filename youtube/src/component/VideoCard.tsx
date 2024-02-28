import { useNavigate } from 'react-router-dom';

import { formatAgo } from '../util/common/date';

import VideoType from '../types/VideoType';

type VideoCardProps = {
  video: VideoType;
  type: string;
};

export default function VideoCard({ video, type }: VideoCardProps) {
  const navigate = useNavigate();

  const { title, channelTitle, publishedAt, thumbnails } = video.snippet;
  const { url } = thumbnails.medium;

  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault();
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };

  // CSS
  const isList: boolean = type === 'list';
  const classNameLi = 'cursor-pointer ' + (isList ? 'flex gap-2' : '');

  return (
    <li className={classNameLi} onClick={handleClick}>
      <img
        className={isList ? 'w-60 mr-2' : 'w-full'}
        src={url}
        alt={title}
      ></img>
      <div>
        <p className="font-semibold line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}

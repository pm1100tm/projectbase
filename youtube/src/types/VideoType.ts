import SnippetType from './SnippetType';

type VideoType = {
  kind: string;
  etag: string;
  id: string;
  snippet: SnippetType;
};

export default VideoType;

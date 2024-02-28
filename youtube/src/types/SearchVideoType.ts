import SnippetType from './SnippetType';

type SearchVideoType = {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: SnippetType;
};

export default SearchVideoType;

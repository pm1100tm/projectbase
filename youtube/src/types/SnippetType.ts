import ThumbnailKindType from './ThumbnailKindType';

type SnippetType = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: ThumbnailKindType;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
};

export default SnippetType;

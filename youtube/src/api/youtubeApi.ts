import { AxiosResponse } from 'axios';

import YoutubeApiFake from './youtubeApiFake';
import YoutubeApiReal from './youtubeApiReal';

import VideoType from '../types/VideoType';
import SearchVideoType from '../types/SearchVideoType';

export default class YoutubeApi {
  apiClient: YoutubeApiReal | YoutubeApiFake;

  constructor(apiClient: YoutubeApiReal | YoutubeApiFake) {
    this.apiClient = apiClient;
  }

  async search(
    keyword: string = '',
    channelId: string = '',
  ): Promise<VideoType[]> {
    return keyword || channelId
      ? this.searchByKeyword(keyword, channelId)
      : this.mostPopular();
  }

  private async searchByKeyword(
    keyword: string = '',
    channelId: string = '',
  ): Promise<VideoType[]> {
    return this.apiClient
      .search({
        part: 'snippet',
        maxResults: 25,
        q: keyword,
        channelId: channelId,
      })
      .then((res: AxiosResponse) =>
        res.data.items.map((item: SearchVideoType) => ({
          ...item,
          id: item.id.videoId,
        })),
      );
  }

  private async mostPopular(): Promise<VideoType[]> {
    return this.apiClient
      .videos({
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      })
      .then((res) => res.data.items);
  }

  async channelThumbnailUrl(channelId: string = ''): Promise<string> {
    return this.apiClient
      .channelThumbnailUrl({
        part: 'snippet',
        channelId,
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }
}

import axios, { AxiosResponse } from 'axios';

type SearchParamType = {
  part: string;
  maxResults: 25;
  q: string;
  channelId: string;
};

export default class YoutubeApiFake {
  async search(param: SearchParamType): Promise<AxiosResponse> {
    console.log(`fake-search-${param.channelId}: 'search' :'related'`);
    return !param.channelId
      ? axios.get('/data/search.json')
      : axios.get('/data/related.json');
  }

  async videos(): Promise<AxiosResponse> {
    console.log('fake-videos');
    return axios.get('/data/popular.json');
  }

  async channelThumbnailUrl(): Promise<AxiosResponse> {
    console.log('fake-channels');
    return axios.get('/data/channels.json');
  }
}

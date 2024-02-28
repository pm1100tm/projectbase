import axios, { AxiosInstance, AxiosResponse } from 'axios';

type SearchParamType = {
  part: string;
  maxResults: 25;
  q: string;
  channelId: string;
};

type VideosParamType = {
  part: string;
  chart: string;
  maxResults: number;
};

type channelsParamType = {
  part: string;
  channelId: string;
};

export default class YoutubeApiReal {
  httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: { key: import.meta.env.VITE_API_KEY_YOUTUBE },
    });
  }

  async search(params: SearchParamType): Promise<AxiosResponse> {
    return this.httpClient.get('search', { params });
  }

  async videos(params: VideosParamType): Promise<AxiosResponse> {
    return this.httpClient.get('videos', { params });
  }

  async channelThumbnailUrl(params: channelsParamType) {
    return this.httpClient.get('channels', { params });
  }
}

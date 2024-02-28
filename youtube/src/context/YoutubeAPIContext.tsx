import { createContext } from 'react';
import YoutubeApi from '../api/youtubeApi';
import YoutubeApiFake from '../api/youtubeApiFake';
// import YoutubeApiReal from '../api/youtubeApiReal';

type YoutubeApiContextType = {
  youtube: YoutubeApi;
};

export const YoutubeApiContext = createContext<
  YoutubeApiContextType | undefined
>(undefined);

const client = new YoutubeApiFake();
// const client = new YoutubeApiReal();
const youtube = new YoutubeApi(client);

type YoutubeApiProviderProps = {
  children: React.ReactNode;
};

export function YoutubeApiProvider({ children }: YoutubeApiProviderProps) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

import { useContext } from 'react';
import { YoutubeApiContext } from '../context/YoutubeAPIContext';

export default function useYoutubeApi() {
  const context = useContext(YoutubeApiContext);
  if (!context) {
    throw new Error('useYoutubeApi must be used within a YoutubeApiProvider');
  }
  return context;
}

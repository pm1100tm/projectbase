import { v4 as uuidv4 } from 'uuid';

export function makeUniqueVideoId(videoId: string) {
  return `${videoId}-${uuidv4()}`;
}

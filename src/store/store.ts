import {map} from 'nanostores';

type Progress = {
  mediaId: Media['id'];
  /** Seconds for video or `y` position of scroll text */
  progress: number;
};

const initialState: Progress = {
  mediaId: -1,
  progress: 0,
};

export const progressStore = map<Progress>(initialState);

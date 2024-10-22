export type ChapterEvent = {
  eventDataReference: string;
  turnBasedEvents?: string;
  characterBasedEvents?: string;
  locationBasedEvents?: string;
  miscBasedEvents?: string; // no need to add "CauseGameOverIfLordDies", that's always included
  trapData?: string;
  units?: string;
  beginningScene?: string;
  endingScene?: string;
  unitLoadData?: string[];
  text?: string;
};


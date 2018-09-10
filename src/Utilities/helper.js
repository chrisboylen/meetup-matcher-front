import moment from 'react-moment';

export const cleanMeetupData = (fetchedMeetup) => {
  const cleanMeetup = {
    name: fetchedMeetup.group,
    website: fetchedMeetup.event_url,
    description: fetchedMeetup.description
  };
  return cleanMeetup;
};
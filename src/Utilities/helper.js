import moment from 'react-moment'

export const cleanMeetupData = (fetchedMeetup) => {
  const cleanMeetup = {
    name: fetchedMeetup.name,
    website: fetchedMeetup.event_url,
    location: fetchedMeetup.venue.name,
    description: fetchedMeetup.description
  };
  return cleanMeetup;
};
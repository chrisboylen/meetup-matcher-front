import moment from 'react-moment';

export const cleanMeetupData = (fetchedMeetup) => {
  const cleanMeetup = {
    name: fetchedMeetup.group,
    website: fetchedMeetup.event_url,
    description: fetchedMeetup.description
  };
  return cleanMeetup;
};

export const cleanUserInfo = (userInfo) => ({
  username: userInfo.displayName,
  email: userInfo.email,
  userId: userInfo.uid
});
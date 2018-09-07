import { API_KEY } from '../key';
import { cleanMeetupData } from './helper'; 

export const fetchPopularMeetups = async (city, state) => {
  const url = `https://api.meetup.com/2/open_events?key=${API_KEY}&sign=true&photo-host=public&country=us&city=${city}&state=${state}&page=16`;
  
  try {
    const response = await fetch(url);
    const meetupData = await response.json();
    console.log(meetupData);
    const cleanedMeetupData = await meetupData.results.map(meetup => {
      return cleanMeetupData(meetup)
    });

    return cleanedMeetupData;
  } catch (error) {
    console.log(error.message)
  }
};


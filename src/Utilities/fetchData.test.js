import { shallow } from 'enzyme';
import { fetchPopularMeetups } from './fetchData';
import { cleanMeetupData } from './helper';
import { mockMeetups, cleanMeetup } from './mockData';
import { API_KEY } from '../key';

describe('fetchPopularMeetups', () => {
  let url;
  let city;
  let state;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve( mockMeetups )
    }));
    city = 'denver';
    state = 'co';
    url = `https://api.meetup.com/2/open_events?key=${API_KEY}&sign=true&photo-host=public&country=us&city=${city}&state=${state}&page=16`;
  });

  it('should be invoked with the correct params', async () => {
    await fetchPopularMeetups(city, state);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });
  it('should return an object if status code is ok', async () => {
    const expected = cleanMeetup;
    const result = await fetchPopularMeetups(city, state);

    expect(result).toEqual(expected);
  });
  it('should throw an error when status code is not ok', async () => {
    const error = 'Error getting meetups.';
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.reject(error)
    }));
    const result = await fetchPopularMeetups();

    expect(result).toEqual(error);
  });
});
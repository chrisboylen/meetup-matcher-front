import { shallow } from 'enzyme';
import { fetchPopularMeetups } from './fetchData';
import { API_KEY } from '../key';

describe('fetchPopularMeetups', () => {
  let url;
  let city;
  let state;

  beforeEach(() => {
    window.fetch =jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({name: 'bingo'})
    }));
    city = 'denver';
    state = 'co';
    url = `https://api.meetup.com/2/open_events?key=${API_KEY}&sign=true&photo-host=public&country=us&city=${city}&state=${state}&page=16`;
  });

  it('should be invoked with the correct params', async () => {
    await fetchPopularMeetups(city, state);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });
});
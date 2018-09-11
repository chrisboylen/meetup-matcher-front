import { cleanMeetupData } from './helper';

describe('cleanMeetupData', () => {
  it('should return a cleanMeetup object', () => {
    const bingoMeetup = {
      otherstuff: 'ghghg',
      otherstuff2: 'gjgjgj',
      otherstuff3: 'klklklk',
      group: 'bingo',
      event_url: 'website',
      description: 'good bingo'
    };
    const expected = {
      name: 'bingo',
      website: 'website',
      description: 'good bingo'
    };
    const result = cleanMeetupData(bingoMeetup);

    expect(result).toEqual(expected);
  });
});
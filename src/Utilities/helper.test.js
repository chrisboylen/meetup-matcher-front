import { cleanMeetupData, cleanUserInfo } from './helper';

describe('cleanMeetupData', () => {
  it('should return a cleanMeetup object', () => {
    const bingoMeetup = {
      otherstuff: 'ghghg',
      otherstuff2: 'gjgjgj',
      otherstuff3: 'klklklk',
      group: 'bingo',
      event_url: 'website',
      description: 'good bingo',
      name: 'description',
      group: {who: 'who'},
      photo_url: 'image'
    };
    const expected = {
      name: {"who": "who"},
      website: 'website',
      description: 'description',
      who: 'who',
      image: 'image'
    };
    const result = cleanMeetupData(bingoMeetup);

    expect(result).toEqual(expected);
  });
});
describe('cleanUserInfo', () => {
  it('should return a clean userInfo object', () => {
    const firstUser = {
      otherstuff: 'ghghg',
      otherstuff2: 'gjgjgj',
      otherstuff3: 'klklklk',
      userName: 'tim',
      email: 'tim@gmail.com',
      userId: 2,
      questions: [{hiking: true}]
    };
    const expected = {
      username: 'tim',
      email: 'tim@gmail.com',
      userId: 2,
      questions: [{hiking: true}] 
    };
    const result = cleanUserInfo(firstUser);

    expect(result).toEqual(expected);
  });
  it('should return a clean userInfo object without questions', () => {
    const firstUser = {
      otherstuff: 'ghghg',
      otherstuff2: 'gjgjgj',
      otherstuff3: 'klklklk',
      userName: 'tim',
      email: 'tim@gmail.com',
      userId: 2
    };
    const expected = {
      username: 'tim',
      email: 'tim@gmail.com',
      userId: 2,
      questions: []
    };
    const result = cleanUserInfo(firstUser);

    expect(result).toEqual(expected);
  });
});

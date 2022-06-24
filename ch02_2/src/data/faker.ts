import faker from 'faker';
import * as U from './util';

export const randomId = () : string => faker.random.uuid();
export const randomName = () : string => faker.name.findName();
export const randomEmail = () : string => faker.internet.email();
export const randomAvatarUrl = (name?: string) : string =>
    // ?? = null operator : 변수 name이 null 이면 뒤에 randomName 함수를 실행하렴
    U.avatarUriByName(name ?? randomName());
export const randomDate = () : Date => faker.date.recent();
export const randomParagraphs = (count: number = 2): string =>
    U.makeArray(count).map(faker.lorem.paragraph).join('\n');
export const randomImage = () : string =>
    U.unsplashUrl(U.random(800,1000),U.random(800,1000));


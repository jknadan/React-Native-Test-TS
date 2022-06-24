// 데이터가 들어갈 배열 생성
export const makeArray = (length: number) => new Array(length).fill(null);
// 지정 범위의 랜덤 숫자를 생성할 때 사용 (최대:최소)
export const random = (min: number, max: number) : number =>
    Math.round(Math.random()*(max-min)) + min;
// 이미지 제공 사이트인 unsplash 에서 특정 크기의 이미지(width height)를 랜덤하게 얻고자 할때 사용
export const unsplashUrl = (width: number, height: number) : string =>
    `https://source.unsplash.com/random/${width}x${height}`;
// 이름 지정 시 아바타 이미지를 제공하는 무료 API 사이트 연결 => 이미지 가져오기
export const avatarUriByName = (name: string) =>
    `https://ui-avatars.com/api/?name=${name.split(' ').join('+')}`;

// 여기서 지정한 기능을 갖고 faker.ts 에서 데이터 생성

const dummyData = {
  id: 1, // 게시물의 id
  is_updated: true,
  created_at: '2022.10.17',
  updated_at: '2022.10.17',
  tag_set: ['운동', '데드리프트', '광배근', '승모근', '대둔근'],
  playlist: {
    id: 1, // 변경 : 플레이리스트의 id
    title: '등운동 할 때',
    thumbnail_img_url: 'thumbnails/2022/10/17/육회.jpeg',
    total_url: 'http://gdsanadev.com',
    track_name: [],
    genre_name: 'k-pop',
    is_scrapped: true, // 변경 : 현재 로그인한 사람이 이 게시물을 스크랩했는가?
    scrapper_count: 1, // 변경 : 이 플레이리스트를 스크랩한 사람의 수는 몇 명인가?
  },
  liker_count: 0,
  title: '이거 원알엠 잴 때 들으면 좋아요!',
  content: '진짜임..!',
  is_like: false,
  author: 'plinic',
};

export default dummyData;

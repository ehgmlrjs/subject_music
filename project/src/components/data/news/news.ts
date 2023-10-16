interface ArticleItem {
    index: string;
    leftTitle : string;
    rightTitle : string;
    rightContent : string;
}

interface AlbumItem {
    index : string;
    albumImg : string;
    albumTitle : string;
    albumDate : string;
}

export const ARTICLE_DATA : ArticleItem[] =[
    {
        index : '0',
        leftTitle : '아이유 15주년 리뷰',
        rightTitle : '아이유 15주년 리뷰',
        rightContent : '이번 카드 뉴스에서는 아이유 데뷔 15주년을 맞아 그동안 그녀가 써클차트에 남긴 흔적들을 리뷰해 보도록 하겠습니다.  2010년 써클차트 집계 이후 지금까지 아이유는 총 56회 주간 디지털차트 1위(콜라보 포함)에 올랐으며 1위에 오른 노래는 모두 26곡으로 조사되었습니다. 1위에 오른 곡 중 6곡은-Blueming-밤편..',
    },{
        index : '1',
        leftTitle : '피지컬 앨범 판매량 전년대비 이미 98% 수준!',
        rightTitle : '피지컬 앨범 판매량 전년대비 ..',
        rightContent : '2023년 8월 TOP400 가수별 써클지수 점유율 조사에서 NewJeans가 400위권 내 총 13곡을 올려놓으며 (합산)점유율 11.1%로 1위에 올랐습니다.  2023년 8월 음원 이용량400(1위부터 400위까지 이용량 합계)이 지난달 대비 3.6% 감소, 전년 동기에 비해서 14.7% 감소했습니다.  2023년 ..',
    },{
        index : '2',
        leftTitle : 'NewJeans 음원 점유율 1위 탈환! 월간 피지컬 최대 판매 경신!',
        rightTitle : 'NewJeans 음원 점유율 ..',
        rightContent : '2023년 7월 TOP400 가수별 써클지수 점유율 조사에서 NewJeans가 400위권 내 총 13곡을 올려놓으며 (합산)점유율 8.6%로 1위에 올랐습니다. 2023년 7월 음원 이용량400(1위부터 400위까지 이용량 합계)이 지난달 대비 2.1% 감소, 전년 동기에 비해서 9.3% 감소했습니다. 2023년 7월 앨..',
    },{
        index : '3',
        leftTitle : '2023 K-POP은 정말 성장하고 있을까?',
        rightTitle : '2023 K-POP은 정말 성..',
        rightContent : '최근 세븐틴의 과거 발매 앨범 판매가 급증하는 등 케이팝 시장에서 구보 판매량이 다시 증가하고 있습니다. 케이팝 시장에 신규 팬덤이 유입될 경우, 구보 판매량이 동반해 증가하는 일종의 Backward spillover 현상이 주로 관찰되는데, 이번 카드 뉴스에서는 피지컬 앨범 수출 데이터와 구보 판매량을..',
    }
]

export const ALBUM_DATA1 : AlbumItem [] = [
    {
        index : '0',
        albumImg : 'https://circlechart.kr/upload_images/article/202310/F231E050E0715F1B5EC1CF6CED228CC2.jpg',
        albumTitle : '양다일, 오늘(12일) 내가 할..',
        albumDate : '2023-10-12',
    },{
        index : '1',
        albumImg : 'https://circlechart.kr/upload_images/article/202310/76082CDF77C00F3C497D7E0C75C4E57E.jpg',
        albumTitle : '빅마마, 오늘(10일) 행복한..',
        albumDate : '2023-10-10',
    },{
        index : '2',
        albumImg : 'https://circlechart.kr/upload_images/article/202310/DEDE236D882A032160C997C32F38FCC0.jpg',
        albumTitle : '90만 음악 크리에이터 민리, 첫..',
        albumDate : '2023-10-10',
    },{
        index : '3',
        albumImg : 'https://circlechart.kr/upload_images/article/202310/89DD282994C6B9A0CFCB1CF26BAD0D27.jpg',
        albumTitle : 'AI+휴먼 슈퍼카인드, 18일..',
        albumDate : '2023-10-06',
    }
]

export const ALBUM_DATA2 : AlbumItem [] = [
    {
        index : '0',
        albumImg : 'https://circlechart.kr/upload_images/article/202310/22E0D283F576184FB555FD0779A126F4.jpg',
        albumTitle : '골든차일드, 11월 2일 새 싱글..',
        albumDate : '2023-10-16',
    }, {
        index : '1',
        albumImg : 'https://circlechart.kr/upload_images/article/202310/57D295CAF883313A9067087408722316.jpg',
        albumTitle : '미스터트롯2 TOP3 진해성...',
        albumDate : '2023-10-13',
    },{
        index : '2',
        albumImg : 'https://circlechart.kr/upload_images/article/202310/354ADA4F692BD71FDB67FA2552491F31.jpg',
        albumTitle : '아스트로 진진, 19일 프로젝트..',
        albumDate : '2023-10-13',
    },{
        index : '3',
        albumImg : 'https://circlechart.kr/upload_images/article/202310/0CCDED8255ED7725E30874750F5A6449.jpg',
        albumTitle : '2am, 오늘 (12일) 신곡 너...',
        albumDate : '2023-10-12',
    }
]
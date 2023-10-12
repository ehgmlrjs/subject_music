interface ChartItem {
    index: string;
    title: string;
    img: string;
}

interface HotItem {
    index: string,
    img : string,
    sing : string,
    author : string
}

interface PopItem {
    index: string,
    img : string,
    sing : string,
    author : string
}

export const DUMMY_DATA: ChartItem[] = [
    {
        index: '0',
        title: 'Ballad',
        img : '/img/chart/ballad.jpg'
    },{
        index: '1',
        title: 'Dance',
        img : '/img/chart/dance.jpg'
    },{
        index: '2',
        title: 'Hippop',
        img : '/img/chart/hippop.jpg'
    },{
        index : '3',
        title : 'RB',
        img : '/img/chart/r&b.jpg'
    },{
        index : '4',
        title : 'Indi',
        img : '/img/chart/indi.jpg'
    },{
        index : '5',
        title : 'Rock',
        img : '/img/chart/rock.jpg'
    }
]

export const HOT_DATA : HotItem[] = [
    {
        index : '0',
        img : '/img/chart/hot1.jpg',
        sing : 'Love Lee',
        author : 'AKMU(악뮤)'
    },{
        index : '1',
        img : '/img/chart/hot1.jpg',
        sing : '후라이의 꿈',
        author : 'AKMU(악뮤)'
    },{
        index : '2',
        img : '/img/chart/hot3.jpg',
        sing : 'You & Me',
        author : '제니 (JENNIE)'
    },{
        index : '3',
        img : '/img/chart/hot4.jpg',
        sing : 'Seven (feat.Latto) - Clean Ver.',
        author : '정국'
    },{
        index : '4',
        img : '/img/chart/hot5.jpg',
        sing : 'Super Shy',
        author : 'NewJeans'
    }
]

export const POP_DATA: PopItem[] = [
    {
        index : '0',
        img : '/img/chart/pop1.jpg',
        sing : 'Steal The Show',
        author : 'Lauv'
    },{
        index : '1',
        img : '/img/chart/pop2.jpg',
        sing : 'I Dont Think That I Like Her',
        author : 'Charlie Puth'
    },{
        index : '2',
        img : '/img/chart/pop3.jpg',
        sing : 'Dangerously',
        author : 'Charlie Puth'
    },{
        index : '3',
        img : '/img/chart/pop4.jpg',
        sing : 'STAY',
        author : 'The Kid LAROI, Justin Bieber'
    },{
        index : '4',
        img : '/img/chart/pop5.jpg',
        sing : 'Dreamers',
        author : '정국'
    }
]
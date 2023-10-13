export interface IChartGenrePageProps {
    genre : string;
    handlePageChange : (page:number) => void;
    nowData : Song[];
}

interface Song {
    Index: number;
    name : string;
    singer : string;
    album : string;
    day : string;
    genre : string;
    image : string;
    lyrics : string;
}
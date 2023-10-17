export interface IContentsPageUIProps {
    inputData : Song[];
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


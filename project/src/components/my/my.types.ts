export interface IMyPageUIProps {
    localNick : string;
    data : Song [];
}

interface Song {
    Index : number;
    album : string;
    day : string;
    genre : string;
    image : string;
    lyrics : string;
    name : string;
    singer : string;
}
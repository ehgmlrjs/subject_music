import { ChangeEvent } from "react";

export interface IContentsPageUIProps {
    inputData : Song[];
    onChangeComment : (event:ChangeEvent<HTMLInputElement>) => void;
    onClickSubmit : () => void;
    boardData : Board[];
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

interface Board {
    Index : number;
    comment : string;
    nickname : string;
}
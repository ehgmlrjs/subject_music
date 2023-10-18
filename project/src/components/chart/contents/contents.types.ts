import { ChangeEvent } from "react";

export interface IContentsPageUIProps {
    inputData : Song[];
    onChangeComment : (event:ChangeEvent<HTMLInputElement>) => void;
    onClickSubmit : () => void;
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


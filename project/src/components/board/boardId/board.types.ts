import { ChangeEvent } from "react";

export interface BoardIdPageUIProps {
    onChangeRate : (value: number) => void;
    onClickList : () => void;
    data : Data[];
    onChangeContent : (event:ChangeEvent<HTMLTextAreaElement>) => void;
    onClickSubmitContent : () => void;
    content : string;
    chatData : ChatData[];
}

interface Data {
    address1 : string;
    address2 : string;
    address3 : string;
    board_date : string;
    content : string;
    id : number;
    like : number;
    nickname : string;
    title : string;
}

interface ChatData {
    id : number;
    nickname : string;
    content : string;
    chat_date : string;
    star : number;
}
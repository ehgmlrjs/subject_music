import { ChangeEvent } from "react";

export interface IBoardPageUIProps {
    onClickBoardWrite : () => void;
    onChangeSearch : (event:ChangeEvent<HTMLInputElement>) => void;
    onClickSearch : () => void;
    handlePageChange : (page: number) => void;
    data : Data[];
    nowData : Data[];
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
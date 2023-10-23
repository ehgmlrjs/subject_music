export interface IBoardIdDetailPageProps{
    chatData : {
        chat_date : string;
        content : string;
        id : number;
        nickname : string;
        star : number;
    }
}

export interface IBoardIdDetailPageUIProps{
    chatData : {
        chat_date : string;
        content : string;
        id : number;
        nickname : string;
        star : number;
    }
    onClickDelete : () => void;
}
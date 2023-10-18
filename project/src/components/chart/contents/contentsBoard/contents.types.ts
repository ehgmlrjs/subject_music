export interface IContentsBoardPageUIProps {
    localNick : string;
    onClickBoardDelete : () => void;
    data : {
        Index : number;
        comment : string;
        nickname : string;
    }
}

export interface IContentsBoardPageProps {
    data : {
        Index : number;
        comment : string;
        nickname : string;
    }
    
}
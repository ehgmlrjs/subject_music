export interface IBoardDetailPageProps {
    data : {
        address1 : string;
        address2 : string;
        address3 : string;
        board_date : string;
        content : string;
        id : number;
        like : number;
        nickname : string;
        title : string;
    };
}

export interface IBoardDetailPageUIProps {
    data : {
        address1 : string;
        address2 : string;
        address3 : string;
        board_date : string;
        content : string;
        id : number;
        like : number;
        nickname : string;
        title : string;
    };

    onClickMoveId : () => void;
}
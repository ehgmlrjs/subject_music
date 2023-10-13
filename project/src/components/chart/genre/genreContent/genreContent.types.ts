export interface genreContentPageProps {
    data: {
        Index : number;
        album : string;
        day : string;
        genre : string;
        lyrics : string;
        name : string;
        singer : string;
        image : string
    }
}

export interface genreContentPageUIProps {
    data: {
        Index : number;
        album : string;
        day : string;
        genre : string;
        lyrics : string;
        name : string;
        singer : string;
        image : string;
    }

    onClickIcon : () => void;
}
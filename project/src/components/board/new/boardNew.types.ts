import { ChangeEvent } from "react";

export interface IBoardNewPageUIProps {
    isOpen : boolean;
    handleComplete : (data:any) => void; 
    onToggleModal : () => void;
    q1 : string;
    q3 : string;
    isEdit : boolean;
    onClickSubmit : () => void;
    onChangeDetailadress : (event:ChangeEvent<HTMLTextAreaElement>) => void;
    onChangeTitle : (event:ChangeEvent<HTMLTextAreaElement>) => void;
    onChangecontent :  (event:ChangeEvent<HTMLTextAreaElement>) => void;
    onClickSubmitEdit : () => void;
}

export interface IBOardNewPageProps {
    isEdit : boolean;
}
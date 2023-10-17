import { ChangeEvent } from "react";

export interface IBoardNewPageUIProps {
    isOpen : boolean;
    handleComplete : (data:any) => void; 
    onToggleModal : () => void;
    q1 : string;
    q3 : string;
    isEdit : boolean;
    onChangeDetailadress : (event:ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface IBOardNewPageProps {
    isEdit : boolean;
}
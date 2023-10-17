export interface IBoardNewPageUIProps {
    isOpen : boolean;
    handleComplete : (data:any) => void; 
    onToggleModal : () => void;
    q1 : string;
    q3 : string;
    isEdit : boolean;
}

export interface IBOardNewPageProps {
    isEdit : boolean;
}
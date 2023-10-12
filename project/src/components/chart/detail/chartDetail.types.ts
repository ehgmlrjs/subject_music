export interface IChartDetailProps {
    data: {
        index : string;
        title : string;
        img : string;
    };
}

export interface IChartDetailUIProps {
    data: {
        index : string;
        title : string;
        img : string;
    };

    handleImageClick : () => void;
}
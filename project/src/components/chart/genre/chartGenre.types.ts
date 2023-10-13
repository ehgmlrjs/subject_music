export interface IChartGenrePageProps {
    genre : string;
    handlePageChange : (page:number) => void;
    onClickIcon : () => void;
}
import ChartDetailPageUI from "./chartDetail.presenter";
import { IChartDetailProps } from "./chartDetail.types";

export default function ChartDetailPage(props:IChartDetailProps) {

    return (
        <ChartDetailPageUI
           data = {props.data}
         />
    )
}
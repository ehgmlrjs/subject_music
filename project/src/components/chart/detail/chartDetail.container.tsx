import { useRouter } from "next/router";
import ChartDetailPageUI from "./chartDetail.presenter";
import { IChartDetailProps } from "./chartDetail.types";

export default function ChartDetailPage(props:IChartDetailProps) {
    const router = useRouter();

    const handleImageClick = () => {
        router.push(`/chart/${props.data.title}`);
    }

    return (
        <ChartDetailPageUI
           data = {props.data}
           handleImageClick = {handleImageClick}
         />
    )
}
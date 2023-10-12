import { useRouter } from "next/router";
import ChartPageUI from "./chart.presenter";

export default function ChartPage() {
    const router = useRouter();

    const onClickPlus = ()=> {
        router.push('/chart/pop')
    }

    return (
        <ChartPageUI
            onClickPlus = {onClickPlus}
         />
    )
}
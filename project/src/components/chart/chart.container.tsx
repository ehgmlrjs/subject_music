import { useRouter } from "next/router";
import ChartPageUI from "./chart.presenter";
import {useRecoilState} from 'recoil';
import { genreState } from "@/src/store/states";

export default function ChartPage() {
    const router = useRouter();

    const [localGenre, setLocalGenre] = useRecoilState(genreState);

    const onClickPlusPop = ()=> {
        setLocalGenre('pop')
        localStorage.setItem('genre','pop')
        router.push('/chart/pop')
    }

    const onClickPlusHot = ()=> {
        setLocalGenre('hot')
        localStorage.setItem('genre','hot')
        router.push('/chart/hot')
    }

    return (
        <ChartPageUI
            onClickPlusPop = {onClickPlusPop}
            onClickPlusHot = {onClickPlusHot}
         />
    )
}
import GenreContentPageUI from "./genreContent.presenter";
import { genreContentPageProps } from "./genreContent.types";
import { useRouter } from "next/router";
import {useRecoilState} from 'recoil';
import { indexState } from "@/src/store/states";

export default function GenreContentPage(props:genreContentPageProps):JSX.Element {
    const router = useRouter();

    const [localIndex, setLocalIndex] = useRecoilState(indexState)

    // Index localstorage저장
    const onClickIcon = () => {
        setLocalIndex(props.data.Index)
        localStorage.setItem('index', props.data.Index.toString())
        console.log(props.data.Index)
        router.push(`/contents/${props.data.Index}`)
    }

    return (
        <GenreContentPageUI
            data = {props.data}
            onClickIcon = {onClickIcon}
         />
    )
}
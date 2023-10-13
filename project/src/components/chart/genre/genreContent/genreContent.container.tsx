import GenreContentPageUI from "./genreContent.presenter";
import { genreContentPageProps } from "./genreContent.types";
import { useRouter } from "next/router";

export default function GenreContentPage(props:genreContentPageProps):JSX.Element {
    const router = useRouter();

    const onClickIcon = () => {
        router.push(`/contents/${props.data.Index}`)
    }

    return (
        <GenreContentPageUI
            data = {props.data}
            onClickIcon = {onClickIcon}
         />
    )
}
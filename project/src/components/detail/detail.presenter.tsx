import { IDetailUIProps } from "./detail.types";

export default function DetailPageUI(props:IDetailUIProps) {
    return(
        <button onClick={props.onClickRouter}>라우팅 체크</button>
    )
}
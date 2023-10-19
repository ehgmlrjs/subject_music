import MyPageUI from "./my.presenter";
import { useRecoilState } from "recoil";
import { nickState } from "@/src/store/states";

export default function MyPage() {
    const [localNick, setLocalNick] = useRecoilState(nickState)

    return(
        <MyPageUI
            localNick = {localNick}
         />
    )
}
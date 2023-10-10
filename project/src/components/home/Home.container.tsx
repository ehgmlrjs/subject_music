import { useRouter } from "next/router"
import HomePageUI from "./Home.presenter"

export default function HomePage():JSX.Element {
    const router = useRouter();

    const onClickLogin = ()=> {
        router.push('/register')
    }

    return(
        <HomePageUI
            onClickLogin = {onClickLogin}
         />
    )
}
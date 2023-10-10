import { useRouter} from 'next/router';
import HeaderPage from "./header/Header.container"

interface ILayoutProps {
    children: JSX.Element
}

const HIDDEN_HEADERS = [
    "/register"
]

export default function Layout(props: ILayoutProps): JSX.Element {
    const router = useRouter();
    console.log(router.asPath)

    const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath) 
    return(
        <>
            {!isHiddenHeader && <HeaderPage />}
            {props.children}
        </>
    )
}
import Head from "next/head"
import NavBar from "./NavBar"

export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            <NavBar />
            {props.children}
        </div>
    )
}

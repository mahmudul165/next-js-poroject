import Head from "next/head"
import Link from "next/link"
export const Layout = ({children}) => {
    return (
        <section>
            <Head><title>my next project</title></Head>
            <header>
                <Link href="/"><a>home</a></Link>
                <Link href="/about"><a>about</a></Link>
                <Link href="/contact"><a>contact</a></Link>
            </header>
             <main>{ children}</main>
            <footer>footer</footer>
        </section>
    )
}

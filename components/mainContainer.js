import Head from 'next/head';
import Link from 'next/link';

function MainContainer({ children, keywords,title }) {
    return (
        <>
            <Head>
                <meta keywords={"слова для роботов " + keywords}></meta>
                <title>{title}</title>
            </Head>
            <div>
                <Link href="/">
                    Главная
                </Link>
                <Link href="/users">
                    Пользователи
                </Link>
            </div>
            <div>
                {children}
            </div>
        </>
    )
}

export default MainContainer;
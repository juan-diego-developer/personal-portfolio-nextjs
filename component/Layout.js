import Navbar from './Navbar'
import {useEffect} from 'react'
import { useRouter } from 'next/dist/client/router'
import nProgress from 'nprogress'

const Layout = ({children}) => {

    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = url => {
            console.log(url)
            nProgress.start()
        }

        router.events.on('routeChangeStart', handleRouteChange)

        router.events.on('routeChangeComplete', () => nProgress.done());

        return () => {
            router.events.off('routeChangeStart',    handleRouteChange)
        }
    }, [])

    return (
        <>
            <Navbar/>

            <main className="container py-4">
                {children}
            </main>

            <footer className="bg-dark text-light text-center">
                <div className="container p-4">
                    <h1>&copy; Juan Diego Tejada Portfolio</h1>
                    <p>2020 - {new Date().getFullYear()}</p>
                    <p>all rigths Reserverd</p>
                </div>
            </footer>

        </>
    )
}

export default Layout;
import styles from '../styles/Layout.module.css'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Meta from '../components/Meta'
export const Layout = ({children}) => {
  return (
    <>
        <Meta />
        <Nav />
        <div className={styles.container}>

            <main className={styles.main}>
                <Header />
                {children}
            </main>

        </div>
    </>

  )
}

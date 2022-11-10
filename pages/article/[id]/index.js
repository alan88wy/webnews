import Link from 'next/link'
// using our api/articles
import { server } from '../../../config/index'
import Meta from '../../../components/Meta'
// import { useRouter } from "next/router"

const article = ( { article } ) => {

    // const router = useRouter()
    // const {id} = router.query

    return (
        <>
            <Meta title={ article.title } description = { article.excerpt } />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </>
    )
}


// Let's use our api


export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article,
        },
    }
}

export const getStaticPaths = async (context) => {

    const res = await fetch(`${server}/api/articles`)

    const articles = await res.json()

    const ids = articles.map(( article ) => article.id)

    const paths = ids.map(( id ) => ({ params: { id: id.toString()}}))

    // return 404 page if data is not found
    return {
            paths,
            fallback: false,
    }
}





// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()

//     return {
//         props: {
//             article
//         }
//     }
// }

// Instead of using GetServerSideProps, we can do the following:

// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()

//     return {
//         props: {
//             article
//         }
//     }
// }

// export const getStaticPaths = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//     const articles = await res.json()

//     const ids = articles.map(article => article.id)

//     const paths = ids.map(id => (
//         {
//             params: {id: id.toString()}
//         }
//     ))

//     return {
//             paths,
//             fallback: false // return 404 page if data is not found

//     }
// }


export default article
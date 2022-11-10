// import Head from 'next/head' - we will use meta
// import Image from 'next/image'
// import Loadcsv from '../components/Loadcsv'
import ArticleList from '../components/ArticleList'
import { server } from '../config/index'

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={ articles }/>
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }

// Since we have create the API for articles, we can use that now
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
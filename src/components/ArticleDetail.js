import { useParams, Link } from 'react-router-dom';
import {useEffect, useState} from 'react'


function ArticleDetail() {

  const params = useParams()
  const [article, setArticle] = useState()

  useEffect( () => {
    async function getArticle() {
      const deslugified = params.slug.replace(/-/g, " ")
      const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&q=${deslugified}&apiKey=${process.env.REACT_APP_API_KEY}`)
      const body = await res.json()
      setArticle(body.articles[0])
    }
    getArticle()
  }, [params])

  const createArticle = () => {
    return (
    <>
      <h2>{article.title}</h2>
      <h3>{article.author}</h3>
      <Link to={article.url}>{article.url}</Link>
    </>

    )
  }


  return ( 
    <>
      <h2>Article Detail</h2>
      {article && createArticle()}
    </>
   );
}

export default ArticleDetail;
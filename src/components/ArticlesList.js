import { useEffect, useState } from "react";
import Teaser from "./Teaser";

function ArticlesList(props) {

  const [articles, setArticles] = useState([])

  useEffect( () => {
    async function getArticles() {
      const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`)
      const body = await res.json()
      setArticles(body.articles)
    }
    getArticles()
  }, [])

  const createArticleTeasers = () => {
    return articles.map( a => <Teaser author={a.author} title={a.title} slug={a.title.replace(/\W/g, "-")}/>)
  }


  return ( 
    <>
      <h2>Articles List</h2>
      {createArticleTeasers()}
    </>
   );
}

export default ArticlesList;
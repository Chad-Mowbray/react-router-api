import { Link } from 'react-router-dom'

function Teaser({title, author, slug}) {

  return ( 
    <>
      <Link to={slug}>{title}</Link>
      <p>{author}</p>
    </>
   );
}

export default Teaser;
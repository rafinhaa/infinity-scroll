import {useState,useEffect} from 'react'

export default function Home() {
  const [followers,setFollowers] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [currentUser,setCurrentUser] = useState('rafinhaa');
  const [search,setSearch] = useState('');
  useEffect(() => {
    const PER_PAGE = 10;    
    const URL_CONFIG = `?per_page=${PER_PAGE}&page=${currentPage}&order=desc`
    
    const URL = `https://api.github.com/users/${currentUser}/followers${URL_CONFIG}`
    
    fetch(URL)
      .then((response) => {
        return response.json()
      })
      .then((newFollowers) => setFollowers( (prevFollowers) => [...prevFollowers, ...newFollowers] ))     
  
  },[currentPage])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if(entries.some(entry => entry.isIntersecting)){
        console.log('Elemento apareceu', currentPage + 1);
        setCurrentPage( (currentPageInState) => currentPageInState + 1 );
      }
    });  
    intersectionObserver.observe(document.querySelector('#sentinela'));
    return () => intersectionObserver.disconnect();
  },[]);
 
  function handleNewSearch(event){
    event.preventDefault();
    setCurrentUser(search);
    setFollowers([]);
    setCurrentPage(1);
  }

  return (
    <main>
      <h1>GitHub API: infinite Scroller</h1>
      <form onSubmit={handleNewSearch}>
        <input type="text" value={search} onChange={ (event) => setSearch(event.target.value)} placeholder="Github username" />
        <input type="submit"/>
      </form>
      <h2>Página atual: {currentPage}</h2>

      <ul id="followers">
        {followers.map((follower) => (
          <li key={follower.id}>
            <div>
              <img src={`https://github.com/${follower.login}.png`} />
              <p>github.com/<strong>{follower.login}</strong></p>
            </div>
          </li>                  
        ))}
        <li id="sentinela"></li>
      </ul>
    </main>
  )
}

import { useState } from 'react'
import './App.css'
import profilePic from './assets/hero.png'

const links = [
  { title: 'ESPN NBA', url: 'https://www.espn.com/nba/', description: 'Latest NBA news, scores, and highlights' },
  { title: 'NBA.com', url: 'https://www.nba.com/', description: 'Official site of the National Basketball Association' },
  { title: 'Seattle Met - Best Coffee Shops', url: 'https://www.seattlemet.com/eat-and-drink/best-coffee-shops-seattle', description: 'A guide to the best coffee spots in Seattle' },
  { title: 'Yelp - Seattle Coffee', url: 'https://www.yelp.com/search?find_desc=coffee&find_loc=Seattle%2C+WA', description: 'Top-rated coffee shops in Seattle on Yelp' },
  { title: 'Riot Games', url: 'https://www.riotgames.com/', description: 'Home of League of Legends and Valorant' },
  { title: 'PlayOverwatch', url: 'https://playoverwatch.com/', description: 'Official Overwatch site from Blizzard' },
  { title: 'Fandango - Now Playing', url: 'https://www.fandango.com/movies-in-theaters', description: 'See what movies are currently in theaters near you' },
  { title: 'IMDb - Coming Soon', url: 'https://www.imdb.com/calendar/', description: 'Upcoming movie releases and release dates' },
  { title: "Sally's Baking Addiction", url: 'https://sallysbakingaddiction.com/', description: 'Amazing cookie and brownie recipes' },
  { title: 'King Arthur Baking', url: 'https://www.kingarthurbaking.com/', description: 'Trusted baking recipes and techniques' },
]

function Nav({ page, setPage }) {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <button
        className={`nav-btn ${page === 'home' ? 'active' : ''}`}
        onClick={() => setPage('home')}
        accessKey="1"
        aria-current={page === 'home' ? 'page' : undefined}
      >
        Home
      </button>
      <button
        className={`nav-btn ${page === 'reads' ? 'active' : ''}`}
        onClick={() => setPage('reads')}
        accessKey="2"
        aria-current={page === 'reads' ? 'page' : undefined}
      >
        Things to Read
      </button>
      <button
        className={`nav-btn ${page === 'keyboard' ? 'active' : ''}`}
        onClick={() => setPage('keyboard')}
        accessKey="3"
        aria-current={page === 'keyboard' ? 'page' : undefined}
      >
        Keyboard Access
      </button>
    </nav>
  )
}

function HomePage() {
  const [games, setGames] = useState([
    'League of Legends',
    'Valorant',
    'Overwatch'
  ])

  const [sortOrder, setSortOrder] = useState('original')

  function sortGames() {
    if (sortOrder === 'original' || sortOrder === 'z-a') {
      const sorted = [...games].sort()
      setGames(sorted)
      setSortOrder('a-z')
    } else {
      const sorted = [...games].sort().reverse()
      setGames(sorted)
      setSortOrder('z-a')
    }
  }

  return (
    <>
      <header className="header">
        <h1>Welcome to Yousuf's Page</h1>
        <p className="subtitle">glad you stopped by!</p>
      </header>

      <section className="about-section">
        <div className="about-content">
          <img src={profilePic} alt="Yousuf" className="profile-pic" />
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hey! I'm Yousuf, a junior studying Computer Science at the University of Washington.
              I'm originally from Egypt, but I grew up in Silver Spring, Maryland and
              moved out here when I was 7. When I'm not coding, you can probably find me
              on a basketball court, a soccer field, or exploring a new coffee shop around Seattle.
            </p>
            <p>
              I'm big into music, mostly rap and R&B, and I enjoy doing movie nights with
              my friends and a bunch of snacks. My go-to snacks are chocolate chip cookies and brownies,
              but not brookies... mixing them together just doesn't work.
            </p>
          </div>
        </div>
      </section>

      <section className="interests-section">
        <h2>Things I Enjoy</h2>
        <ul className="interests-list">
          <li>Playing basketball and soccer</li>
          <li>Listening to rap and R&B</li>
          <li>Exploring new coffee shops</li>
          <li>Movie nights with friends</li>
          <li>Supporting local small brands</li>
          <li>Chocolate chip cookies & brownies (no brookies though)</li>
        </ul>
      </section>

      <section className="games-section">
        <h2>My Favorite Games</h2>
        <button onClick={sortGames} className="sort-btn">
          Sort {sortOrder === 'a-z' ? 'Z-A' : 'A-Z'}
        </button>
        <ol className="games-list">
          {games.map((game, index) => (
            <li key={index}>{game}</li>
          ))}
        </ol>
      </section>
    </>
  )
}

function ReadsPage() {
  return (
    <>
      <header className="header">
        <h1>Things to Read</h1>
        <p className="subtitle">links to stuff I'm into</p>
      </header>

      <section className="reads-section">
        <p className="reads-intro">
          Here are some of my favorite websites. Use <strong>Tab</strong> to move
          between links and <strong>Enter</strong> to open them.
        </p>
        <ul className="reads-list">
          {links.map((link, index) => (
            <li key={index} className="reads-item">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
              <span className="reads-desc"> - {link.description}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

function KeyboardPage() {
  return (
    <>
      <header className="header">
        <h1>Keyboard Access</h1>
        <p className="subtitle">how to navigate this site without a mouse</p>
      </header>

      <section className="keyboard-section">
        <h2>Navigating with a Keyboard</h2>

        <p>
          <strong>Safari users:</strong> Go to Safari &gt; Settings &gt; Advanced and
          enable "Press Tab to highlight each item on a webpage" first.
        </p>

        <p>
          Click anywhere on the page, then use <strong>Tab</strong> to move forward
          through buttons and links, or <strong>Shift + Tab</strong> to go back.
          A gold outline shows what's currently focused.
        </p>

        <p>
          When you first Tab into the page, a "Skip to main content" link appears
          so you can jump past the nav bar.
        </p>

        <h3>Access Keys</h3>
        <p>
          On Mac: <strong>Control + Option + key</strong>. On Windows: <strong>Alt + key</strong>.
        </p>
        <ul className="keyboard-list">
          <li><strong>1</strong> - Home</li>
          <li><strong>2</strong> - Things to Read</li>
          <li><strong>3</strong> - Keyboard Access</li>
        </ul>

        <h3>Design Goals</h3>
        <p>
          I tried to keep keyboard support simple and intuitive. The main things I focused on:
        </p>
        <ul className="keyboard-list">
          <li><strong>Learnability</strong> - Everything uses standard keys (Tab, Shift+Tab) so there's nothing new to learn.</li>
          <li><strong>Efficiency</strong> - Skip-to-content and access keys help you get around faster.</li>
          <li><strong>Visibility</strong> - The focus outline makes it clear where you are at all times.</li>
        </ul>
      </section>
    </>
  )
}

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="page">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Nav page={page} setPage={setPage} />
      <main id="main-content">
        {page === 'home' && <HomePage />}
        {page === 'reads' && <ReadsPage />}
        {page === 'keyboard' && <KeyboardPage />}
      </main>
      <footer className="footer">
        <p>Made by Yousuf | CSS 480 | Spring 2026</p>
      </footer>
    </div>
  )
}

export default App

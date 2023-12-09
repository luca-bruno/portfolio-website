/* eslint-disable jsx-a11y/anchor-is-valid */
import "@/styles/Home.css"
import Link from "next/link"

const Home = () => (
  <main className="home_container">
    <h1 className="home_title slide_fade_from_top">
      LUCA BRUNO
    </h1>

    <h2 className="home_description slide_fade_from_left">
      Mainly front-end, full stack dev
    </h2>

    <h3 className="home_location slide_fade_from_left">
      Based in Malta 🇲🇹
    </h3>

    <div className="home_links slide_fade_from_left">
      <h4>
        Here&apos;s a bit <Link href="about" className="home_link">about me</Link>.
      </h4>
      <h4>
        Like <Link href="projects" className="home_link">my work</Link>?
        <span> <Link href="contact" className="home_link">Get in touch</Link> with me.</span>
      </h4>

    </div>
  </main>
)

export default Home
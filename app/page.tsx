import { HomeTitles, HomeLinks, HomeImage } from "@/components/Home"
import "@/styles/Home/Home.css"

const Home = () => (
  <main className="home_container">
    <div>
      <HomeTitles />
      <HomeLinks />
    </div>

    <HomeImage />
  </main>
)

export default Home

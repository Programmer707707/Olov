import "./home.scss";
import {Navbar, Sidebar, Widgets} from "../../components/index"

const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widgets/>
            <Widgets/>
            <Widgets/>
            <Widgets/>
          </div>
        </div>
    </div>
  )
}

export default Home
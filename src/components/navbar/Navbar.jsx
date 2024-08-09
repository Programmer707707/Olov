import "./navbar.scss";
import { SearchOutlined, DarkModeOutlined, FullscreenExitOutlined, NotificationsOutlined, ChatBubbleOutlineOutlined, ListOutlined, } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search..." />
          <SearchOutlined className="icon" />
        </div>

        <div className="items">
          <div className="item">
            <DarkModeOutlined className="icon" />
          </div>

          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>

          <div className="item">
            <NotificationsOutlined className="icon" />
            <div className="counter">3</div>
          </div>

          <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />
            <div className="counter">3</div>
          </div>

          <div className="item">
            <ListOutlined className="icon" />
          </div>

          <div className="item">
            <img src="" alt="Avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
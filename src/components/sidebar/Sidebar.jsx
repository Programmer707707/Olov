import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SettingsIcon from '@mui/icons-material/Settings';
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Olov</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>

          <p className="title">LISTS</p>
          <li>
            <GroupIcon className="icon" />
            <span>Users</span>
          </li>

          <li>
            <StoreIcon className="icon" />
            <span>Stores</span>
          </li>

          <p className="title">USEFUL</p>
          <li>
            <EqualizerIcon className="icon" />
            <span>Stats</span>
          </li>

          <li>
            <MarkChatUnreadIcon className="icon" />
            <span>Notifications</span>
          </li>

          <p className="title">SERVICE</p>
          <li>
            <HealthAndSafetyIcon className="icon" />
            <span>System Health</span>
          </li>

          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>

          <p className="title">USER</p>
          <li>
            <Person2Icon className="icon" />
            <span>Profile</span>
          </li>

          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Sidebar
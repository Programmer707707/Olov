import { Outlet } from "react-router-dom";
import ".//list.scss";

const List = () => {
  return (
    <div>
      <h2>List</h2>
      <Outlet/>
    </div>

  )
}

export default List
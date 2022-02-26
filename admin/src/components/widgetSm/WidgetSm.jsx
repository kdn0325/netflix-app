import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers ,setNewUsers] = useState([]);

  useEffect(()=>{
    const getNewUsers = async ()=>{
      try{
        const res = axios.get("/users?new=true", 
        {
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTlkMzBkNDkzNGY2ZThlMTRjODcyZCIsImlzQWRtaW4iOiJmYWxzZSIsImlhdCI6MTY0NTg1OTYxNSwiZXhwIjoxNjQ2MjkxNjE1fQ.Q4fv1xlxme-0JzHfE11VvH5Al38ZWqylYZ6aXNcuwJg"
        },
        }
      );
        setNewUsers(res.data);
      }catch(err){
        console.log(err);
      }
    };
    getNewUsers();
  },[]);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
      {newUsers && newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

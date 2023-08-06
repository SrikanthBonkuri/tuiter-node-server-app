import React from "react";
import { deleteTuitThunk } from "./services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitItem  = () => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-10">
       <div>{tuit.userName} . {tuit.time}</div>
       <div className="fw-bolder">{tuit.topic}</div>
       <i class="fa fa-window-close" aria-hidden="true"></i>
       <div>{tuit.title}</div>
     </div>
     <div className="col-auto">
       <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`}/>
     </div>
     <div className="col-4">
        <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}></i>
     </div>
   </div>
  </li>
 );
};
export default TuitItem ;
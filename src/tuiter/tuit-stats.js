import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";


const dispatch = useDispatch();

function TuitStats() {
    return (
        <div>
            <FaHeart className="text-danger"
                onClick={() => dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))}
            />
            <span className="ms-2">{tuit.likes}</span>
        </div>
    );
}

export default TuitStats;
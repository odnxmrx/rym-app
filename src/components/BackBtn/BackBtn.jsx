import { useNavigate } from "react-router-dom";
import style from "./BackBtn.module.css";

export default function BackBtn() {

    const navigate = useNavigate()

    const handleNavigateClick = () => {
        navigate(-1);
    }

    return( <div className={style.backButtonContainer}>
        <button onClick={handleNavigateClick}>← Go back</button>
    </div>)
}
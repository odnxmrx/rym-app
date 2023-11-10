import { useNavigate } from "react-router-dom";

export default function BackBtn() {

    const navigate = useNavigate()

    const handleNavigateClick = () => {
        navigate(-1);
    }

    return( <div>
        <button onClick={handleNavigateClick}>← Go back</button>
    </div>)
}
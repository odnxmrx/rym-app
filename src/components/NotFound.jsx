import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {

    const navigate = useNavigate();

    useEffect(()=> {
        setTimeout(()=> navigate('/home'),3000)
    }, []);

    return (
        <>
            <div>
                <h3>Error 404!</h3>
                <p>
                    Page not found.<br />
                    <em>We're sending you back home.</em>
                </p>
            </div>
            <button>
                <Link to='/home'>
                    Go Home!
                </Link>
            </button>
        </>
    )
}

export default NotFound;
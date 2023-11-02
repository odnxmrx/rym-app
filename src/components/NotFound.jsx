import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <>
            <div>
                <h3>Error 404</h3>
                <p>Page not found.</p>
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
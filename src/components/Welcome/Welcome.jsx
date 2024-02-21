import Form from "../Form/Form"
import { Link } from "react-router-dom"
import style from './Welcome.module.css'
import rymgif from '../../images/Animated-Rick-n-Morty-Pixelart-930065298.gif'

export default function Welcome({ login }) {

    return (
        <div className={style.welcomeContainer}>
            <div className={style.glassContainer}>
                <div className={style.welcomeContainer}>
                    <div className={style.main}>
                        <h1>Hey!</h1>
                        <h2>Welcome to my Rick & Morty App</h2>

                        {/* <Form login={login} /> */}
                        <Link to="/home">
                            <button>Enter</button>
                        </Link>
                    </div>
                    <div className={style.imageWrapper}>
                        <img src={rymgif} alt="Animated Rick n Morty Pixelart" />
                        <br /><small>Art by <a href="https://www.deviantart.com/babarbie/gallery">Babarbie</a> on DeviantArt</small>
                    </div>

                </div>
            </div>
        </div>
    )

}
import ArmandoPhoto from '../../images/armandopinedagamaphoto.jpg'
import BackBtn from '../BackBtn/BackBtn';
import style from './About.module.css';

const About = () => {

    return (
        <>
        <BackBtn />
            <div className={style.detailContainer}>
                <div className={style.leftContainer}>
                    <h1>About</h1>
                    <small>Details from the app</small>
                    <h2>Rick & Morty</h2>
                    <p>
                        Implementations:
                        <br />
                        React - Vite | React - Redux | Router DOM | HTML5 | CSS3 | ES6
                    </p>
                    <br />
                    <small>Developed by</small>
                    <h2>Armando Pineda Gama</h2>
                    <p><em>Full-Stack Developer</em></p>
                </div>
                <div className={style.rightContainer}>
                    <img src={ArmandoPhoto} alt="Armando Pineda Gama Photo" width={'300px'} />

                </div>
            </div>
        </>
    )
}

export default About;
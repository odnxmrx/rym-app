import ArmandoPhoto from '../images/armandopinedagamaphoto.jpg'

const About = () => {

    return (
        <>
            <div>
                <h2>About me</h2>
                <h3>Armando Pineda Gama</h3>
                <p><em>Full-Stack Developer</em></p>
                <img src={ArmandoPhoto} alt="Armando Pineda Gama Photo" width={'300px'} />
                <p>Developed with 💛 @ 2023</p>
            </div>
        </>
    )
}

export default About;
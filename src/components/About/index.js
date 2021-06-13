import coverImage from "../../assets/cover-portfolio.png";

function About() {
    return (
        <section>
            <h1 id="about">Sebastian Crespin Bowen</h1>
            <h6>My serious look....</h6>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    )
}
export default About;
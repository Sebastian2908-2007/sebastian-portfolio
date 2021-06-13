import coverImage from "../../assets/cover-portfolio.png";

function About() {
    return (
        <section>
            <h1 id="about">Sebastian Crespin Bowen</h1>
            <h6>My serious look....</h6>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <p className="mx-1">
        So about me, well I am new to the world of web development.
        Most of my adult life has been spent doing work centered around construction,
        and the like. I worked for Yesco, a sign company, fabricating sign's for five years.
        In August , 2020 I quit and decided too go at my real estate bussiness full time "2908 Real Estate".
        Although the bussiness keep's me a float it's very saturated ,and I realized my particular
        bussiness modal is not the most viable with the current super hot housing market, so I 
        decided to pivot. I was always facinated with web development "and intimidated" , so I 
        gave it A go, and now i'm in love!. On my free time I love anything outdoors with my wife and two son's .
   
            </p>
        </section>
    )
}
export default About;
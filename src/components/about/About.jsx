import "./about.css"
import potrait from "../../img/potrait.jpeg"

const About = () => {
    return (
        <div className="a">
            
            <div className="a-left">
                <div className="a-card bg"></div>
            <div className="a-card">
                <img src={potrait} className="a-img"></img>
            </div>
            </div>
            <div className="a-right">
                <div className="a-title"><h1>ABOUT ME</h1></div>
                <p className="a-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    )
}

export default About

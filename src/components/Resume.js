import { Container } from "react-bootstrap";
import resume from "../assets/img/resume.png";


export const Resume = () => {
    return (
        <section className="resume" id="resume"> 
    
        <Container>
            <img src ={resume} alt="resume" />
        </Container>
        
        </section>
    )
}


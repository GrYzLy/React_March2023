import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Bio from "./Bio";
import Contact from "./Contact";
const  About = (props) => (
    <div>
        <h1>About!
        </h1>

        <Link to={'/about'}>About</Link>
         |  
        <Link to={'/about/contact'}>Contact</Link>
         | 
        <Link to={'/about/bio'}>Bio</Link>

        <Routes>
            <Route path={'/bio'} element={<Bio />} />
            <Route path={'/contact'} element={<Contact />} />
        </Routes>
    </div>
)




export default About;

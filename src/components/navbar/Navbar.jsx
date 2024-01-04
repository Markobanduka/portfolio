import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion";
import "../sidebar/sidebar.scss"


const Navbar = ()=> {

  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span 
        initial={{opacity: 0, scale: 0.5}} 
        animate={{opacity: 1, scale: 1}} 
        transition={{duration: 0.5}}
        >
          {/* Marko Banduka */}
          </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/marko.banduka.1" target="_blank"><img src="./facebook.png"/></a>
          <a href="https://www.instagram.com/marko_banduka/?igsh=MXZyM2NoZDFpdmx0MA%3D%3D" target="_blank"><img src="./instagram.png"/></a>
          <a href="https://wa.link/zjcl4a" target="_blank"><img src="./whatsapp.png"/></a>
          <a href="https://msng.link/o?381656817481=vi" target="_blank"><img src="./viber.png"/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar

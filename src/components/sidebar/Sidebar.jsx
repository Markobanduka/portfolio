import { useState } from "react";
import {motion, spring} from "framer-motion"
import "./sidebar.scss"
import ToggleButton from "./toggleButton/Togglebutton";
import Links from "./links/Links";

  const variants ={
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stifness: 20,
      },
    },
    closed:{
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        // delay: 0.5,
        type: "spring",
        stifness: 100,
        damping: 20,
      },
    },
  }

const Sidebar = () => {
  const[open,setOpen] = useState(false)

  return (
    <motion.div className="sidebar" animate ={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links/>
      </motion.div>
      <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar;
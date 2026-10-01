import style from "../css/Body.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Body() {
  return (
    <div>
      <div className={style.mainCon}>
        <div className={style.overlay}></div>

        <div className={style.flexinCon}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            viewport={{ once: true }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            <h2>Welcome to Depioneer Holidays</h2>
            <h3 className="text-center">Fill The Thrill Today.</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            <Link to="/enquiry">
              <button className={style.bookNowBtn}>Enquire Us</button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Body;

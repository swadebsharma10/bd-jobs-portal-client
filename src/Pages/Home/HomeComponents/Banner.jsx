import { motion } from "framer-motion";
import { easeOut } from "motion";
import team1 from "../../../assets/team/team1.jpg";
import team2 from "../../../assets/team/team2.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-100 min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
              animate={{ y: [50, 100, 50] }}
              transition={{ duration: 10, repeat: Infinity }}
              src={team1}
              className="max-w-sm w-64 border-l-4 border-b-4 border-blue-400 rounded-t-3xl rounded-br-3xl "
            />
            <motion.img
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 10, repeat: Infinity , delay: 5}}
              src={team2}
              className="max-w-sm w-64 border-l-4 border-b-4 border-blue-400 rounded-t-3xl rounded-br-3xl "
            />
          </div>
          <div className="flex-1">
            <motion.h1
              animate={{ x: 50 }}
              transition={{
                duration: 6,
                delay: 1,
                ease: easeOut,
                repeat: Infinity,
              }}
              className="text-5xl font-bold"
            >
             The {' '}
              <motion.span
                animate={{ color: ["#FFC300", "#79ef5f"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Easiest Way
              </motion.span>{" "}
              to <br /> Get Your New Job.
            </motion.h1>
            <p
              className="py-6 text-2xl"
            >
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day
            </p>
            <button
              className="btn btn-primary"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import { motion} from 'framer-motion';
import { easeOut } from 'motion';


const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <motion.h1
            animate={{x:50, }}
            transition={{duration: 2, delay: 1, ease: easeOut, repeat: Infinity}}
            className="text-5xl font-bold">Latest <motion.span
            animate={{color: ['#FFC300', '#79ef5f']}}
            transition={{duration: 1.5, repeat: Infinity}}
            >Job</motion.span> For You...</motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

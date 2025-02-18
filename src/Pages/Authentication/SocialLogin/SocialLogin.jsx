import { useContext } from "react";
import AuthContext from "../../../context/AuthContext/AuthContext";


const SocialLogin = () => {
      const {googleLogin} = useContext(AuthContext);

      const handleGoogleSignin =()=>{
            googleLogin()
            .then(result =>{
                  const user = result.user;
                  console.log('googleUsr', user)
            })
            .catch(error =>{
                  console.log(error.message)
            })

      }

      return (
            <div className="m-4">
                   <div className="divider">OR</div>
               <button onClick={handleGoogleSignin} className="btn w-full  ">Google</button>   
            </div>
      );
};

export default SocialLogin;
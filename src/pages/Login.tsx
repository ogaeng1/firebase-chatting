import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';


const Login = () => {
    const [google, setGoogle] = useState<boolean>(false);
    const navigate = useNavigate();

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    auth.languageCode = 'it';

    if (google === true) {
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            if (user !== null) {
                navigate("/home");
            }
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }
    
  return (
    <div onClick={() => setGoogle(true)} className="w-[150px] h-[25px] flex cursor-pointer border border-blue-400">
        <img src="/images/google.png" alt='' />
        <span>구글로 시작하기</span>
    </div>
  );
}

export default Login;
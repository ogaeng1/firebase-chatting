import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { auth } from "../firebase";
import Layout from '../components/Layout';
console.log(auth);

const Login = () => {
    const [google, setGoogle] = useState<boolean>(false);
    const [github, setGithub] = useState<boolean>(false);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth();
    auth.languageCode = 'it';
    
    if (google === true) {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const userData = result.user.displayName;
            if (userData !== undefined) {
                navigate("/");
            }
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }

    if (github === true) {
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            if (user !== undefined) {
                navigate("/");
            }
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GithubAuthProvider.credentialFromError(error);
        });
    }
    
  return (
    <Layout>
        <div className='w-full h-full flex flex-col items-center justify-center gap-2 bg-[aliceblue]'>
            <form className='flex flex-col w-[300px] h-[15%] gap-2'>
                <input type="email" placeholder='이메일을 입력하세요' className='w-full h-full rounded-[10px] px-[5px]'/>
                <input type="password" placeholder='비밀번호를 입력하세요' className='w-full h-full rounded-[10px] px-[5px]'/>
                <div className='w-full h-[50px] flex justify-around items-center'>
                    <button className='w-1/2 border border-blue-500'>로그인</button>
                    <Link to="/signup" className='w-1/2 border border-blue-500 flex justify-center'>
                        <button>회원가입</button>
                    </Link>
                </div>
            </form>
            <hr className="w-[300px] h-[2px] my-[10px] bg-gray-400" />
            <div onClick={() => setGoogle(true)} className="w-[300px] h-[5%] flex justify-center items-center cursor-pointer border border-gray-900 rounded-[10px] hover:bg-gray-400">
                <img src="/images/google.png" alt='' className='w-[25px h-[25px] mr-[10px]'/>
                <span>Google 로그인</span>
            </div>
            <div onClick={() => setGithub(true)} className="w-[300px] h-[5%] flex justify-center items-center cursor-pointer border border-gray-900 rounded-[10px] hover:bg-gray-400">
                <img src="/images/github.png" alt='' className='w-[25px h-[25px] mr-[10px] rounded-[50%]'/>
                <span>Github 로그인</span>
            </div>
        </div>
    </Layout>
  );
}

export default Login;
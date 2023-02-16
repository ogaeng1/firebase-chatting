import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { auth } from "../firebase";
import Layout from '../components/Layout';
import Header from '../components/Header';
console.log(auth);

const Login = () => {
    const [google, setGoogle] = useState<boolean>(false);
    const [github, setGithub] = useState<boolean>(false);
    const [emailValue, setEmailValue] = useState<string>("");
    const [passWord, setPassWord] = useState<string>("");
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth();
    auth.languageCode = 'it'

    const onSubmit = (e: any) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, emailValue, passWord)
        .then((userCredential) => {
            const user = userCredential.user;
            alert(user.email + `님 환영합니다`);
            navigate("/");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
    
    if (google === true) {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const userData = result.user;
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
        <div className='w-full h-full flex flex-col'>
            <Header />
            <div className='w-full h-full flex flex-col items-center justify-center gap-2 bg-[aliceblue]'>
                <form onSubmit={onSubmit} className='flex flex-col w-[300px] h-[15%] gap-2'>
                    <input type="email" required placeholder='이메일을 입력하세요' className='w-full h-full rounded-[10px] px-[5px]' onChange={(e) => {setEmailValue(e.target.value)}} />
                    <input type="password" required placeholder='비밀번호를 입력하세요' className='w-full h-full rounded-[10px] px-[5px]' onChange={(e) => {setPassWord(e.target.value)}} />
                    <div className='w-full h-[50px] flex justify-around items-center'>
                        <button type='submit' className='w-1/2 border border-blue-500'>로그인</button>
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
        </div>
    </Layout>
  );
}

export default Login;
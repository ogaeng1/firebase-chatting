import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase"
import toast, { Toaster } from "react-hot-toast";
import Layout from '../components/Layout';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signGoogle = async () => {
        await signInWithPopup(auth, googleProvider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        navigate("/home")
        toast.success("로그인 성공")
    }).catch((error) => {
        toast.error("로그인 실패")
    })
    }

    const signGithub = async () => {
    await signInWithPopup(auth, githubProvider).then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        navigate("/home")
        toast.success("로그인 성공")
    }).catch((error) => {
        toast.error("로그인 실패")
    })
    }
  return (
    <Layout>
        <div className='w-full h-screen flex flex-col items-center justify-center gap-5 bg-slate-900'>
            <LoginPhrase>Firebase Chat</LoginPhrase>
            <SocialLogin onClick={signGoogle} >
                <img src="/images/google.png" alt='' className='w-[25px h-[25px] mr-[10px]'/>
                <span>Google 로그인</span>
            </SocialLogin>
            <SocialLogin onClick={signGithub} >
                <img src="/images/github.png" alt='' className='w-[25px h-[25px] mr-[10px] rounded-[50%]'/>
                <span>Github 로그인</span>
            </SocialLogin>
            <Toaster position="top-center" reverseOrder={false} />
        </div>  
    </Layout>
  );
}

export default Login;

const LoginPhrase = styled.p`
    font-size: 50px;
    color: #fff;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #b66cde, 0 0 30px #b66cde, 0 0 40px #b66cde;
`;

const SocialLogin = styled.button`
    width: 300px;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 10px;
    background-color: #64748B;
    font-weight: bold;
    &:hover {
        background-color: #8a94a0;
        box-shadow: 0 0 10px white;
    }
`;
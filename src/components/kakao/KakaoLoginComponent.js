import { Link } from "react-router-dom";

const REST_KEY = '6875441c830d9feb15837b5723605ad6'
const REDIRECT_URI = 'http://localhost:3000/member/kakao'

// 인가 코드를 받는 경로
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

const KakaoLoginComponent = () => {
    return (  
        <div className="text-3xl text-white">
            <Link to={kakaoURL}>KAKAO LOGIN</Link>
        </div>
    );
}
 
export default KakaoLoginComponent;
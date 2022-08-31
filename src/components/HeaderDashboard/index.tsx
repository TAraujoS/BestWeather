import logo from '../../assets/img/logo.png'
import { HeaderDash, DivHeader, ButtonLogout } from './styles'
import {BiLogOut} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const HeaderDashboard = () => {
    
  const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/Login");
      };

    return (
        <HeaderDash>
                <DivHeader>
                    <div>
                        <img src={logo} alt="Logo BestWeather" />
                        <h2>BestWeather</h2>
                    </div>
                    <ButtonLogout onClick={()=> logout()}>
                        <BiLogOut />
                    </ButtonLogout>
                </DivHeader>
        </HeaderDash>
    )
}

export default HeaderDashboard
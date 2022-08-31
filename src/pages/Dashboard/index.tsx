import FooterDash from "../../components/FooterDash"
import HeaderDashboard from "../../components/HeaderDashboard"
import { BodyDash } from "./styles"

const Dashboard = () => {
    return (
        <BodyDash>
            <HeaderDashboard />
            <div>
                <h1>BestWeather</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi sint odio mollitia autem at, id porro optio unde aut harum hic dolor soluta! Vitae quidem hic doloribus qui alias. Quidem!</p>
            </div>
            <FooterDash />
        </BodyDash>
    )
}

export default Dashboard
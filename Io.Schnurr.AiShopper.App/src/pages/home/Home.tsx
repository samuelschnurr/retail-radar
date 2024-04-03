import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    return (
        <button
            onClick={() => {
                navigate("/messenger")
            }}>
            Start Chat
        </button>
    )
}

export default Home

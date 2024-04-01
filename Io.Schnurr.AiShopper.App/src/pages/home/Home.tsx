import { useNavigate } from "react-router-dom"

function Home() {
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

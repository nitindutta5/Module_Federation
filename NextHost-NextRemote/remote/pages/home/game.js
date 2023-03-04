import { useRouter } from 'next/router'

function Game() {
    const router = useRouter()
    return <>
     <button onClick={() => router.back()}>Back</button>
     <h1>Game Page</h1>
    </>
}

export default Game;
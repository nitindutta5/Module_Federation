import { useRouter } from 'next/router'
function Home() {
    const router = useRouter()
    return <>
       <button onClick={() => router.back()}>Back</button>
    <h1>Home Sub Route Page</h1>
    <button>
    <a href="/home/game">About Game</a>
    </button>
    
    </> 
}

export default Home;
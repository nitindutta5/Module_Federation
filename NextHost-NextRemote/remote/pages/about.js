import { useRouter } from 'next/router'

function About() {
    const router = useRouter()
    return <>
     <button onClick={() => window.history.back()}>Back test</button>
     <h1>About Page</h1>
    </>
}

export default About;
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";
const ContextSharing = dynamic(() => import("remote/App"), {
    ssr: false,
  });
function About() {
    const router = useRouter()
    return <>
     <ContextSharing />
     <button onClick={() => router.back()}>Back</button>
     <h1>About Page</h1>
    </>
}

export default About;
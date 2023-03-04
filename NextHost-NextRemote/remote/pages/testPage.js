import { useRouter } from 'next/router'
function TestSsg(props) {
    const router = useRouter()
    console.log("router", router)
    return <>
    <h1>TestSsg Page - SSG</h1>
    {props.name}
    {/* <button>
    <a href="/about">About Page</a>
    </button>
    <button><a href="/profile">Profile Page</a></button>
    <button><a href="/TestSsg">TestSsg Page for Sub Route Example</a></button> */}
    
    </> 
}

export default TestSsg;

export async function getStaticProps(context) {
    return {
      props: {
        name: "Aravind"
      }, // will be passed to the page component as props
    }
  }
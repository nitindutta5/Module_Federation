import dynamic from 'next/dynamic';

const StaticPage = dynamic(() => import("remote/staticPage"), {
    ssr: false,
  });

  function TestSsg(props) {
    // const router = useRouter()
    // console.log("router", router)
    return <>
     <StaticPage {...props} />
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
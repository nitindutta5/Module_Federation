import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useRouter } from 'next/router'
// const HomePage = dynamic(() => import("remote/nextjs-remote-page"), {
//   ssr: false,
// });

// const ContextSharing = dynamic(() => import("remote/App"), {
//   ssr: false,
// });

const NextjsRemoteComponent = dynamic(() => import('remote/nextjs-remote-component'), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});
// const DynamicComponent = dynamic(() =>
//   import('remote/nextjs-remote-component').then((mod) => mod.Hello)
// )
function Home(props) {
  const router = useRouter()
    console.log("router", router)
  useEffect(() => {
    console.log('Window', window)
  }, [])

  return (
    <>
    <h1>This is host Homepage</h1>
      {/* <DynamicComponent /> */}
      <NextjsRemoteComponent />
      <button> <a href="/demo">Go to Remote</a></button>
     
      {/* <HomePage {...props} /> */}
      {/* <ContextSharing /> */}
    </>
  );
}

export default Home;

export async function getServerSideProps(context) {
  return {
    props: {
      name: "Aravind"
    }, // will be passed to the page component as props
  }
}


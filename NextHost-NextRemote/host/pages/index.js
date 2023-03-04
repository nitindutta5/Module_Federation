import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';

// const NextjsRemoteComponent = dynamic(() => import('remote/nextjs-remote-component'), {
//   ssr: false,
// });

const HomePage = dynamic(() => import('remote/nextjs-remote-page'), {
  ssr: false,
});
// console.log('HomePage', HomePage)
// import { useRouter } from 'next/router'
function Home() {
    // const router = useRouter()
    // console.log("router", router)
    return <>
    <HomePage />
    </> 
}

export default Home;
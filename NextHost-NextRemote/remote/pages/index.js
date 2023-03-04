import { useRouter } from 'next/router'
import fetch from "isomorphic-unfetch";
function Home(props) {
    const router = useRouter()
    console.log("router", router)
    return <>
    <h1>This is Remote HomePage</h1>
    <h1>Home Page - SSR Page</h1>
    {props.name}
    {props.data?.facts[0]} 
    <button> <a href="/welcome">Go to Host</a></button>
    <button>
    <a href="/about">About Page</a>
    </button>
    {/* <button><a href="/profile">Profile Page</a></button>
    <button><a href="/home">Home Page for Sub Route Example</a></button> */}
    
    </> 
}

export default Home;

// export async function getServerSideProps() {
//   const { API_URL } = process.env;
//   console.log("inside fetch");
//   const res = await fetch(`${API_URL}/movies`);

//   const data = await res.json();

//   return { props: { data } };
// }

export async function getServerSideProps(context) {
  const response = await fetch(`https://dog-api.kinduff.com/api/facts`);
  const jsonData = await response.json()
  // res.status(200).json(jsonData)
  console.log('jsonData', jsonData)
    return {
      props: {
        name: "Aravind",
        data: jsonData,
      }, // will be passed to the page component as props
    }
  }
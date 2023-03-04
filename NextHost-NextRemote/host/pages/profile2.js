import { useRouter } from 'next/router'

function Profile() {
    const router = useRouter()
    return <>
      <button onClick={() => router.back()}>Back</button>
      <h1>Profile Page</h1>
    </> 
}

export default Profile;
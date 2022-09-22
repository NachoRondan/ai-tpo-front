import { Link } from "react-router-dom"

export default function Home({user}) {
  if(!user){
    return (
      <div>
        <h2>Home No user</h2>
        <Link to='login'> Sign In </Link>
      </div>
    )
  }
  return <>Home with user</>
}
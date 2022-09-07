export default function Home({user}) {
  if(!user){
    return <>Home No user</>
  }
  return <>Home with user</>
}
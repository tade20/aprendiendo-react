import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    const formatUserName = (userName) => `@${userName}` 
    return(
        <section className='App'>
        <TwitterFollowCard formatUserName={formatUserName} 
        userName="tadeomachin" 
        name="Tadeo Machin" 
        imageUrl="kikobeats"
        isFollowing={true}/>
        <TwitterFollowCard formatUserName={formatUserName}
         userName="fedesil" 
         name="Federica Silvera" 
         imageUrl="fedesil"
         isFollowing={false}/>
        <TwitterFollowCard formatUserName={formatUserName}
         userName="billGa" 
         name="Bill Gates" 
         imageUrl="billgates"
         isFollowing={false}/>
        <TwitterFollowCard formatUserName={formatUserName}
         userName="elon" 
         name="Elon Musk" 
         imageUrl="elonmusk"
         isFollowing={true}/>
        </section>
    )
}
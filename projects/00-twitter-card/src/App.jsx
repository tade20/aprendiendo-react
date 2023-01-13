import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    const formatUserName = (userName) => `@${userName}` 
    return(
        <section className='App'>
        <TwitterFollowCard formatUserName={formatUserName} 
        userName="tadeomachin" 
        name="Tadeo Machin" 
        imageUrl="kikobeats"/>
        <TwitterFollowCard formatUserName={formatUserName}
         userName="fedesil" 
         name="Federica Silvera" 
         imageUrl="fedesil"/>
        <TwitterFollowCard formatUserName={formatUserName}
         userName="billGa" 
         name="Bill Gates" 
         imageUrl="billgates"/>
        <TwitterFollowCard formatUserName={formatUserName}
         userName="elon" 
         name="Elon Musk" 
         imageUrl="elonmusk"/>
        </section>
    )
}
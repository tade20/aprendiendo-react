import { useState } from "react";
export function TwitterFollowCard({userName, formatUserName, imageUrl}){
    const [isFollowing, setIsFollowing] = useState(false);
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img
            className='tw-followCard-img' 
            alt="Tadeo Machin" src={`https://unavatar.io/${imageUrl}`}/>
            <div className='tw-followCard-div'>
                <strong>{userName}</strong>
                <span className='tw-followCard-span'>{formatUserName(userName)}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick = {handleClick}>
                {text}
            </button>
        </aside>
    </article>
    )
}
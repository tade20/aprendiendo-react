export function TwitterFollowCard({userName, formatUserName, imageUrl, isFollowing}){
    console.log(isFollowing)
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
            <button className='tw-followCard-button'>
                Seguir
            </button>
        </aside>
    </article>
    )
}
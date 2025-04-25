import { useState } from 'react'
import './index.css'

export default function TwitterFollowCard({ children, formatUserName, username, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const textFollow = isFollowing ? 'Siguiendo' : 'Seguir'
    const classButtonFollow = isFollowing ? 'follow-card-button is-following' : 'follow-card-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className='follow-card'>
            <header className='follow-card-header'>
                <img className='follow-card-avatar' src={`https://unavatar.io/youtube/${username}`} alt="" />
                <div className='follow-card-info'>
                    <strong className=''>{children}</strong>
                    <span className='follow-card-infoUserName'>
                        {formatUserName(username)}
                        {/* {formatedUserName} */}
                    </span>
                </div>
            </header>

            <aside>
                <button className={classButtonFollow} onClick={handleClick}>
                    <span className='text-following'>{textFollow}</span>
                    <span className='stop-following'>Dejar de seguir</span>
                </button>
            </aside>

        </article>
    )
}
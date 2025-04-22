import './index.css'
import { TwitterFollowCard } from './TwitterFollowcard'

const users = [
    {
        name: 'ED Team',
        username: 'edteam',
        isFollowing: false
    },
    {
        name: 'Midu DEV',
        username: 'midudev',
        isFollowing: true
    },
    {
        name: 'El Chocas',
        username: 'elchocas',
        isFollowing: false
    },
    {
        name: 'Leyner VM',
        username: 'leynervm',
        isFollowing: true
    }
]

export default function List() {
    const formatUserName = (username) => `email@${username}`
    // const formatedUserName = <span>@Leynervm</span>

    return (
        <section className='mx-auto w-full max-w-sm list'>
            {
                users.map(({ name, username, isFollowing }) => (
                    <TwitterFollowCard
                        key={username}
                        formatUserName={formatUserName}
                        intialIsFollowing={isFollowing}
                        username={username}>
                        {name}
                    </TwitterFollowCard>
                ))
                // users.map((user) => {
                //     const { name, username, isFollowing } = user

                //     return (
                //         <TwitterFollowCard formatUserName={formatUserName} intialIsFollowing={isFollowing} username={username}>
                //             {name}
                //         </TwitterFollowCard>
                //     )
                // })
            }
        </section>
    )
}
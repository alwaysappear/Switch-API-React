import { useState } from 'react';

const Tabs = ({ onSetActiveTab, onSetLoading }) => {
    const [tabs, setTabs] = useState([
        {
            id: 1,
            title: "posts",
            active: true
        },
        {
            id: 2,
            title: "users",
            active: false
        },
        {
            id: 3,
            title: "comments",
            active: false
        }
    ])

    const handleActiveBtn = id => {
        const activeBtn = tabs.filter(tab => tab.id === id)
        onSetActiveTab(activeBtn[0].title)
        onSetLoading(true)
    }

    return (
        <nav className="flex w-full justify-between p-5 gap-1">
            {tabs.map(tab => (
                <button onClick={() => handleActiveBtn(tab.id)} key={tab.id}>{tab.title}</button>
            ))}
        </nav>
    )
}

export default Tabs
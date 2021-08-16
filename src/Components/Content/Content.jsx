import React from 'react'

import './style.css'

const id = [1,2,3,4,5,6]

const Content = () => {
    return (
        <div className="content">
            {
                id.map(id => <div  className="content-items">{id}</div>)
            }
        </div>
    )
}

export default Content

import React from 'react'

const Cardpost = ({ children }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

export default Cardpost
import React from 'react'


const Card = ({ children, className = '' }) => (
<div className={`bg-white rounded-3xl shadow-sm overflow-hidden ${className}`}>
{children}
</div>
)


export default Card
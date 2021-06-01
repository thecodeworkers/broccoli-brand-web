import React from 'react'

const World = ({ width = '12', height = '12'}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16">
        <path d="M10,2a8,8,0,1,0,8,8A8.009,8.009,0,0,0,10,2ZM3.6,10a6.359,6.359,0,0,1,.345-2.055L5.2,9.2l1.6,1.6v1.6L8.4,14l.8.8v1.545A6.407,6.407,0,0,1,3.6,10Zm11.464,3.9a3.342,3.342,0,0,0-1.864-.7v-.8a1.6,1.6,0,0,0-1.6-1.6H8.4V8.4A1.6,1.6,0,0,0,10,6.8V6h.8a1.6,1.6,0,0,0,1.6-1.6V4.071A6.381,6.381,0,0,1,15.064,13.9Z" transform="translate(-2 -2)" fill="#464646"/>
    </svg>
)

export default World
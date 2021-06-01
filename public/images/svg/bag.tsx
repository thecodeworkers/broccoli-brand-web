import React from 'react'

const Bag = ({ width = '12', height = '12'}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 18">
        <path d="M4.778,20H17.222A1.791,1.791,0,0,0,19,18.2V8.3a.894.894,0,0,0-.889-.9H15.444V6.5a4.445,4.445,0,1,0-8.889,0v.9H3.889A.894.894,0,0,0,3,8.3v9.9A1.791,1.791,0,0,0,4.778,20ZM8.333,6.5a2.667,2.667,0,1,1,5.333,0v.9H8.333ZM4.778,9.2H6.556V11H8.333V9.2h5.333V11h1.778V9.2h1.778l0,9H4.778Z" transform="translate(-3 -2)" fill="#464646"/>
    </svg>
)

export default Bag
import { memo } from 'react'

const ArrowLeft = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg"  width="23" height="20" viewBox="0 0 23 24">
    <defs>
      <clipPath id="arrowL">
        <rect width="23" height="24" fill="none"/>
      </clipPath>
    </defs>
    <g id="Symbol_44_2" data-name="Symbol 44 – 2" clipPath="url(#arrowL)">
      <path id="Trazado_10" data-name="Trazado 10" d="M11.53,0l-2.1,2.1,7.936,7.936H0v2.995H17.37L9.434,20.964l2.1,2.1L23.06,11.53Z" transform="translate(23.06 23.06) rotate(180)" fill={color}/>
    </g>
  </svg>
)

export default memo(ArrowLeft)

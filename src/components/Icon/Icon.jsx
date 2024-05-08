import sprite from "../../assets/svg/sprite.svg"

const Icon = ({ width, height, fillColor, strokeColor, name}) => {

  return (
    
 <svg width={width} height={height} fill={fillColor} stroke={strokeColor}>
        <use href={`${sprite}#${name}`} />
     </svg>
  )
}

export default Icon
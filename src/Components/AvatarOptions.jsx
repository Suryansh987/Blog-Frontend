import React from 'react'

const AvatarOptions = (props) => {
    const { isOpen } = props
  return (
    <>
    <div className={`${isOpen?"block":"hidden"}`}>
        AvatarOptions
    </div>
    </>
  )
}

export default AvatarOptions
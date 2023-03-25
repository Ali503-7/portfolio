import React, { useRef, useEffect } from 'react'
import Hacker from '../../assets/JSAnimation/hackingTransition';
import './email.scss'

function email() {

  const Email = useRef(null)

  useEffect(() => {
    Hacker(Email,1)
  }, [])
  

  return (
    <div className="Email contaner">
      <span className="email">
        <a
          href="mailto:alimoali354@gmail.com"
          ref={Email}
          data-value="alimoali354@gmail.com"
        >
          alimoali354@gmail.com
        </a>
      </span>
      <span className="line"></span>
    </div>
  );
}

export default email
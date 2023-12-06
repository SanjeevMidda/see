import React, { useState } from 'react'

function Block({letterOne, letterTwo}) {

    const [status, setStatus] = useState(true);

  return (
    <div className="block" onClick={() => {setStatus(!status)}}>
    {
        status? <div className="letterOne"> <h1>{letterOne}</h1></div> : <div className="letterTwo"><h1>{letterTwo}</h1></div>
    }
    </div>
  )
}

export default Block
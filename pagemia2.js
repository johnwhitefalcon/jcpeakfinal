

import React from 'react'
import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react'


export default function VideoPlayer(){

  const [video, setVideo] = useState(false)
  const [window, hasWindow] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      hasWindow(true);
    }
  }, []);

  return (
    <div>
      <h2>NextJs VideoPlayer - GeeksforGeeks</h2>
      {hasWindow && <ReactPlayer url={'https://www.youtube.com/watch?v=wWgIAphfn2U'} />}
    </div>
  )
}
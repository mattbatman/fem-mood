'use client'
import { useState } from 'react'

const Editor = ({ entry }) => {
  const [value, setValue] = useState(entry.content)

  return (
    <div className="w-full h-full">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-full p-8 text-xl outline-none"
      />
    </div>
  )
}

export default Editor

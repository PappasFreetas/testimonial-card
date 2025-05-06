// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TestimonialCard from './components/testimonial-card'

function App() {
  //const [count, setCount] = useState(0)

  return (
      <div className="h-[768px] w-[1440px] flex flex-col items-center bg-gradient-to-b from-gray-50 to-[#d2d6db] py-[200px]">
        <TestimonialCard name='Sarah Dole' handle='@sarahdole' imageUrl='../public/profile-thumbnail.png' post="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"  />
      </div>
  )
}

export default App

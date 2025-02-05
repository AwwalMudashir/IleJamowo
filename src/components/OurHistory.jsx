import React from 'react'
import { useNavigate } from 'react-router-dom'

const OurHistory = () => {
  const navigate = useNavigate();
  return (
    <section className="history bg-white w-full py-12 px-[2%] flex flex-wrap space-y-6 lg:space-y-0 lg:flex-nowrap lg:justify-between" id="history">
    <div className="w-full lg:w-[48%]">
      <img src="/fam_history.jpg" alt="Family History" className="w-full rounded" />
    </div>
    <div className="w-full lg:w-[48%] lg:ml-[2%]">
      <h2 className="text-4xl font-semibold text-green-700 mb-6 text-center">Our History</h2>
      <p className="text-lg text-gray-700 mb-6">
        Ile-Jamowo Family has a rich heritage that spans generations, rooted in love, unity, and tradition. Discover the stories
        that define our legacy. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe temporibus necessitatibus iure perspiciatis, numquam aliquid veritatis hic, magni error nam expedita nostrum voluptatibus, mollitia minima! Exercitationem eius veritatis aperiam quia, quas, aspernatur quae, corrupti consequuntur nam ab totam illum doloremque eum ratione molestiae temporibus eos est reprehenderit fugiat? Eius, sed!
      </p>
      <div className="flex">
        <button onClick={() => navigate('/history')} className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Read More</button>
      </div>
    </div>
  </section>
  )
}

export default OurHistory

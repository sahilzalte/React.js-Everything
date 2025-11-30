
import { MoveRight } from 'lucide-react'

const RightCardContent = () => {
    return (
        <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between font-bold">
            <h2 className='bg-white rounded-full h-14 w-14 flex justify-center items-center text-2xl font-semibold'>1</h2>
            <div className="">
                <p className='text-lg leading-relaxed text-white mb-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dolorem placeat!</p>
                <div className='flex gap-3 justify-between p-4'>
                    <button className='bg-black text-white px-4 py-2 rounded-full'>Satisfied</button>
                    <MoveRight className='text-white' />
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
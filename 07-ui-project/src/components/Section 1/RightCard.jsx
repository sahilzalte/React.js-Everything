
import RightCardContent from './RightCardContent'

const RightCard = () => {
    return (
        <div className='h-full relative w-80  rounded-4xl overflow-hidden'>
            <img src="https://images.pexels.com/photos/21699172/pexels-photo-21699172.jpeg" alt="" className='h-full w-full object-cover rounded-4xl' />
           <RightCardContent />
        </div>
    )
}

export default RightCard

import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    return (
        <div className='h-full relative w-80  rounded-4xl overflow-hidden'>
            <img src={props.img} alt="" className='h-full w-full object-cover rounded-4xl' />
            <RightCardContent id={props.id} tag={props.tag} />
        </div>
    )
}

export default RightCard
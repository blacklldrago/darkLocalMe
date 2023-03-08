
import './card.css'
function Card({imgUrl, text1, text2, text3}){
    return (<div>
        <div className="card w-[300px]">
            <img src={imgUrl} alt="" />
            <h1 className=' pt-[20px] w-[293px] text-[24px] font-normal leading-[36px] text-[#000000] dark:text-[white]'>{text1}</h1>
            <p className='pt-[20px] pb-[20px] w-[293px] text-[20px] font-normal leading-[32px] text-[#777777]  dark:text-[white]' >{text2}</p>
            <p className='font-[700] text-[20px] leading-[36px] text-[#0A2640]'>{text3}</p>
        </div>
    </div>)
}
function Card1({text1, imgUrl, text2, text3}){
    return (<div>
        <div className="card1 w-[350px]  rounded-[12px] h-[400px]  dark:text-[white]">
            <h1 className='pt-[20px] pl-[20px] w-[270px] text-[#000000] text-[24px] leading-[36px] font-semibold  dark:text-[white]'>{text1}</h1>
            <div className='flex items-center gap-[7px] pt-[20px]'>
                <div>
                    <img className='pl-[20px] ' src={imgUrl} alt="" />
                </div>
                <div>
                    <h1 className='pl-[20px] dark:text-[white]'>{text2}</h1>
                    <p className='pl-[20px] dark:text-[white]'>{text3}</p>
                </div>
            </div>
        </div>
    </div>)
}
export {Card, Card1}
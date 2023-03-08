import './Product.css'
import bird from './bird.png'
import girl from './girl.png'
import j1 from './j1.png'
import j2 from './j2.png'
import j3 from './j3.png'
import j4 from './j4.png'
import j5 from './j5.png'
import j6 from './j6.png'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Product () {
  const [ lng, setLng ] = useState('en')
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => (
    i18n.changeLanguage(language)
  );

  const handleChange = (event) => {
    const { value } = event.target
    changeLanguage(value)
    setLng(value)
  }
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div className="container1b dark:bg-[#0A2640] pt-[100px] pb-[200px]" data-aos="fade-up-down"  data-aos-duration="3000">
      <div  className='o'>

      <select  className='bg-[black] text-[white] dark:bg-[white] dark:text-[black]' onChange={handleChange} value = {lng}>
                <option value="en">En</option>
                <option value="ru">Ru</option>
        </select>
      </div>
        <div className='mb-[80px]'>
          <p data-aos="flip-down"  data-aos-duration="3000" className=' pt-[100px] text-[#0A2640] dark:text-[white] text-[20px] leading-[32px] text-center'>{t("text60")}</p>
          <h1 data-aos="flip-down"  data-aos-duration="3000"  className=' pb-[50px] text-[#0A2640] dark:text-[white] text-[64px] leading-[84px] text-center w-[842px] m-auto'>{t("text61")}</h1>
          <div className='flex justify-evenly gap-[30px] items-center flex-wrap'>
            <div>
              <img className='bird' src={bird} alt="" />
            </div>
            <div className='kk'>
              <div className='flex flex-wrap '>
                <div><h1 data-aos="flip-down"  data-aos-duration="3000" className='pr-[20px]  dark:text-[white] text-[#0A2640] text-[16px] leading-[28px] font-[700] mb-[15px]'>{t("text33")}</h1></div>
                <div><p data-aos="flip-down"  data-aos-duration="3000" className='pt-[3px] text-[16px] leading-[28px] dark:text-[white]'>{t("text34")}</p></div>
              </div>
              <h1 className='need dark:text-[white] text-[#000000] mb-[20px] text-[48px] leading-[72px] font-[700] w-[543px]'>{t("text35")}</h1>
              <div  className='kk flex items-center gap-[20px]'>
                <div><img className='hello' src={girl} alt="" /></div>
                <div><p  data-aos="fade-up-down"  data-aos-duration="3000" className='dark:text-[white]'>{t("text36")}</p></div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div className="container2b dark:bg-[#0A2640] pt-[70px]">
        <h1 className='text-[black] text-[48px] leading-[72px] w-[65%] m-auto dark:text-[white]'>{t("text62")}</h1>
        <div className=' pop flex justify-center mt-[50px] pb-[100px] gap-[50px] flex-wrap '>
          <div>
            <img src={j1} alt="" />
            <div className='flex gap-[20px] mt-[10px] mb-[20px] flex-wrap '>
              <div>
                <p className='dark:text-[white] text-[16px] font-[700] leading-[28px] text-[black]'>{t("text33")}</p>
              </div>
              <div>
                <p className='dark:text-[white]'>{t("text34")}</p>
              </div>
            </div>
            <p className=' dark:text-[white] text-[20px] leading-[32px] text-[black font-normal] w-[300px] mb-[20px]'>{t("text35")}</p>
            <div className='flex gap-[20px] items-center flex-wrap'>
              <div>
                <img className='w-[30px] h-[30px]' src={girl} alt="" />
              </div>
              <div>
                <p className='dark:text-[white]'>{t("text36")}</p>
              </div>
            </div>
          </div>
          <div>
            <img src={j2} alt="" />
            <div className='flex gap-[20px] mt-[10px] mb-[20px] flex-wrap'>
              <div>
                <p className=' dark:text-[white] text-[16px] font-[700] leading-[28px] text-[black]'>{t("text36")}</p>
              </div>
              <div>
                <p className='dark:text-[white]'>{t("text34")}</p>
              </div>
            </div>
            <p className=' dark:text-[white] text-[20px] leading-[32px] text-[black font-normal] w-[300px] mb-[20px]'>{t("text22")}</p>
            <div className='flex items-center gap-[20px] flex-wrap'>
              <div>
                <img className='w-[30px] h-[30px]' src={girl} alt="" />
              </div>
              <div>
                <p className='dark:text-[white]'>{t("text36")}</p>
              </div>
            </div>
          </div>
          <div>
            <img src={j3} alt="" />
            <div className='flex gap-[20px] mt-[10px] mb-[20px] flex-wrap'>
              <div>
                <p className='dark:text-[white] text-[16px] font-[700] leading-[28px] text-[black]'>{t("text36")}</p>
              </div>
              <div>
                <p className='dark:text-[white]'>{t("text34")}</p>
              </div>
            </div>
            <p className='dark:text-[white] text-[20px] leading-[32px] text-[black font-normal] w-[300px] mb-[20px]'>{t("text19")}</p>
            <div className='flex gap-[20px] items-center'>
              <div>
                <img className='w-[30px] h-[30px]' src={girl} alt="" />
              </div>
              <div>
                <p className='dark:text-[white]'>{t("text36")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container3b dark:bg-[#0A2640] pb-[200px] pt-[100px]">
        <div className='pop flex justify-center mt-[50px] mb-[100px] gap-[50px] flex-wrap '>
          <div>
            <img src={j4} alt="" />
            <div className='flex gap-[20px] mt-[10px] mb-[20px]  flex-wrap '>
              <div>
                <p  data-aos="flip-up"  data-aos-duration="3000" className='text-[16px] font-[700] leading-[28px] dark:text-[white] text-[black]'>{t("text33")}</p>
              </div>
              <div>
                <p  data-aos="flip-up"  data-aos-duration="3000" className='dark:text-[white]'>{t("text34")}</p>
              </div>
            </div>
            <p className='dark:text-[white] text-[20px] leading-[32px] text-[black font-normal] w-[300px] mb-[20px]'>{t("text35")}</p>
            <div className='flex gap-[20px] items-center  flex-wrap'>
              <div>
                <img className='w-[30px] h-[30px]' src={girl} alt="" />
              </div>
              <div>
                <p  data-aos="flip-up"  data-aos-duration="3000" className='dark:text-[white]'>{t("text36")}</p>
              </div>
            </div>
          </div>
          <div>
            <img src={j5} alt="" />
            <div className='flex gap-[20px] mt-[10px] mb-[20px]  flex-wrap'>
              <div>
                <p  data-aos="flip-up"  data-aos-duration="3000" className='dark:text-[white] text-[16px] font-[700] leading-[28px] text-[black]'>{t("text33")}</p>
              </div>
              <div>
                <p  data-aos="flip-up"  data-aos-duration="3000" className='dark:text-[white]'>{t("text34")}</p>
              </div>
            </div>
            <p  data-aos="flip-up"  data-aos-duration="3000" className='dark:text-[white] text-[20px] leading-[32px] text-[black font-normal] w-[300px] mb-[20px]'>{t("text22")}</p>
            <div className='flex items-center gap-[20px]   flex-wrap'>
              <div>
                <img className='w-[30px] h-[30px]' src={girl} alt="" />
              </div>
              <div>
                <p  data-aos="flip-up"  data-aos-duration="3000" className='dark:text-[white]'>{t("text36")}</p>
              </div>
            </div>
          </div>
          <div>
            <img src={j6} alt="" />
            <div className='flex gap-[20px] mt-[10px] mb-[20px]  flex-wrap '>
              <div>
                <p  data-aos="fade-up-down"  data-aos-duration="3000" className='dark:text-[white] text-[16px] font-[700] leading-[28px] text-[black]'>{t("text33")}</p>
              </div>
              <div>
                <p  data-aos="fade-up-down"  data-aos-duration="3000" className='dark:text-[white]'>{t("text34")}</p>
              </div>
            </div>
            <p className='dark:text-[white] text-[20px] leading-[32px] text-[black font-normal] w-[300px] mb-[20px]'>{t("text19")}</p>
            <div className='flex gap-[20px] items-center  flex-wrap' >
              <div>
                <img className='w-[30px] h-[30px]' src={girl} alt="" />
              </div>
              <div>
                <p  data-aos="fade-up-down"  data-aos-duration="3000" className='dark:text-[white]'>{t("text36")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pppp w-[15%] m-auto">
          <button  data-aos="fade-up-down"  data-aos-duration="3000" className='text-[#0A2640] border-black dark:border-[white] dark:text-[white] text-[20px] leading-[28px] font-[700] bg-transparent rounded-[56px] border-[2px] pt-[16px] pb-[16px] pl-[56px] pr-[56px]'>{t("text37")}</button>
        </div>
      </div>
    <div className="container4b bg-[white] : dark:bg-[#0A2640] pb-[190px] pt-[100px]" >
      <div className="container">
        <h1 className='w-[716px] m-auto text-[48px] leading-[72px] font-normal text-center text-[#0A2640] : dark:text-[white] mb-[30px]'>{t("text38")}</h1>
        <div className="inputs text-center">
        <input   data-aos="flip-up"  data-aos-duration="3000" placeholder={t("text39")} className='outline-none pl-[10px] w-[370px] h-[56px] bg-[#0A2640] : dark:bg-[white] rounded-[240px] text-[white] : dark:text-[black]'/>
        <button   data-aos="flip-up"  data-aos-duration="3000" className='ml-[70px] mt-[30px] mr-[20px] pt-[16px] pb-[16px] pl-[56px] pr-[56px] bg-[#65E4A3] rounded-[56px]  leading-[28px] text-[20px] font-[700]'>{t("text40")}</button>
              
        </div>
          
      </div>
    </div>
  </div>
  )
}

export default Product
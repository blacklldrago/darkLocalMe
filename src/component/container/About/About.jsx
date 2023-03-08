
import './About.css'
import scot from './scot.png'
import an from './an.png'
import gareni from './gareni.png'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
function About ()  {
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
  return (<div>
    <div className="container1a bg-[#65E4A3] dark:bg-[#0A2640] pt-[100px] pb-[200px]" data-aos="zoom-in" data-aos-duration="3000">
    <div className='o'>

    <select className='bg-[black] text-[white] dark:bg-[white] dark:text-[black]'  onChange={handleChange} value = {lng}>
                <option value="en">En</option>
                <option value="ru">Ru</option>
        </select>
    </div>
      <div className='flex justify-evenly items-center flex-wrap'>
        <div>
          <p className='text-[#0A2640] dark:text-[white] text-[20px] leading-[32px] font-[400]'>{t("text1")}</p>
          <h1 className='text-[48px] leading-[72px] font-[400] w-[600px] text-[#0A2640] dark:text-[white]'>{t("text41")}</h1>
        </div>
        <div>
          <p className='w-[455px] text-[16px] leading-[28px] font-[400] text-[#0A2640] dark:text-[white]'>{t("text42")}</p>
        </div>
      </div>
    </div>
    <div className="container2a pt-[30px] pb-[150px]  bg-[white] dark:bg-[#0A2640]"  data-aos="zoom-in" data-aos-duration="3000">
      <div>
        <p className='text-center m-auto  text-[#0A2640] dark:text-[white] text-[20px] leading-[32px]'>{t("text43")}</p>
        <h1 className='text-center m-auto text-[#0A2640] dark:text-[white] w-[842px] pb-[20px] text-[48px] leading-[72px]'>{t("text44")}</h1>
      </div>
      <div className='flex items-center justify-evenly mt-[50px] mb-[50px] flex-wrap'>
        <div className='text-center'>
          <h1 className='text-[96px] leading-[56px] font-[400] text-[#0A2640] dark:text-[white] pb-[50px]'>120</h1>
          <p className='text-[24px] text-[#0A2640] dark:text-[white] leading-[36px] '>{t("text45")}</p>
        </div>
        <div className='text-center'>
          <h1 className='text-[96px] leading-[56px] font-[400] text-[#0A2640] dark:text-[white] pb-[50px]'>10.000</h1>
          <p className='text-[24px] text-[#0A2640] dark:text-[white] leading-[36px] '>{t("text45")}</p>
        </div>
        <div  className='text-center'>
          <h1 className='text-[96px] leading-[56px] font-[400] text-[#0A2640] dark:text-[white] pb-[50px]'>240</h1>
          <p className='text-[24px] text-[#0A2640] dark:text-[white]leading-[36px] dark:text-[white] '>{t("text45")}</p>
        </div>
      </div>
    </div>  
    <div className="container3a bg-[white] dark:bg-[#0A2640] text-[#0A2640] pt-[150px] pb-[200px] "  data-aos="zoom-in" data-aos-duration="3000"> 
      <div>
        <p className='text-[20px] w-[799px] m-[auto] leading-[32px] font-[400] text-[#0A2640] dark:text-[white]'>{t("text46")}</p>
        <h1 className='text-[48px] w-[799px] m-[auto] leading-[72px] font-[400] text-[#0A2640] dark:text-[white]'>{t("text44")}</h1>
        <p className='text-[20px] mt-[20px] w-[799px] m-[auto] leading-[32px] font-[400] text-[#0A2640] dark:text-[white]'>{t("text47")}</p>
      </div>
    </div>
    <div className="container4a pb-[150px] bg-[white] dark:bg-[#0A2640]"  data-aos="zoom-in" data-aos-duration="3000"> 
        <div className='mb-[100px] flex-wrap'>
          <p className='text-[20px] w-[799px] m-auto leading-[32px] text-[#777777] dark:text-[white]'>{t("text46")}</p>
          <h1  className='mt-[20px] mb-[20px] text-[48px] w-[799px] m-auto leading-[72px] text-[#000000] dark:text-[white]'>{t("text48")}</h1>
          <p  className='text-[20px] w-[799px] m-auto leading-[32px] text-[#777777] dark:text-[white]'>{t("text47")}</p>
        </div>
        <div className='flex justify-evenly flex-wrap ' >
            <div>
              <img src={scot} alt="" />
              <h1 className='text-[28px] mt-[20px] leading-[48px] text-[#000000] dark:text-[white]'>{t("text49")}</h1>
              <p className='text-[20px] leading-[32px] text-[#000000] dark:text-[white]'>{t("text50")}</p>
            </div>
            <div>
              <img src={scot} alt="" />
              <h1 className='text-[28px] mt-[20px] leading-[48px] text-[#000000] dark:text-[white]'>{t("text49")}</h1>
              <p className='text-[20px] leading-[32px] text-[#000000] dark:text-[white]'>{t("text50")}</p>
            </div>
            <div>
              <img src={scot} alt="" />
              <h1 className='text-[28px] mt-[20px] leading-[48px] text-[#000000] dark:text-[white]'>{t("text49")}</h1>
              <p className='text-[20px] mb-[20px] leading-[32px] text-[#000000] dark:text-[white]'>{t("text50")}</p>
            </div>
        </div>
        <div className='pp flex justify-evenly pt-[100px] flex-wrap'>
          <div>
            <div className='flex items-center gap-[20px]  mb-[25px] flex-wrap'>
              <div><img src={gareni} alt="" /></div>
              <div><h1 className='text-[black] text-[28px] leading-[48px]  dark:text-[white]'>{t("text51")}</h1> <p className='dark:text-[white]'>{t("text50")}</p></div>
            </div>
            <div className='flex items-center gap-[20px]  mb-[25px] flex-wrap'>
              <div><img src={an} alt="" /></div>
              <div><h1 className='text-[black] text-[28px] leading-[48px] dark:text-[white]'>{t("text52")}</h1> <p className='dark:text-[white]'>{t("text50")}</p></div>
            </div>
          </div>
          <div>
            <div className='flex items-center gap-[20px] mb-[25px] flex-wrap'>
              <div><img src={an} alt="" /></div>
              <div><h1 className='text-[black] text-[28px] leading-[48px] dark:text-[white]'>{t("text52")}</h1> <p className='dark:text-[white]'>{t("text50")}</p></div>
            </div>
            <div className='flex items-center gap-[20px]  mb-[25px] flex-wrap'>
              <div><img src={an} alt="" /></div>
              <div><h1 className='text-[black] text-[28px] leading-[48px] dark:text-[white]'>{t("text52")}</h1> <p className='dark:text-[white]'>{t("text50")}</p></div>
            </div>
          </div>
        </div>
    </div>
    <div className="container5a  bg-[white] dark:bg-[#0A2640] text-[white] pt-[100px] pb-[70px] "  data-aos="zoom-out" data-aos-duration="3000">
      <div>

      <p className='text-center  text-[20px] leading-[32px] text-[#0A2640] dark:text-[white]'>{t("text31")}</p>
      <h1 className='w-[842px] m-auto text-center text-[48px] leading-[72px] text-[#0A2640] dark:text-[white]'>{t("text53")}</h1>
      </div>
      <hr  className='not text-[white] w-[1200px] m-auto mt-[50px] mb-[100px]'/>
      
        <div className='w flex justify-evenly items-center mb-[100px] flex-wrap'>
          <div><h1 className='text-[48px] leading-[72px] text-[#0A2640] dark:text-[white]'>{t("text55")}<span className='text-[#69E6A6]'>{t("text57")}</span></h1></div>
          <div><p className='w-[509px] text-[20px] leading-[32px] text-[#0A2640] dark:text-[white]'>{t("text54")}</p></div>
        </div>
        <div className='w flex justify-evenly items-center mb-[100px] flex-wrap'>
          <div><h1 className='text-[48px] leading-[72px] text-[#0A2640] dark:text-[white]'>{t("text55")}<span className='text-[#69E6A6]'>{t("text57")}</span></h1></div>
          <div><p className='w-[509px] m-auto text-[20px] leading-[32px] text-[#0A2640] dark:text-[white]'>{t("text54")} </p></div>
        </div>
        <div className='w flex justify-evenly items-center mb-[100px] flex-wrap'>
          <div><h1 className='text-[48px] leading-[72px] text-[#0A2640] dark:text-[white]'>{t("text56")}<span className='text-[#69E6A6]'>{t("text58")}</span></h1></div>
          <div><p className='w-[509px] text-[20px] leading-[32px] text-[#0A2640] dark:text-[white]'>{t("text54")}</p></div>
        </div>
    </div>
    <div className="container6a  bg-[white] dark:bg-[#0A2640] pb-[190px]  pt-[50px]"  data-aos="zoom-out" data-aos-duration="3000" >
      <div className="container">
        <h1 className='w-[716px] m-auto text-[48px] leading-[72px] font-normal text-center text-[#0A2640] dark:text-[white] mb-[30px]'>{t("text38")}</h1>
        <div className="inputp text-center">
        <input placeholder={t("text39")} className='ll outline-none pl-[10px] w-[370px] h-[56px] bg-[#0A2640] dark:bg-[white] text-[white] dark:text-[black] rounded-[240px]'/>
        <button className='lb ml-[70px] mt-[30px] mr-[20px] pt-[16px] pb-[16px] pl-[56px] pr-[56px] bg-[#65E4A3] rounded-[56px] text-[#0A2640] dark:text-[white] leading-[28px] text-[20px] font-[700]'>{t("text40")}</button>
              
        </div>
          
      </div>
    </div>
  </div>
  )
}

export default About
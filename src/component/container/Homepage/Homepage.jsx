
import './Homepagestyle.css'
import hero from './hero.png'
import no from './no.png'
import g1 from './g1.png'
import g2 from './g2.png'
import g3 from './g3.png'
import man from './woman.png'
import check from './check.png'
import woman from './man.png'
import per from './per.png'
import sun from './sun.png'
import eye from './eye.png'
import albous from './albus.png'
import severus from './severus.png'
import potter from './potter.png'
import work from './work.png'
import down from './down.png'
import j1 from './j1.png'
import j2 from './j2.png'
import j3 from './j3.png'
import { Card, Card1 } from '../../card/card'
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { useTranslation } from 'react-i18next'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Homepage ()  {
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
  return (<div>
    
    
    <div className="container1h bg-[white] dark:bg-[#0A2640] pt-[100px] pb-[70px]" data-aos="fade-up-down"  data-aos-duration="3000">
    <div className='o'>

    <select  className='bg-[black] text-[white] dark:bg-[white] dark:text-[black]' onChange={handleChange} value = {lng}>
                <option value="en">En</option>
                <option value="ru">Ru</option>
        </select>
    </div>
      <div className="container">
          <div className="save flex justify-center gap-[50px] pb-[100px]">
            <div>
              <h1 className='w-[567px] font-[400] text-[48px] leading-[72px] text-[#0A2640] dark:text-[white]'>{t("text4")}</h1>
              <p className='pt-[20px] w-[567px] font-[400] text-[16px] leading-[28px] text-[#0A2640] dark:text-[white]'>{t("text5")}</p>
              <button className='ex mt-[30px] mr-[20px] pt-[16px] pb-[16px] pl-[56px] pr-[56px] bg-[#65E4A3] rounded-[56px] text-[#0A2640] dark:text-[white] leading-[28px] text-[20px] font-[700]'>{t("text6")}</button>
              <button className='text-[#0A2640] dark:text-[white] leading-[28px] text-[20px] font-[700] bg-transparent rounded-[56px] border-[2px]  border-black dark:border-white pt-[16px] pb-[16px] pl-[56px] pr-[56px]'>{t("text7")}</button>
            </div>
            <div>
                <img src={hero} alt="" />
            </div>
          </div>
          <div className='p w-[60%] m-auto'>
            <img src={no} alt="" />
          </div>

      </div>
    </div>
    <div className="container2h pt-[100px] pb-[200px] bg-[white] dark:bg-[#0A2640]"> 
      <div className="container">
        <p data-aos="flip-left" data-aos-duration="3000" className='text-[#777777]font-[400] text-[20px] leading-[32px] text-center dark:text-[white]'>{t("text12")}</p>
        <h1 data-aos="flip-left" data-aos-duration="3000" className='text-[#000000] dark:text-[white] text-[48px] font-[400] leading-[72px] text-center w-[800px] m-auto mt-[10px]'>{t("text13")}</h1>
        <div className='flex justify-evenly pt-[100px] flex-wrap'>
          <Card 
            imgUrl={g1}
            text1 = {t("text8")}
            text2 = {t("text9")}
            text3 = {t("text10")}
          />
          <Card
            imgUrl={g2}
            text1 = {t("text11")}
            text2 = {t("text9")}
            text3 = {t("text10")}
          />
          <Card
            imgUrl={g3}
            text1 = {t("text8")}
            text2 = {t("text9")}
            text3 = {t("text10")}
          />
        </div>
      </div>
    </div>
    <div className="container3h bg-[white] dark:bg-[#0A2640]">
      <div className="container">
        <div className="tot flex justify-evenly items-center flex-wrap">
          <div>
            <img className='man' src={man} alt="" />
          </div>
          <div data-aos="flip-left" data-aos-duration="3000">
            <h1 className='mb-[50px] w-[493px] text-[36px] font-normal leading-[56px] dark:text-[white]'>{t("text13")}</h1>
            <div  className='flex items-center gap-[10px] mb-[20px]'>
              <div>
                <img src={check} alt="" />
              </div>
              <div>
                <p  data-aos="flip-left" data-aos-duration="3000" className='dark:text-[white]'>{t("text14")}</p>
              </div>
            </div>
            <div  data-aos="flip-left" data-aos-duration="3000" className='flex items-center gap-[10px] mb-[20px]'>
              <div>
                <img src={check} alt="" />
              </div>
              <div>
                <p className='dark:text-[white]'>{t("text15")}</p>
              </div>
            </div>
            <div  className='flex items-center gap-[10px] mb-[20px]'>
              <div>
                <img src={check} alt="" />
              </div>
              <div>
                <p data-aos="flip-left" data-aos-duration="3000" className='dark:text-[white]'>{t("text16")}</p>
              </div>
            </div>
            <div>
              <button  className='w-[210px] h-[60px] bg-[#0A2640] dark:bg-[white] rounded-[56px] mt-[50px] mb-[100px] text-[#FFFFFF]  dark:text-[black] font-[700] text-[20px] leading-[28px]'>{t("text17")}</button>
            </div>
          </div>
        </div>
        <div className="tot1 flex justify-evenly items-center pt-[100px]  flex-wrap">
          <div>
            <h1 data-aos="flip-left" data-aos-duration="3000" className='mb-[50px] w-[493px] text-[36px] font-normal leading-[56px] dark:text-[white]'>{t("text13")}</h1>
            <div className='my mb-[20px] shadow-lg shadow-black-500/50 flex items-center w-[450px] h-[68px] bg-[#0A2640] gap-[10px]' >
              <div><img className='pl-[30px]' src={per} alt="" /></div>
              <div>
                 <p data-aos="flip-left" data-aos-duration="3000" className='text-[16px] font-semibold leading-[28px] text-[white]'>{t("text14")}</p>
              </div>
            </div>
            <div className='my mb-[20px] shadow-lg shadow-black-500/50 flex items-center w-[450px] h-[68px] bg-[white] gap-[10px]' >
              <div><img className='pl-[30px]' src={eye} alt="" /></div>
              <div>
                 <p className='text-[16px] font-semibold leading-[28px] text-[black]'>{t("text15")}</p>
              </div>
            </div>
            <div className='my mb-[200px] shadow-lg shadow-black-500/50 flex items-center w-[450px] h-[68px] bg-[white] gap-[10px] ' >
              <div><img className='pl-[30px]' src={sun} alt="" /></div>
              <div>
                 <p data-aos="flip-left" data-aos-duration="3000" className='text-[16px] font-semibold leading-[28px] text-[black]'>{t("text16")}</p>
              </div>
            </div>
          </div>
          <div>
            <img className='woman' src={woman} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="container4h  pt-[70px] pb-[200px] bg-[white] dark:bg-[#0A2640]" >
      <div className="container">
        <h1 data-aos="flip-left" data-aos-duration="3000" className='pb-[70px] text-[48px] font-[400] w-[900px]  leading-[72px] m-auto text-[black] dark:text-[white]'>{t("text18")}</h1>
        <div data-aos="flip-left" data-aos-duration="3000" className="feedback flex justify-center w-[80%] m-[auto] ">
        <>
      <Swiper 
        slidesPerView={1}
        spaceBetween={10}
        loop = {true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card1 text1={t("text19")}
          
          text2 = {t("text20")}
          text3 = {t("text21")}
          imgUrl={albous}
        />
        </SwiperSlide>
        <SwiperSlide>
        <Card1 text1={t("text22")}
        imgUrl={severus}
        text2 = {t("text23")}
        text3= {t("text24")}
        />
        </SwiperSlide>
        <SwiperSlide>
        <Card1 text1={t("text25")}
          imgUrl={potter}
          text2 = {t("text26")}
          text3 = {t("text27")}
        />

        </SwiperSlide>
        <SwiperSlide>
          <Card1 text1={t("text19")}
          
          text2 = {t("text20")}
          text3 = {t("text21")}
          imgUrl={albous}
        />
        </SwiperSlide>
        <SwiperSlide>
        <Card1 text1={t("text22")}
        imgUrl={severus}
        text2 = {t("text23")}
        text3= {t("text24")}
        />
        </SwiperSlide>

        <SwiperSlide>
        <Card1 text1={t("text25")}
          imgUrl={potter}
          text2 = {t("text26")}
          text3 = {t("text27")}
        />

        </SwiperSlide>
        
      </Swiper>
    </>
        </div>
      </div>
    </div>
    <div className="container5h pt-[100px] pb-[200px] bg-[white] dark:bg-[#0A2640]">
      <div className="container">
        <div className='ml-[300px] mb-[100px]'>
          <img className='work' src={work} alt="" />
        </div>
        <div  className='flex justify-around flex-wrap'>
          <div>
              <h1 data-aos="flip-left" data-aos-duration="3000" className='w-[500px] m-auto text-[36px] font-[400] leading-[56px] text-[black] dark:text-[white]'>{t("text28")}</h1>
          </div>
          <div>
            <div className='j flex items-center gap-[15px] mb-[50px] flex-wrap'>
              <div><p data-aos="flip-left" data-aos-duration="3000" className='font-normal text-[20px] leading-[32px] text-[black] dark:text-[white]'>{t("text29")}</p></div>
              <div><img className='down' src={down} alt="" /></div>
            </div>
            <div className='j flex items-center gap-[15px] flex-wrap'>
              <div><p className='font-normal text-[20px] leading-[32px] text-[black] dark:text-[white]'>{t("text30")}</p></div>
              <div><img className='down' src={down} alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container6h pt-[70px] pb-[200px] bg-[white] dark:bg-[#0A2640] ">
        <p className='text-[20px] text-[#777777] leading-[32px] font-normal text-center dark:text-[white]'>{t("text31")}</p>
        <h1 className='text-center text-[#000000] leading-[72px] text-[48px] w-[842px] m-auto dark:text-[white]'>{t("text32")}</h1>
        <div data-aos="flip-left" data-aos-duration="3000" className='flex justify-center mt-[50px] mb-[100px] gap-[50px] flex-wrap dark:text-[white] '>
          <div >
            <img src={j1} alt="" />
            <div  className='flex gap-[20px] mt-[10px] mb-[20px] '>
              <div>
                <p data-aos="flip-left" data-aos-duration="3000"  className='text-[16px] font-[700] leading-[28px] text-[black] dark:text-[white]'>{t("text33")}</p>
              </div>
              <div>
                <p data-aos="flip-left" data-aos-duration="3000" className='dark:text-[white]'>{t("text34")}</p>
              </div>
            </div>
            <p data-aos="flip-left" data-aos-duration="3000" className=' dark:text-[white] text-[20px] leading-[32px] text-[black font-normal] w-[300px] mb-[20px]'>{t("text35")}</p>
            <div className='flex gap-[20px] items-center'>
              <div>
                <img className='w-[30px] h-[30px]' src={potter} alt="" />
              </div>
              <div>
                <p data-aos="flip-left" data-aos-duration="3000" className='dark:text-[white]'>{t("text36")}</p>
              </div>
            </div>
          </div>
          <div>
            <img src={j1} alt="" />
            <div className='flex gap-[20px] mt-[10px] mb-[20px]'>
              <div>
                <p className=' dark:text-[white] text-[16px] font-[700] leading-[28px] text-[black]'>{t("text33")}</p>
              </div>
              <div>
                <p className='dark:text-[white]'>{t("text34")}</p>
              </div>
            </div>
            <p className='dark:text-[white] text-[20px] leading-[32px] text-[black font-normal] w-[300px] mb-[20px]'>{t("text35")}</p>
            <div className='flex items-center gap-[20px]'>
              <div>
                <img className='w-[30px] h-[30px]' src={potter} alt="" />
              </div>
              <div>
                <p className='dark:text-[white]'>{t("text36")}</p>
              </div>
            </div>
          </div>
          <div >
            <img src={j1} alt="" />
            <div className='flex gap-[20px] mt-[10px] mb-[20px] '>
              <div>
                <p className=' dark:text-[white] text-[16px] font-[700] leading-[28px] text-[black]'>{t("text33")}</p>
              </div>
              <div>
                <p>{t("text34")}</p>
              </div>
            </div>
            <p className='text-[20px] leading-[32px] text-[black font-normal] w-[300px] mb-[20px]'>{t("text35")}</p>
            <div className='flex gap-[20px] items-center'>
              <div>
                <img className='w-[30px] h-[30px]' src={potter} alt="" />
              </div>
              <div>
                <p>{t("text36")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cla w-[15%] m-auto">
          <button className='text-[#0A2640] dark:text-[white] border-black dark:border-[white] text-[20px] leading-[28px] font-[700] bg-transparent rounded-[56px] border-[2px] pt-[16px] pb-[16px] pl-[56px] pr-[56px]'>{t("text37")}</button>
        </div>
    </div>
    <div className="container7h  pt-[70px] pb-[170px]  bg-[white] dark:bg-[#0A2640]" >
      <div className="container">
        <h1 data-aos="flip-right" data-aos-duration="3000" className='w-[716px] m-auto text-[48px] leading-[72px] font-normal text-center text-[black] dark:text-[white] mb-[30px]'>{t("text38")}</h1>
        <div className="inputs w-[20%] m-auto">
        <input data-aos="fade-down" data-aos-duration="3000" placeholder={t("text39")} className='outline-none pl-[10px] w-[370px] h-[56px] bg-[black]  dark:bg-[white] rounded-[240px] text-[black] dark:text-[white]'/>
        <button className='ml-[70px] mt-[30px] mr-[20px] pt-[16px] pb-[16px] pl-[56px] pr-[56px] bg-[#65E4A3] rounded-[56px] text-[black] dark:text-[white] leading-[28px] text-[20px] font-[700]'>{t("text40")}</button>
              
        </div>
          
      </div>
    </div>
  </div>
  )
}

export default Homepage
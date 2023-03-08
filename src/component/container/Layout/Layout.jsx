import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from './logo.png'
import darklogo from './darklogo.png'
import './Layout.css'
import Switcher from '../../../Switcher'
import { useTranslation } from 'react-i18next'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Layout ()  {
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
        <div className='container'>
          <div className="navbar flex-wrap flex justify-evenly pt-[20px] pb-[23px] bg-[white] dark:bg-[#0A2640]">
            <div className="start" data-aos="fade-up-right"  data-aos-duration="3000">
              <Link to={"/"}><img src={logo} alt="" /></Link>
            </div>
            <div className="end" data-aos="fade-up-down"  data-aos-duration="3500">
              <ul data-aos="fade-up-right"  data-aos-duration="3000" className='flex gap-[30px] pt-[10px]'>
                <li className='font-semibold text-[16px] leading-[28px] text-[#0A2640] dark:text-[white]'><Link to={'/about'}>{t("text1")}</Link></li>
                <li className='font-semibold text-[16px] leading-[28px] text-[#0A2640] dark:text-[white]'><Link to={'/blog'}>{t("text2")}</Link></li>
                <button className='font-[700] text-[16px] leading-[24px] text-[white] bg-[#0A2640] dark:bg-[white] dark:text-[#0A2640] rounded-[24px] w-[100px]'>{t("text3")}</button>
              </ul>
            </div>
  
            <div>
              <Switcher/>
            </div>
          </div>
        <Outlet/>
        <div className='footer flex  justify-evenly bg-[white] dark:bg-[#0A2640]'>
          <div className='pt-[20px]'>
            <img src={darklogo} alt="" />
            <p className='w-[300px] font-normal text-[16px] leading-[28px] text-[#777777] dark:text-[white] pb-[80px] pt-[25px]'>{t("text63")}</p>
            <p className='font-normal text-[16px] leading-[28px]  text-[#777777] dark:text-[white]'>{t("text64")}</p>
          </div>
          <div className='pt-[80px]'>
            <h1 className='leading-[32px] font-[700] text-[20px]  dark:text-[white] text-[#000000]'>{t("text65")}</h1>
            <ul>
                <li className='leading-[32px] mb-[14px] mt-[14px] font-normal text-[20px] dark:text-[white] text-[#777777]'><Link to={'/'}>{t("text68")}</Link></li>
                <li className='leading-[32px] mb-[20px] font-normal text-[20px] dark:text-[white] text-[#777777]'><Link to={'/product'}>{t("text2")}</Link></li>
                <li className='leading-[32px] mb-[20px] font-normal text-[20px]  dark:text-[white] text-[#777777]'><Link to={'*'}>{t("text69")}</Link></li>
            </ul>
          </div>
          <div className='pt-[80px]'>
            <h1 className='leading-[32px] font-[700] text-[20px] text-[#000000] dark:text-[white]'>{t("text66")}</h1>
            <ul>
                <li className='leading-[32px] mb-[14px] mt-[14px] font-normal text-[20px] dark:text-[white] text-[#777777]'><Link to={'/'}>{t("text68")}</Link></li>
                <li className='leading-[32px] mb-[14px]  font-normal text-[20px] dark:text-[white] text-[#777777]'><Link to={'*'}>{t("text70")}</Link></li>
                <li className='leading-[32px] mb-[14px]  font-normal text-[20px] dark:text-[white] text-[#777777]'><Link to={'*'}>{t("text69")}</Link></li>
            </ul>
          </div>
          <div className='pt-[80px]'>
            <h1 className='leading-[32px] font-[700] text-[20px] text-[#000000] dark:text-[white]'>{t("text67")}</h1>
            <ul>
                <li className='leading-[32px] mb-[14px] mt-[14px]   font-normal dark:text-[white] text-[20px] text-[#777777]'><Link to={'*'}>{t("text71")}</Link></li>
                <li className='leading-[32px] mb-[14px]  font-normal text-[20px] dark:text-[white] text-[#777777]'><Link to={'/product'}>{t("text2")}</Link></li>
                <li className='leading-[32px] mb-[14px]  font-normal text-[20px]  dark:text-[white] selection:text-[#777777]'><Link to={'*'}>{t("text69")}</Link></li>
            </ul>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Layout
import React from 'react'
import s from './Slider.module.sass'

const Slider = (props) => {
    
    if (!props.photos) return null
    const photos = props.photos.split(',')
    const photosGroup = photos.map((img) => {
        return null
    })
    console.log(photosGroup)
    return (
        <div className={s.Slider}>
            <div className={s.ShadowLink}>Открыть все фото</div>
            <span className={s.SliderImgCount}>12 фото</span>

            <div className={s.SliderImg}>
                <div className={s.SliderFirstImg} style={{ 
                    backgroundImage: 'url("http://12.img.avito.st/1280x960/6029856812.jpg")',
                    height: '400px',
                    }} />
                <div className={s.SliderImgGroup}>
                    <div style={{ 
                        backgroundImage: 'url("http://12.img.avito.st/1280x960/6029856812.jpg")',
                        height: '200px',
                        }} />
                    <div style={{ 
                        backgroundImage: 'url("http://12.img.avito.st/1280x960/6029856812.jpg")',
                        height: '200px',
                        }} />
                    <div style={{ 
                        backgroundImage: 'url("http://12.img.avito.st/1280x960/6029856812.jpg")',
                        height: '200px',
                        }} />
                    <div style={{ 
                        backgroundImage: 'url("http://12.img.avito.st/1280x960/6029856812.jpg")',
                        height: '200px',
                        }} />
                </div>
            </div>
        </div>
    )
}

export default Slider
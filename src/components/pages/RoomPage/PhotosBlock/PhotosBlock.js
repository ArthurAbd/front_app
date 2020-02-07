import React from 'react'
import s from './PhotosBlock.module.sass'

const PhotosBlock = ({photos, toggleSlider}) => {
    
    if (!photos) return null

    const countPhotos = photos.length

    const firstPhoto = (
        <div className={s.PhotosBlockFirstImg} key={photos[0]} style={{ 
            backgroundImage: `url("${photos[0]}")`,
            height: '500px',
            }} />
    )
    
    const photosFromFirst = photos.slice(1, 5).map((img) => {

        return (
            <div key={img} style={{ 
                backgroundImage: `url("${img}")`,
                height: '250px',
                }} />
        )
    })
    
    return (
        <div className={s.PhotosBlock}>
            <div className={s.ShadowLink}>Открыть все фото</div>
            <span className={s.PhotosBlockImgCount}>{countPhotos} фото</span>

            <div className={s.PhotosBlockImg}>
                {firstPhoto}
                <div className={s.PhotosBlockImgGroup}>
                    {photosFromFirst}
                </div>
            </div>
        </div>
    )
}

export default PhotosBlock
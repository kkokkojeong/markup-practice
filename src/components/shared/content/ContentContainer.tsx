import React, { useState } from 'react';

import css from './Content.module.scss'

const ContentContainer = () => {
    const [imgSrc] = useState<string>("https://www.gstatic.com/youtube/img/promos/growth/864dc47e45a7a0b06602f73155980de282b939a6d0adc7bdcda231f965bf796a_640x48.png");

    return (
        <div className={css.container}>
            {/* 광고 관련 콘텐츠 */}
            <div className={css.advertisement_container}>
                <div className={css.advertisement_container_inner}>
                    {/* Blind Text */}
                    <h3 className={css.blind}>광고</h3>
                    {/* 이미지 */}
                    <img className={css.advertisement_container_image} src={imgSrc} alt="" />
                    <strong className={css.advertisement_container_title}>좋⁠아⁠하⁠는 콘⁠텐⁠츠⁠를 광⁠고 없⁠이 즐⁠기⁠세⁠요</strong>
                </div>
            </div>
        </div>
    );
}

export default ContentContainer;

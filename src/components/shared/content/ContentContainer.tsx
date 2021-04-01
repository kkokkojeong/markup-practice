import React, { useMemo, useState } from 'react';
import VideoItem from './video-item/VideoItem';

import mockContents from '../../../__mock__/contents.json';

import css from './Content.module.scss'


const ContentContainer = () => {
    const [imgSrc] = useState<string>("https://www.gstatic.com/youtube/img/promos/growth/864dc47e45a7a0b06602f73155980de282b939a6d0adc7bdcda231f965bf796a_640x48.png");

    // mock-data memorizing
    const contents: any = useMemo(() => {
        const { contentList } = mockContents;
        if (!contentList) {
            return null;
        }

        return contentList.map((content: any) => ({
            type: content.streaming ? 'streaming' : 'default',
            thumbnail: content.image.preview,
            profile: content.image.profile,
            duration: content && content.duration ? content.duration : null,
            title: content.title,
            channel: content.channel,
            date: content.date,
            count: content.count
        }));
    }, [])

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
            {/* 동영상 콘텐츠 */}
            <div className={css.content_container}>
                {/* Flow Section */}
                <div className={css.content_container_flow}>
                    <ul className={css.content_container_flow_list}>
                        {contents && contents.map((content: any, idx: number) => {
                            const { type, thumbnail, profile, duration, title, channel, date, count  } = content
                            const key = `${title}${idx}`;
                            console.log(thumbnail);
                            return (
                                <VideoItem 
                                    key={key}
                                    type={type}
                                    thumbnail={thumbnail}
                                    profile={profile}
                                    duration={duration}
                                    title={title}
                                    channel={channel}
                                    date={date}
                                    count={count}
                                />);
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ContentContainer;

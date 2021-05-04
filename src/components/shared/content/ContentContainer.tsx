import React, { useMemo } from 'react';
import VideoItem from './video-item/VideoItem';
import Advertisement from './advertisement/Advertisement';

import mockContents from '../../../__mock__/contents.json';

import css from './Content.module.scss'

const ContentContainer = () => {
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
            <Advertisement />

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

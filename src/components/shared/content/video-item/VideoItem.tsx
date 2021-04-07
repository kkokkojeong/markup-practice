/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ReactComponent as VideoAddList } from '../../../../assets/icons/VideoAddList.svg';
import { ReactComponent as VideoAddKeep } from '../../../../assets/icons/VideoAddKeep.svg';

import css from './VideoItem.module.scss';

type VidioType = 'default' | 'streaming';

interface Props {
    type: VidioType;
    thumbnail: string;
    profile: string;
    duration: Date | string;
    title: string;
    channel: {
        name: string;
        link: string;
        authorized?: boolean;
    };
    date: Date | string;
    count : number | string;
}

const VideoItem = ({
    type ='default', 
    thumbnail = '', 
    profile = '',
    title = '',
    channel,
    duration,
    count,
    date,
}: Props) => {
    const viewCount = (() => {
        const hits = typeof count === 'string' ? parseInt(count, 10) : count;
        if (hits > 10000) return `${Math.round(hits / 10000)}만명`;
        if (hits > 1000) return `${Math.round(hits / 1000)}천명`;
        return `${hits}명`;
    })();
    // TODO: 현재 날짜와 비교해서 날짜 구하는 계산 추가
    const latestDate = date;

    return (
        <>
            <li className={css.video_item}>
                {/* 영상 thumbnail, 재생시간 */}
                <div className={css.video_item_player}>
                    <a href='#' className={css.video_item_player_link}>
                        <img src={thumbnail} width="36" height="36" alt="" className={css.video_item_player_thumbnail} />
                        <span>{duration}</span>
                    </a>
                    {/* 영상 우측 클릭 영역 - 나중에 볼 동영상, 목록에 추가 */}
                    <div className={css.video_item_button}>
                        <button>
                            <VideoAddKeep />
                            <span className={css.video_item_button_text}>나중에 볼 동영상</span>
                        </button>
                        <button>
                            <VideoAddList />
                            <span className={css.video_item_button_text}>목록에 추가</span>
                        </button>
                    </div>
                </div>
                {/* 영상 설명 - profile */}
                <div className={css.video_item_desc}>
                    <a href='#' className={css.video_item_desc_profile}>
                        <img src={profile} width="36" height="36" alt="" />
                        <span>{duration}</span>
                    </a>
                    <div className={css.video_item_desc_text}>
                        <a href="#" className={css.video_item_desc_text_title}>{title}</a>
                        <a href="#" className={css.video_item_desc_text_channel}>
                            <span className={css.video_item_desc_text_channel_name}>{channel.name}</span>
                        </a>
                        <a href="#" className={css.video_item_desc_text_hits}>
                            <span>{`조회수 ${viewCount}`}</span>
                            <span>{latestDate}</span>
                        </a>
                  </div>
                </div>
            </li>
        </>
    );
}

export default VideoItem;
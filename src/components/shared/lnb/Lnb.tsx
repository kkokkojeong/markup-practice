/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { ReactComponent as LnbHome } from '../../../assets/icons/LnbHome.svg';
// import { ReactComponent as LnbPopular } from '../../../assets/icons/LnbPopular.svg';
import { ReactComponent as LnbSubscribe } from '../../../assets/icons/LnbSubscribe.svg';
import { ReactComponent as LnbBox } from '../../../assets/icons/LnbBox.svg';

import css from './Lnb.module.scss';
import { useHistory } from 'react-router-dom';
import RoutesPath from '../../../constant/RoutesPath';

/**
 * LNB (Local Navigation Bar) 정의
 */

 type LnbMenuType = 
  | 'home' // 홈
  | 'popular' // 인기 
  | 'subscribe' // 구독
  | 'box'; // 보관함

 const Lnb = () => {
    const history = useHistory();
    const [selectedLink, setSelectedLink] = useState<LnbMenuType>('home');

    const onClickLnb = (type: LnbMenuType) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // a tag 이벤트 버블링 방지
        setSelectedLink(type);

        if (type === 'subscribe') {
            history.push(RoutesPath.Subscriptions)
        }
    }

    return (
        <div className={css.lnb_container}>
            <ul role="menu">
                {/* Home */}
                <li role="presentation" className={`${css.lnb_container_link_list} ${selectedLink === 'home' ? `${css.link_is_selected}` : ''}`}>
                    <a href='#' className={`${css.lnb_container_link}`} onClick={onClickLnb('home')}>
                        <LnbHome className={`${css.lnb_container_link_icon} ${css.link_is_selected}`}/>
                        <span className={css.lnb_container_link_text}>홈</span>
                    </a>
                </li>
                {/* 인기 */}
                {/* <li role="presentation" className={`${css.lnb_container_link_list} ${selectedLink === 'popular' ? `${css.link_is_selected}` : ''}`}>
                    <a href='#' className={`${css.lnb_container_link}`} onClick={onClickLnb('popular')}>
                        <LnbPopular className={css.lnb_container_link_icon}/>
                        <span className={css.lnb_container_link_text}>인기</span>
                    </a>
                </li> */}
                {/* 구독 */}
                <li role="presentation" className={`${css.lnb_container_link_list} ${selectedLink === 'subscribe' ? `${css.link_is_selected}` : ''}`}>
                    <a href='#' className={`${css.lnb_container_link}`} onClick={onClickLnb('subscribe')}>
                        <LnbSubscribe className={css.lnb_container_link_icon}/>
                        <span className={css.lnb_container_link_text}>구독</span>
                    </a>
                </li>
                {/* 보관함 */}
                <li role="presentation" className={`${css.lnb_container_link_list} ${selectedLink === 'box' ? `${css.link_is_selected}` : ''}`}>
                    <a href='#' className={`${css.lnb_container_link}`} onClick={onClickLnb('box')}>
                        <LnbBox className={css.lnb_container_link_icon}/>
                        <span className={css.lnb_container_link_text}>보관함</span>
                    </a>
                </li>
            </ul>
        </div>
    );
 }

 export default Lnb;
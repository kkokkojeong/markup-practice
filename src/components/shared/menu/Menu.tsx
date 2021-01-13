import React from 'react'
import { ReactComponent as MenuTvIcon } from '../../../assets/icons/MenuTv.svg';
import { ReactComponent as MenuMusicIcon } from '../../../assets/icons/MenuMusic.svg';
import { ReactComponent as MenuKidsIcon } from '../../../assets/icons/MenuKids.svg';
import { ReactComponent as MenuAcademyIcon } from '../../../assets/icons/MenuAcademy.svg';
import { ReactComponent as MenuArtistsIcon } from '../../../assets/icons/MenuArtists.svg';

import css from './Menu.module.scss';

type MenuType = 
| 'tv'// tv
| 'music' // music
| 'kids' // kids
| 'academy' // academy
| 'artists'; // artists

const Menu = () => {

    const onClickMenu = (type: MenuType) => (e: React.MouseEvent<HTMLButtonElement>) => {
        let url;
        switch(type) {
            case 'tv':
                url = 'https://tv.youtube.com/'
                break;
            default:
                break;
        }
        if (!url) return;
        window.open(url);
    }

    return (
        <div className={css.menu}>
            {/* YouTube TV */}
            <div className={css.menu_section}>
                <button type="button" className={css.menu_item} onClick={onClickMenu('tv')}>
                    <MenuTvIcon />
                    <span className={css.menu_item_text}>YouTube TV</span>
                </button>
            </div>
            {/* YouTube Music */}
            <div className={css.menu_section}>
                <button type="button" className={css.menu_item} onClick={onClickMenu('music')}>
                    <MenuMusicIcon />
                    <span className={css.menu_item_text}>YouTube Music</span>
                </button>
            </div>
            {/* YouTube Kids */}
            <div className={css.menu_section}>
                <button type="button" className={css.menu_item} onClick={onClickMenu('kids')}>
                    <MenuKidsIcon />
                    <span className={css.menu_item_text}>YouTube Kids</span>
                </button>
            </div>
            {/* 크리에이터 아카데미 */}
            <div className={css.menu_section}>
                <button type="button" className={css.menu_item} onClick={onClickMenu('academy')}>
                    <MenuAcademyIcon />
                    <span className={css.menu_item_text}>크리에이터 아카데미</span>
                </button>
            </div>
            {/* YouTube for Artists*/}
            <div className={css.menu_section}>
                <button type="button" className={css.menu_item} onClick={onClickMenu('artists')}>
                    <MenuArtistsIcon />
                    <span className={css.menu_item_text}>YouTube Artists</span>
                </button>
            </div>
        </div>
    )
}

export default Menu;
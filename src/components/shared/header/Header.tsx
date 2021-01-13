import React, { ReactNode, useState } from 'react';
import { ReactComponent as LnbIcon } from '../../../assets/icons/Lnb.svg';
import { ReactComponent as LogoIcon } from '../../../assets/icons/Logo.svg';
import { ReactComponent as SearchIcon } from '../../../assets/icons/Search.svg';
import { ReactComponent as UploadIcon } from '../../../assets/icons/Upload.svg';
import { ReactComponent as MenuIcon } from '../../../assets/icons/Menu.svg';
import { ReactComponent as AlertIcon } from '../../../assets/icons/Alert.svg';
import Menu from '../menu/Menu';

import css from './Header.module.scss';

interface Props {
    children?: ReactNode;
}

const Header = ({children}: Props) => {

    const [showMenu, setShowMenu] = useState(false);
    
    // Header click event handler
    const onClickLnb = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('onClickLnb', e);
    }
    const onClickLogo = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('onClickLogo', e);
    }
    const onClickSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('onClickSearch', e);
    }
    const onClickUpload = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('onClickUpload', e);
    }
    const onClickMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        setShowMenu(!showMenu);
    }
    const onClickAlert = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('onClickAlert', e);
    }
    const onClickProfile = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('onClickProfile', e);
    }

    return (
        <header className={css.header}>
            {/* left section */}
            <div className={css.left_header}>
                <button className={css.button_lnb} type="button" onClick={onClickLnb}>
                    <span className={css.blind}>메뉴</span>
                    <LnbIcon className={css.icon_menu} />
                </button>
                <h1 className={css.logo}>
                    <button className={`${css.link} ${css.icon_youtube}`} type="button" onClick={onClickLogo}>
                        <span className={css.blind}>YouTube</span>
                        <LogoIcon className={css.icon} />
                    </button>
                    <span className={css.unit_nation}>KR</span>
                </h1>
            </div>
            {/* right section */}
            <div className={css.right_header}>
                {/* serach */}
                <div className={css.search_area}>
                    <button className={css.button_search} type="button" onClick={onClickSearch}>
                        <span className={css.blind}>검색</span>
                        <SearchIcon className={css.icon} />
                    </button>
                </div>
                {/* upload */}
                <div className={css.upload_area} >
                    <button className={css.button_upload} type="button" onClick={onClickUpload}>
                        <span className={css.blind}>업로드</span>
                        <UploadIcon className={css.icon} />
                    </button>
                </div>
                {/* app-menu */}
                <div className={css.menu_area}>
                    <button className={css.button_menu} type="button" onClick={onClickMenu}>
                        <span className={css.blind}>메뉴</span>
                        <MenuIcon className={css.icon} />
                    </button>
                    {showMenu && (
                        <Menu />
                    )}
                </div>
                {/* alert */}
                <div className={css.menu_area}>
                    <button className={css.button_alert} type="button" onClick={onClickAlert}>
                        <span className={css.blind}>알람</span>
                        <AlertIcon className={css.icon} />
                    </button>
                </div>
                {/* my profile */}
                <div className={css.profile_area}>
                    <button className={css.button_profile} type="button" onClick={onClickProfile}>
                        <span className={css.blind}>프로필</span>
                        <img alt="profile" loading='lazy' height="32" width="32" src="https://yt3.ggpht.com/yti/ANoDKi6R-VadvdrJauvy555w4QGnNIAtPWVdPY7Xw72_Zw=s88-c-k-c0x00ffffff-no-rj-mo" />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
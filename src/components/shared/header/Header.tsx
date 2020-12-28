import React, { ReactNode } from 'react';
import { ReactComponent as LnbIcon } from '../../../assets/icons/Lnb.svg';
import { ReactComponent as LogoIcon } from '../../../assets/icons/Logo.svg';

interface Props {
    children?: ReactNode;
}

const Header = ({children}: Props) => {
    
    // Header click event handler
    const onClickLnb = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('onClickLnb', e);
    }
    const onClickLogo = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('onClickLogo', e);
    }

    return (
        <header>
            {/* left section */}
            <div>
                <button type="button" onClick={onClickLnb}>
                    <span>메뉴</span>
                    <LnbIcon />
                </button>
            </div>
            {/* right section */}
            <div>
                <h1>
                    <button type="button" onClick={onClickLogo}>
                        <span>YouTube</span>
                        <LogoIcon />
                    </button>
                </h1>
            </div>
        </header>
    );
}

export default Header;
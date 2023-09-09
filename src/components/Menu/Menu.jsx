import s from './Menu.module.scss';

export const Menu = () => {
    return (
        <ul className={s.menu}>
            <li className={s.menu_item}>
                <a href="#strong" className={s.menu_link}>Strong</a>
            </li>   
            <li className={s.menu_item}>
                <a href="#light" className={s.menu_link}>Light</a>
            </li>  
            <li className={s.menu_item}>
                <a href="#clear" className={s.menu_link}>Clear</a>
            </li>  
            <li className={s.menu_item}>
                <a href="#no_alcohol" className={s.menu_link}>No Alcohol</a>
            </li> 
            <li className={s.menu_item}>
                <a href="#hookah" className={s.menu_link}>Hookah</a>
            </li> 
        </ul> 
    );
};


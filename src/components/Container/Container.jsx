import s from './Container.module.scss';

export default function Container({ children }) {
    return <div className={s.container}>
        {children}
    </div>
}
import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

export function Loader() {
    return (
        <div className={css.backdrop}>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#000000"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    )
}
import Image from 'next/image';
import FooterCss from '../src/styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={FooterCss.container}>
            <div className={FooterCss.wrapper}>
                <div className={FooterCss.image} />
            </div>
        </div>
    );
}

export default Footer;

import PropTypes from 'prop-types';
import styles from './Arts.module.css';
import { useRef } from 'react';
import Slider from 'react-slick';
import Title from '../Title/Title';
import SliderButton from '../SliderButton/SliderButton';
import artItem1 from '../../assets/artItem1.png';
import artItem2 from '../../assets/artItem2.png';
import artItem3 from '../../assets/artItem3.png';
import artItem4 from '../../assets/artItem4.png';
import artItem5 from '../../assets/artItem5.png';
import artItem6 from '../../assets/artItem6.png';

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Arts = ({ artsRef }) => {
  const slider = useRef(null);
  return (
    <div ref={artsRef} className={styles.wrap}>
      <div className={styles.inner}>
        <Title>COLLECTION</Title>
        <Slider arrows={false} ref={slider} {...settings}>
          <div className={styles.item}>
            <img src={artItem1} alt="art" />
          </div>
          <div className={styles.item}>
            <img src={artItem2} alt="art" />
          </div>
          <div className={styles.item}>
            <img src={artItem3} alt="art" />
          </div>
          <div className={styles.item}>
            <img src={artItem4} alt="art" />
          </div>
          <div className={styles.item}>
            <img src={artItem5} alt="art" />
          </div>
          <div className={styles.item}>
            <img src={artItem6} alt="art" />
          </div>
        </Slider>
        <div className={styles.buttons}>
          <SliderButton onClick={() => slider?.current?.slickPrev()}>Prev</SliderButton>
          <SliderButton onClick={() => slider?.current?.slickNext()}>Next</SliderButton>
        </div>
      </div>
    </div>
  );
};

Arts.propTypes = {
  artsRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(Element) })]),
};
export default Arts;


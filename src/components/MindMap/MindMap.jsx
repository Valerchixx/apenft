import PropTypes from 'prop-types';
import { useRef } from 'react';
import MindCard from '../MindCard/MindCard';
import styles from './MindMap.module.css';
import Slider from 'react-slick';
import SliderButton from '../SliderButton/SliderButton';
import Title from '../Title/Title';
import LinkCard from '../LinkCard/LinkCard';
import { useOnDevice } from '../../hooks/useOnDevice';

const DATA_CARDS = [
  {
    title: 'YAPE DROP',
    description:
      'All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own',
  },
  {
    title: 'Token',
    description:
      'Launch your own token, the proceeds of which will go to a global fund to LAUNCH YACHT CLUB AND PROMOTE it',
  },
  {
    title: 'New Collection',
    description: 'Launch of the 2nd YACHT Collection Releasing the first version of the Ape Slam Game',
  },
];

const MindMap = ({ mindMapRef }) => {
  const slider = useRef(null);
  const onMobile = useOnDevice();
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div ref={mindMapRef} className={styles.wrap}>
      <div className={styles.inner}>
        <Title>MIND map</Title>
        {onMobile && (
          <>
            <Slider arrows={false} ref={slider} className={styles.slider} {...settings}>
              {DATA_CARDS.map((item) => (
                <MindCard key={item.title} card={item} />
              ))}
              <LinkCard />
            </Slider>
            <div className={styles.buttons}>
              <SliderButton onClick={() => slider?.current?.slickPrev()}>Prev</SliderButton>
              <SliderButton onClick={() => slider?.current?.slickNext()}>Next</SliderButton>
            </div>
          </>
        )}
        {!onMobile && (
          <div className={styles.cardsWrap}>
            {DATA_CARDS.map((item) => (
              <MindCard key={item.title} card={item} />
            ))}
            <LinkCard />
          </div>
        )}
      </div>
    </div>
  );
};
MindMap.propTypes = {
  mindMapRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(Element) })]),
};
export default MindMap;


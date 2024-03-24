import AccordionItem from '../AccordionItem/AccordionItem';
import { useState } from 'react';
import faqItem1 from '../../assets/faqItem1.png';
import faqItem2 from '../../assets/faqItem2.png';
import faqItem3 from '../../assets/faqItem3.png';
import faqItem4 from '../../assets/faqItem4.png';
import styles from './Accordion.module.css';

const DATA = [
  {
    title: 'WHAT IS AN NFT COLLECTION?',
    content:
      'Launch your own token, the proceeds of which will go to a global fund to LAUNCH YACHT CLUB AND PROMOTE it',
    defaultOpen: true,
    img: faqItem1,
  },
  {
    title: 'HOW DO I PURCHASE NFTS FROM A COLLECTION?',
    content:
      'To purchase nfts from a collection, you typically need to use cryptocurrency on a blockchain0based marketplace.',
    defaultOpen: false,
    img: faqItem2,
  },
  {
    title: 'CAN I SELL OR TRADE NFTS FROM A COLLECTION?',
    content: 'Yes, you can sell or trade NFTs from a collection like you would other digital assets.',
    defaultOpen: false,
    img: faqItem3,
  },
  {
    title: 'WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?',
    content:
      "As an NFT owner, you can own, transfer, potentially access exclusive content, resell, but don't automatically get copyright or intellectual property rights.",
    defaultOpen: false,
    img: faqItem4,
  },
];

const Accordion = () => {
  const [openKey, setOpenKey] = useState(0);

  const handleOpenItem = (key) => {
    setOpenKey(openKey !== key ? key : null);
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        {DATA.map((item, index) => (
          <AccordionItem
            index={index}
            key={item.title}
            item={item}
            handleOpenItem={handleOpenItem}
            isActive={openKey == index}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;


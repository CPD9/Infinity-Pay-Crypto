import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { TypeAnimation } from "react-type-animation";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        The First Contactless <br className="sm:block hidden" /> Ecosystem.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Track, connect and scale both your online and offline assets on the go.
        <TypeAnimation
              sequence={[
                'Just a tap away from a brand new experience with the Infinity Card.', // Types 'One'
                1000, // Waits 2s
                'Just a tap away from a brand new experience with the Infinity Pay.', // Deletes 'One' and types 'Two'
                1000, // Waits 2s
                'Just a tap away from a brand new experience with the Infinity Links.', // Types 'Three' without deleting 'Two'
                1000,
                'Just a tap away from a brand new experience with the Infinity Lens.',
                1000,
                'Just a tap away from a brand new experience with the Infinity Wallet.',
                1000,
                'Just a tap away from a brand new experience with the Infinity Loop.',
                500,
                'Just a tap away from a brand new experience with the Magic Share App.',
                1000,
              ]}
              wrapper="p"
              cursor={false}
              repeat={Infinity}
              className={styles.paragraph}
            />
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;

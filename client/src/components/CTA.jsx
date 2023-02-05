import styles from "../style";
import Button from "./Button";
import { TypeAnimation } from 'react-type-animation';

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Save The Planet One Tap At A Time!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        88% of all cards and flyers are thown away with the first week of receiving then. The Infinity Card solves that by becoming any card you need on the go! Save the trees with your brand new ecofriendly & intelligent card.
      </p>
    </div>

    <div id='get_started' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
    <TypeAnimation
              sequence={[
                'Start Here', // Types 'One'
                2000, // Waits 2s
                'Start Now', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'Start Saving The Planet', // Types 'Three' without deleting 'Two'
                2000,              
              ]}
              wrapper="h2"
              cursor={false}
              repeat={Infinity}
              className={styles.heading2}
            />
      <form action="" method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className={styles.paragraph}> Name </label>
            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="name" placeholder="beautiful" />
          </div>
          
          <div className="flex flex-col">
            <label className={styles.paragraph}> Email </label>
            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email" placeholder="people" />
          </div>

          <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Button />
          </div>
          
        </div>
      </form>
    </div>

    
  </section>
);

export default CTA;

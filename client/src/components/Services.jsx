import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { TypeAnimation } from "react-type-animation";


const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
          Services That We
          <br />
          <TypeAnimation
              sequence={[
                'Continue To Expand.', // Types 'One'
                1000, // Waits 2s
                'Continue To Imporve.', // Types 'One'
                1000, // Waits 2s
                'Continue To Explore.', // Deletes 'One' and types 'Two'
                1000, // Waits 2s
                'Continue To Upgrade.', // Types 'Three' without deleting 'Two'
                1000,
                'Continue To Secure.',
                500,
                'Continue To Scale.',
                1000,
              ]}
              wrapper="h1"
              cursor={false}
              repeat={Infinity}
              className={"text-white text-3xl sm:text-5xl py-2 text-gradient"}
            />
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
        Explore the world of Web 3 with smart contracts and NFTs that you own. Our user-friendly services make it easy for you to navigate and manage your online portfolio & assets. <br /><br/>
        Invest with confidence, knowing that we are your reliable partner in the world of digital finance. Join us now and take advantage of the many benefits we have to offer <a href="">Mercuoory.crypto</a>.

        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security Gurantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Your security is our top priority. Utilizing smart contracts and blockchain technology, The Infinity Pay app ensures the privacy and protection of your assets around the clock. You can be confident that your investments are safe with us."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best Exchange Rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Our exchange rates are unbeatable. We strive to offer the most competitive prices in the market, so you can maximize your returns."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Light-Speed Transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Your transactions are moving accross the globe at the speed of light. You'll never have to wait long for your transfers to be processed. You are just one tap away."
        />
      </div>
    </div>
  </div>
);

export default Services;
import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import logo from "../../images/logo.png";



import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Infinity<TypeAnimation
              sequence={[
                'PAY', // Types 'One'
                1000, // Waits 1s
                'PAY beta', // Deletes 'One' and types 'Two'
                10000, // Waits 1s
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className={"text-white text-3xl sm:text-5xl py-2 text-gradient"}
            />
          </h1>
          <h1 className="text-3xl sm:text-5xl text-white py-1">
            <br/>Global Transactions <br/> Simplified.
          </h1>
          <TypeAnimation
              sequence={[
                'Say goodbye to paper receipts! Begin by exploring the world of crypto.', 
                1000, 
                'Say goodbye to paper receipts! Begin by exploring the world of crypto. Easily connect to your wallet and transfer your cryptocurrencies, on the Infinity Pay™️ app.', 
                1000, 
                'Say goodbye to paper receipts! Begin by exploring the world of crypto. Easily connect to your wallet and transfer your cryptocurrencies, on the Infinity Pay™️ app. Store your digital receipts for transactions securly on the blockchain as an NFT connected to your Infinity Wallet.', 
                2000, 
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
              className={"text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base"}
            />
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Trust
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Control
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Transparancy
            </div>
          </div>
        </div>

            {/* This is the infinity card */}
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                <img src={logo} alt="logo" className="w-32" />
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} content="settings" position="top" className="hover:drop-shadow-xl hover:bg-light-gray" color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Infinity Card
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading
              ? ( <Loader />
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send Now
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
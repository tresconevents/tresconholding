import React from 'react';
import Image from 'next/image';

const MessageContentComponent = () => {
  return (
    <div className='h-full flex flex-col justify-center lg:p-8 p-4 relative'>
      <div className='flex flex-col lg:flex-row items-start lg:items-start  lg:gap-12'>
        <div className='flex-shrink-0 mb-4 lg:mb-0 mt-20 lg:mt-[10px] lg:mr-4'>
          <Image
            src="/quotation_img.svg"
            alt="Quote"
            width={57}
            height={193}
            className="2xl:w-[50px] 2xl:h-[50px] xl:w-[53px] xl:h-193px] lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] w-[30px]"
            objectFit="contain"
          />
        </div>
        <p className='text-white text-left mb-24 text-[18px] xl:text-[24px] lg:text-[16px] md:text-[18px] leading-relaxed font-[400] font-manrope'>
          At Trescon Holdings, we believe in <br/>the power of innovation to transform <br/> industries and create sustainable <br/>value. Our commitment is to support  <br /> visionary entrepreneurs and <br /> businesses that share our passion <br /> for driving meaningful change.
        </p>
      </div>
      <div className='absolute bottom-[15px] right-[0px] rotate-[346deg] lg:rotate-0 lg:bottom-[0px] lg:right-[0px] z-10'>
        <Image
          src="/messageDotImage.png"
          alt="Dot Pattern"
          width={800}
          height={600}
          className="2xl:w-[600px] 2xl:h-[300px] xl:w-[480px] xl:h-[235px] lg:w-[376px] lg:h-[200px] md:w-[300px] md:h-[200px] w-[263px] h-[157px] "
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default MessageContentComponent;

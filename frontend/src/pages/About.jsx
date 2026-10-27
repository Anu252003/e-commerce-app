import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t border-gray-200'>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img
          src={assets.about_img}
          className='w-full md:max-w-[450px]'
          alt=''
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            At Forever, we believe fashion is more than just clothing — it's a
            way to express your personality and confidence. Our goal is to bring
            you stylish, comfortable, and high-quality clothing that suits your
            everyday lifestyle. From casual wear to modern fashion essentials,
            we carefully select products that combine style, comfort, and
            affordability.
          </p>
          <p>
            We are committed to making your shopping experience simple,
            enjoyable, and convenient. With a wide range of collections, easy
            browsing, and a customer-focused approach, we strive to help you
            find outfits that match your unique style. At Forever, your
            satisfaction inspires us to keep improving and bringing you the
            latest fashion trends.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Our mission is to make fashion accessible, affordable, and enjoyable
            for everyone. At Forever, we aim to provide high-quality, stylish,
            and comfortable clothing that helps people express their
            individuality and feel confident every day. We are committed to
            offering a smooth and convenient online shopping experience,
            delivering value to our customers, and continuously improving our
            collections to meet their changing fashion needs.
          </p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className='flex flex-col md:flex-row text-sm md:20'>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;

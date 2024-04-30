import { motion } from "framer-motion";
import MainLayout from "../layout/MainLayout";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
      h-screen w-screen
      flex flex-col
      justify-center
      `}
      // initial={{
      //   opacity: 0,
      //   y: 0,
      // }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  )
}

export const Interface = (props) => {

  return <>
    {/* <MainLayout> */}
      <div className="flex flex-col items-center w-screen">
      <AccueilSection />
      <AboutSection />
      <ServicesSection />
    </div>
    {/* </MainLayout> */}

  </>;
};

const AccueilSection = () => {
  return (
    <Section>
      <div className="home">
        <div className="bg-[url('./images/tokuyukikaku.jpg')] w-full h-96 2md:h-screen bg-center bg-cover">
          <div className="h-full items-end 2md:items-center flex justify-center 2md:justify-end">
            <div className="bg-white bg-opacity-55 w-full 2md:w-1/3 lg:w-1/4 flex flex-col p-3 2md:rounded-s-sm shadow-md">
              <h1 className="text-darkpink text-3xl">心の温もり。</h1>
              <p className="text-lg">幸福を大切にし、安心感を提供することを使命とし、心からのケアとサポートを通じて、共に歩んでいきます。</p>
            </div>
          </div>
        </div>



      </div>
    </Section>
  )
}

const AboutSection = () => {

  return (
    <Section>
      <div>
        hello
      </div>
    </Section>
  );
};

const ServicesSection = () => {
  return (
    <Section>
      <div>Services</div>
    </Section>
  );
};

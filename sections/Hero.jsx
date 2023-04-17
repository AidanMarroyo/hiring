'use client';

import { motion } from 'framer-motion';
import { navVariants, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <div>
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="pt-8 relative"
    >
      <div className="pl-40 mx-auto flex justify-start">
        <img
          src="/logotrans.png"
          alt="IPGLOGO"
          className="w-[100px] h-[80px]object-contain"
        />
      </div>
    </motion.nav>
    <section className="outter option2">
      <video autoPlay loop playsInline muted>
        <source src="/ipg.mp4" type="video/mp4" />
      </video>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div variants={textVariant(1.2)}>
          <div className="callout">
            <h2>Welcome to International Protection Group</h2>
            <h3>Elite security for a changing world</h3>

            <div className="flex justify-start flex-row gap-8 mt-5">
              <button type="submit" className="button">
                <a
                  href="https://app.useanvil.com/weld/royoltydigital/ipg-security-guard-application-form"
                  className="inner"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apply Today
                </a>
              </button>
              <button type="submit" className="button">
                <a
                  href="https://ipginternationalprotectiongroup.com/"
                  className="inner"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn More
                </a>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  </div>
);

export default Hero;

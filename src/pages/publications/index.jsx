/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { ArrowForwardRounded, School } from '@material-ui/icons';
import { Icon } from '@iconify/react';
import researchgateIcon from '@iconify-icons/fa-brands/researchgate';
import linkChain from '@iconify-icons/akar-icons/link-chain';
import { Link } from 'gatsby';
import Seo from '../../shared/components/seo';
import Header from '../../shared/components/header';
import SiteHeader from '../../shared/components/site-header';
import Footer from '../../shared/components/footer';
import SubHeader from '../../shared/components/sub-header';
import SocialWebsites from '../../shared/models/SocialWebsites';

// npm install --save-dev @iconify/react @iconify-icons/fa-brands

const Publications = () => (
  <>
    <Seo title="Publications"/>
    <main className="layout">
      <SiteHeader>
        <Header/>
        <SubHeader title="Publications"/>
      </SiteHeader>
      <div className="flex pl-2 pr-2 mt-xl w-full h-auto font-">
        <aside className="sticky self-start h-auto top-0 h-screen-1/10 w-2/5 py-16 px-8 m-8">
          <p className="text-md text-justify ml-2.5">
            My research interests span out in multiple fields, namely aerospace, automotive,
            robotics, signal processing and applied mathematics.
            <br/>
            <br/>
            In the past I have done research in the field of signal processing applied to
            biological signals which led to my first published article. Nonetheless,
            I'm now focused in problems such as control, navigation, and localization driven
            by deep learning and computer vision approaches.
            <br/>
            <br/>
            You can also check my research profiles below.
          </p>
          <div className="flex flex-row justify-center mt-4">
            <a aria-label="google-scholar" className="site-external-link text-sm hover:text-black" href={SocialWebsites.GOOGLE_SCHOLAR}>
              <School id="linkedin" fontSize="inherit"/>
              <span>Google Scholar</span>
            </a>
            <a aria-label="research-gate" className="site-external-link text-sm hover:text-black" href={SocialWebsites.RESEARCH_GATE}>
              <Icon icon={researchgateIcon}/>
              <span>Research Gate</span>
            </a>
          </div>

        </aside>
        <div className="publications">
          <div className="flex flex-row">
            <div className="anchor">
              <Link to="/publications#hss">
                <Icon icon={linkChain} width="1rem" height="1rem"/>
              </Link>
            </div>
            <div className="flex flex-col">
              <p id="hss" className="inline text-b-gray-200 font-semibold text-2xl helvetica-now-bold">
                Deep Recurrent Learning for Heart Sound Segmentation based on
                Instantaneous Frequency Features
              </p>
              <p>
                A. J. Gaona, P. D. Arini, ”Deep Recurrent Learning for Heart Sounds Segmentation
                based on Instantaneous Frequency Features”. Revista Elektron, Vol. 4, No. 2,
                pp 52‑57 (2020).
              </p>
              <a
                href="http://elektron.fi.uba.ar/index.php/elektron/article/view/101/212"
                className="pb-12 pt-4 hover:text-black underline transform hover:translate-x-1 transition duration-200"
              >
                <ArrowForwardRounded fontSize="small"/>
                Go to
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  </>
);

export default Publications;

import React from "react";
import ProductIntro from "../components/Product/ProductIntro";
import Layout from "../layout/layout";
import styled from "styled-components";
import ProductImg from "../components/Product/ProductImg";

import HERO from "../images/hydro/hero.png";
import Video_1 from "../images/hydro/video_1.mp4";
import Video_2 from "../images/hydro/video_2.mp4";
import Video_3 from "../images/hydro/video_3.mp4";
import Img_1 from "../images/hydro/img_1.png";
import Img_2 from "../images/hydro/img_2.png";
import Img_3 from "../images/hydro/img_3.png";
import Img_4 from "../images/hydro/img_4.png";
import Catalogue from "../images/hydro/catalogue.pdf";

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & video {
    width: 90%;
    max-width: var(--width);
    margin-bottom: 50px;
    border-radius: 20px;
  }
`;

const Images = [
  {
    imgPath: Img_1,
  },
  {
    imgPath: Img_2,
  },
  {
    imgPath: Img_3,
  },
  {
    imgPath: Img_4,
  },
];

// markup
const HydroPage = () => {
  return (
    <Layout>
      <ProductIntro
        title="Magnet Pump System"
        subTitle="TNG's magnet pump system"
        contents="The related technology has been applied for as a patent and we want to cooperate with companies interested in the technology."
        hero={HERO}
        catalogue={Catalogue}
        // step={Step}
      />
      <VideoContainer>
        <video controls>
          <source src={Video_1} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
          <track></track>
        </video>
        <video controls>
          <source src={Video_2} type="video/mp4" />
          <track></track>
          Sorry, your browser doesn't support embedded videos.
        </video>
        <video controls>
          <source src={Video_3} type="video/mp4" />
          <track></track>
          Sorry, your browser doesn't support embedded videos.
        </video>
      </VideoContainer>
      <ProductImg Images={Images} />
    </Layout>
  );
};

export default HydroPage;

import React from 'react';
import { Container, Paper } from '@material-ui/core';

import NavBar from '../../components/common/navbar/NavBar';
import Hero from '../../components/start/hero/Hero';
import Panel from '../../components/start/panel/Panel';
import ShopCard from '../../components/start/card/ShopCard';

import hero from '../../assets/hero.jpg';
import template from '../../assets/template.jpg';
import template2 from '../../assets/template2.jpg';
import template3 from '../../assets/template3.jpg';

const Start = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Hero />
        <Paper elevation={0}>
          <Panel title="Highest rated shops">
            <ShopCard
              image={hero}
              shopTitle="Joelmosens shop!"
              shortShopDescription="I strive to create beautiful and rich art. I promise you won't be disappointed."
            />
            <ShopCard
              image={template}
              shopTitle="Joelmosens shop!"
              shortShopDescription="I strive to create beautiful and rich art. I promise you won't be disappointed."
            />
            <ShopCard
              image={template2}
              shopTitle="Joelmosens shop!"
              shortShopDescription="I strive to create beautiful and rich art. I promise you won't be disappointed."
            />
            <ShopCard
              image={template3}
              shopTitle="Joelmosens shop!"
              shortShopDescription="I strive to create beautiful and rich art. I promise you won't be disappointed."
            />
          </Panel>
          <Panel title="Recent purchases">
            <ShopCard
              image={hero}
              shopTitle="Joelmosens shop!"
              shortShopDescription="I strive to create beautiful and rich art. I promise you won't be disappointed."
            />
            <ShopCard
              image={template}
              shopTitle="Joelmosens shop!"
              shortShopDescription="I strive to create beautiful and rich art. I promise you won't be disappointed."
            />
            <ShopCard
              image={template2}
              shopTitle="Joelmosens shop!"
              shortShopDescription="I strive to create beautiful and rich art. I promise you won't be disappointed."
            />
            <ShopCard
              image={template3}
              shopTitle="Joelmosens shop!"
              shortShopDescription="I strive to create beautiful and rich art. I promise you won't be disappointed."
            />
          </Panel>
        </Paper>
      </Container>
    </>
  );
};

export default Start;

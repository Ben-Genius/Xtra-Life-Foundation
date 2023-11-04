import React from 'react';
import { createStyles, Text, Container, ActionIcon, Group, rem, Image } from '@mantine/core';
import { BsWhatsapp, BsFacebook, BsYoutube, BsTwitter } from 'react-icons/bs';
import { motion } from 'framer-motion';
import foot from '../assets/footerlogo.png';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(150),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.white,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',
    
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: 'mono',
    marginBottom: `calc(${theme.spacing.xs} / 1)`,
    color: 'black',
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface FooterLinksProps {
  xtraFooter: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

const Footer = ({ xtraFooter }: FooterLinksProps) => {
  const { classes } = useStyles();

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const groups = xtraFooter.map((group) => {
    const links = group.links.map((link, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <Text
          className={classes.link}
          component="a"
          href={link.link}
          onClick={(event: { preventDefault: () => any; }) => event.preventDefault()}
        >
          {link.label}
        </Text>
      </motion.div>
    ));
  
    return (
      <motion.div
        className={classes.wrapper}
        key={group.title}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </motion.div>
    );
  });
  

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <motion.div className={classes.logo} initial="hidden" animate="visible" variants={fadeInUp}>
          <Image src={foot} alt="Footer logo" maw={100} />
          <Text size="xs" color="dimmed" className={classes.description}>
            Adipisicing fugiat nisi fugiat ad. Do mollit non adipisicing ex consectetur pariatur.
          </Text>
        </motion.div>
        <center className='p-4 sm:p-0'>
          <motion.div className={`${classes.groups}`} variants={staggerContainer} initial="hidden" animate="visible">
            {groups}
          </motion.div>
        </center>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2023 Azay Genius. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          {['green', 'red', 'blue', 'blue'].map((color, index) => (
            <ActionIcon
              size="lg"
              key={index}
              style={{ transition: 'transform 0.1s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {React.createElement([BsWhatsapp, BsYoutube, BsFacebook, BsTwitter][index], { size: '1.05rem', stroke: 1.5, color })}
            </ActionIcon>
          ))}
        </Group>
      </Container>
    </footer>
  );
}

export default Footer;

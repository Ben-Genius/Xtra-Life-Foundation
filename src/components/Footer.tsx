import { createStyles, Text, Container, ActionIcon, Group, rem, Image } from '@mantine/core';
import {BsWhatsapp,BsFacebook,BsYoutube,BsTwitter} from 'react-icons/bs';
import foot from '../assets/footerlogo.png';
const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
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

const Footer = ({ xtraFooter }: FooterLinksProps) =>{
  const { classes } = useStyles();

  const groups = xtraFooter.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
            <Image src={foot} alt="Footer logo" maw={100} />
           <Text size="xs" color="dimmed" className={classes.description}>
            Adipisicing fugiat nisi fugiat ad.Do mollit non adipisicing ex consectetur pariatur.
          </Text>
        </div>
            <center className='p-4 sm:p-0'>        <div className={`${classes.groups}`}>{groups}</div>
</center>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2023 Azay Genius. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <BsWhatsapp size="1.05rem" stroke={1.5}  color="green"/>
          </ActionIcon>
          <ActionIcon size="lg">
            <BsYoutube size="1.05rem" stroke={1.5} color="red" />
          </ActionIcon>
          <ActionIcon size="lg">
            <BsFacebook size="1.05rem" stroke={1.5}  color="blue"/>
          </ActionIcon>
          <ActionIcon size="lg">
            <BsTwitter size="1.05rem" stroke={1.5} color="blue"/>
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
export default Footer
import { Text, Box, Stack, rem } from '@mantine/core';
import {BsCloudSun, BsTelephoneInbound, } from 'react-icons/bs';
import {FiMapPin} from 'react-icons/fi';
import {MdOutlineAttachEmail}  from 'react-icons/md';
import classes from "./ContactUs.module.css";

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof BsCloudSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: 'Email', description: 'hello@mantine.dev', icon: BsCloudSun },
  { title: 'Phone', description: '+49 (800) 335 35 35', icon: BsTelephoneInbound },
  { title: 'Address', description: '844 Morris Park avenue', icon: FiMapPin },
  { title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: MdOutlineAttachEmail },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}
import { motion } from 'framer-motion';
import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
} from '@mantine/core';
import {RiTwitterLine, RiYoutubeFill,RiInstagramFill} from 'react-icons/ri';
import { ContactIconsList } from './ContactIcons';

const social = [RiTwitterLine, RiYoutubeFill,RiInstagramFill];

export default function ContactUs() {
  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} variant="transparent">
      <Icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-8">
      <SimpleGrid spacing={50} className="grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div initial={{ y: -20 }} animate={{ y: 0 }} transition={{ delay: 0.1 }}>
          <Title className="text-2xl font-semibold mb-4">Contact us</Title>
          <Text className="text-sm mb-8">
            Leave your email and we will get back to you within 24 hours
          </Text>

          <ContactIconsList />

          <Group className="mt-10 space-x-4">{icons}</Group>
        </motion.div>
        <motion.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 0.2 }}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            className="mb-4"
          />
          <TextInput
            label="Name"
            placeholder="John Doe"
            className="mb-4"
          />
          <Textarea
            required
            label="Your message"
            placeholder="I want to order your goods"
            minRows={4}
            className="mb-4"
          />

            <Group  mt="md">
              <Button className='bg-blue-500 hover:bg-blue-600' >Send message</Button>
            </Group>
          </motion.div>
        </SimpleGrid>
      </motion.div>
    );
  }
import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'



const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Image
          display="inline-block"
          src="/images/algonquin.JPG"
          />
        </Box>
      </Box>  
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Oliver Meyer
          </Heading>
          <p>Software Engineering student at Uvic</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
        <Image
        borderColor="whiteAlpha.800"
        borderWidth={2}
        borderStyle="solid"
        maxWidth="100px"
        display="inline-block"
        borderRadius="full"
        src="/images/portrait.jpeg"
        alt="Profile image"
          />
        </Box>
      </Box>

      <Section>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        
        <Paragraph>
          Hello! I am a Victoria-based software engineering student. When I'm not learning about software development, you can find me hiking, kayaking, or walking my dog (daisy).
          Here is a link to my {''}
          <NextLink href="/resume.pdf">
            <Link>Resume</Link>
          </NextLink>
          .
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
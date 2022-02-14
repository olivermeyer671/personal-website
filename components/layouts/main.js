import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>Oliver Meyer - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14} pb={200}> 
        

        {children}

      </Container>
    </Box>
  )
}

export default Main
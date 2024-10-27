import { Box, Flex, Text, Heading } from '@radix-ui/themes';

function Description() {

  return (
    <>
    <Box px={{initial: "20px", xs: "20px", sm: "40px", md: "50px", lg: "100px", xl: "100px"}} py={"9"}>
    <Flex className='faf' gap="9">
        <Box>
            <Heading size="6">Description</Heading>
            <Box width={{initial: "100%", sm: "100%", md: "80%", lg: "50%"}} mt="5">
                A toothbrush is an oral hygiene instrument used to clean the mouth
                by brushing. It consists of an elongated handle, at the end of which
                is a head with a set of bristles or filaments to effectively remove
                food debris and dental biofilm from teeth and gums.
            </Box>
        </Box>  
        <Box className='gog'>
            <Heading size="5">Designer</Heading>
            <Text className='text-red-600' mt={"5"} as="div">
                Aykhan Dadashov
            </Text>
        </Box>
    </Flex>
    </Box>
    <style jsx>{`
        @media (max-width: 800px) {
          .faf {
            display: block;
          }
            .gog{
            margin-top: 50px
            }
        }
      `}</style>
      </>
  );
}

export default Description;




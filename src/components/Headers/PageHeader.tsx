import { Flex, Heading, Box, Text, Image, Spacer, Button } from "@chakra-ui/react";
import Logo from "../../assets/logo.png";

interface PageHeaderProps {
    query?: string
}

const PageHeader: React.FC<PageHeaderProps> = () => {

    return (
        <>
            <Flex
                justifyContent="center"
                height="18vh"
                width={'100vw'}
                bg={'#FFFDFD'}
                paddingX='5vw'
                paddingY='3vh'
                boxShadow='lg'
                paddingLeft='40vw'
            >
                <Box display="flex">
                    <Image src={Logo} alt="logo"></Image>
                </Box>
                <Spacer />
                <Box marginY='3vh' marginX='2vw'>
                    <Button
                        _hover={{ bg: 'black', color: 'white' }}
                        _active={{
                            bg: '#FFD700',
                            transform: 'scale(0.98)',
                            boxShadow: 'inner'
                        }}
                        variant="outlined"
                        backgroundColor={'#ffd700'}
                        borderRadius={'20px'}
                        paddingX='2vw'
                        paddingY="3vh"
                        boxShadow='lg'
                    >
                        <Text color="brand">Get a Quote</Text>
                    </Button>
                </Box>
            </Flex>
        </>
    )
};


export default PageHeader;


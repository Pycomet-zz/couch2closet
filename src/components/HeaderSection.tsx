import { Flex, Heading, Box, Text, Spacer, Button } from "@chakra-ui/react";

interface PageHeaderProps {
    query?: string
}

const PageHeader: React.FC<PageHeaderProps> = () => {

    return (
        <>
            <Flex
                justifyContent="center"
                height="10vh"
                bg={'lightgray'}
                paddingX='5vw'
                paddingY='3vh'
                boxShadow='lg'
            >
                <Box display="flex">
                    <Heading color="brand">Couch2</Heading>
                    <Heading color="GrayText">Closet</Heading>
                </Box>
                <Spacer />
                <Box>
                    <Button
                        _hover={{ bg: '#b19cd9' }}
                        _active={{
                            bg: '#dddfe2',
                            transform: 'scale(0.98)',
                            borderColor: '#b19cd9',
                        }}
                        _focus={{
                            boxShadow:
                            '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                        }}
                        variant="ghost"
                    >
                        <Text color="brand">Submit New Request</Text>
                    </Button>
                </Box>
            </Flex>
        </>
    )
};

export default PageHeader;
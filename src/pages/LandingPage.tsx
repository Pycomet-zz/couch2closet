import React, { useState } from "react";
import { Flex, Box, Input, Button, Heading, Text, useMediaQuery } from "@chakra-ui/react"
import PageMeta from "../components/Meta";
import PageHeader from "../components/Headers/PageHeader";
import { SearchBox } from "@elastic/react-search-ui";
import BGImage from '../assets/landingbg.png'
import Loader from "../components/Loader";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
    const [loading, setLoading] = useState(true)
    const [DesktopScreen] = useMediaQuery("(min-width: 1200px)")
    
    setTimeout(() => {
        setLoading(false)
    }, 2000)

    if (loading) {
        return <Loader />
    } else {
        return (
            <>
            {DesktopScreen ? (
                <Flex
                    bgImage={BGImage}
                    bgSize="cover"
                    backdropFilter='blur'
                    z-index='0'
                    bgPos="0% 30%"
                    height={'100vh'}
                    direction="column"
                >
                        <PageMeta />
                        <PageHeader />
                        
                        <Box
                            h={'100vh'}
                            paddingY={'25vh'}
                            paddingLeft={'10vw'}
                            w={'70vw'}
                        >
                            <Heading py={5}>Get The Best Prices On Women's Clothing. Search in style...</Heading>
                            <Text>Enjoy An Amazing Search Experience</Text>
                            <SearchBox
                                inputProps={{ placeholder: "custom placeholder" }}
                                view={({ onChange, value, onSubmit }) => (
                                    <form onSubmit={onSubmit} >
                                        <Box display="flex" direction={'row'} py={10}>
                                            <Input
                                                value={value}
                                                height={'7vh'}
                                                placeholder="Search"
                                                backgroundColor={'white'}
                                                borderColor={'black'}
                                                borderRadius={'20px 0 0 20px'}
                                                onChange={e => onChange(e.currentTarget.value)}
                                            />
                                            <Button
                                                _active={{
                                                    bg: '#FFD700',
                                                    transform: 'scale(0.98)',
                                                    boxShadow: 'inner'
                                                }}
                                                height={'7vh'}
                                                type="submit"
                                                px={8}
                                                border={'1px solid black'}
                                                backgroundColor={'#ffd700'}
                                                borderRadius={'0 20px 20px 0'}
                                            >
                                                <Text color="brand">SHOP</Text>
                                            </Button>
                                        </Box>
                                    </form>
                                )}
                            />
                        </Box>

                </Flex>
            ) : (
                <Flex
                    bgImage={BGImage}
                    bgSize="cover"
                    backdropFilter='blur'
                    z-index='0'
                    bgPos="30% 0%"
                    height={'100vh'}
                    direction="column"
                >
                        <PageMeta />
                        <PageHeader />
                        
                        <Box
                            h={'100vh'}
                            paddingY={'15vh'}
                            paddingLeft={'10vw'}
                            w={'80vw'}
                        >
                            <Heading py={5}>Get The Best Prices On Women's Clothing. Search in style...</Heading>
                            <Text>Get more & more ..</Text>
                            <SearchBox
                                inputProps={{ placeholder: "custom placeholder" }}
                                view={({ onChange, value, onSubmit }) => (
                                    <form onSubmit={onSubmit} >
                                        <Box display="flex" direction={'row'} py={10}>
                                            <Input
                                                value={value}
                                                height={'5vh'}
                                                placeholder="Search"
                                                backgroundColor={'white'}
                                                borderColor={'black'}
                                                borderRadius={'20px 0 0 20px'}
                                                onChange={e => onChange(e.currentTarget.value)}
                                            />
                                            <Button
                                                _active={{
                                                    bg: '#FFD700',
                                                    transform: 'scale(0.98)',
                                                    boxShadow: 'inner'
                                                }}
                                                height={'5vh'}
                                                type="submit"
                                                px={8}
                                                border={'1px solid black'}
                                                backgroundColor={'#ffd700'}
                                                borderRadius={'0 20px 20px 0'}
                                            >
                                                <Text color="brand">SHOP</Text>
                                            </Button>
                                        </Box>
                                    </form>
                                )}
                            />
                        </Box>

                </Flex>
            )}
            </>
        )
    }
};


export default LandingPage;


import { Stack, Box, Input, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { SearchBox } from "@elastic/react-search-ui";


const BodySection: React.FC = () => {
    return (
        <Stack
            direction="column"
            paddingTop={'2vh'}
            height={'90vh'}
            alignItems='center'
            justifyContent='center'
        >
            <Box p="2" w={'100vw'} px="20vw">
                <SearchBox
                    inputProps={{ placeholder: "custom placeholder" }}
                    view={({ onChange, value, onSubmit }) => (
                        <form onSubmit={onSubmit} >
                            <Stack direction={'row'}>
                                <Input
                                    value={value}
                                    height={'5vh'}
                                    placeholder="Search"
                                    onChange={e => onChange(e.currentTarget.value)}
                                />
                                <Button height={'5vh'} _hover={{ bg: '#b19cd9' }} type="submit">
                                    <SearchIcon w={10}/>
                                </Button>
                            </Stack>
                        </form>
                    )}
                />
            </Box>
        </Stack>
    )
};


export default BodySection;
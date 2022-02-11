import { Flex } from "@chakra-ui/react";
import { MutatingDots } from "react-loader-spinner";

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {

    return (
        <Flex marginY={'50vh'} marginX={'50vw'}>
            <MutatingDots
                radius={15}
                color="black"
                secondaryColor="#FFD700"
                ariaLabel="loading-indicator"    
            />    
        </Flex> 
    )
};

export default Loader;
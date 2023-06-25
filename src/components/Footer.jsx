import { Box, Flex,Text} from '@chakra-ui/react';
// TODO: answer here

const Footer = () => {
    return (
      <Box className="footer">
        <Flex
        align="center"
        justify="center"
        h="50px"
        bg="gray.200"
        borderTop="1px solid"
        borderColor="gray.300"
        >
        <Text className="studentName">Sidrotul Munawaroh</Text>
        <Text className="studentId">FE4708982</Text>
        </Flex>
      </Box>
    );
};

export default Footer;

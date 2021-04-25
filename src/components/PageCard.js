import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const PageCard = ({ navItem }) => {
  return (
    <Box
      p={4}
      display={{ md: "flex" }}
      maxWidth="32rem"
      borderWidth={1}
      margin={2}
    >
      <Stack
        align={{ base: "center", md: "stretch" }}
        textAlign={{ base: "center", md: "left" }}
        mt={{ base: 4, md: 0 }}
      >
        <RouterLink to={navItem.url}>{navItem.label}</RouterLink>
      </Stack>
    </Box>
  );
};

export default PageCard;

import { Box } from "@chakra-ui/react";
import Router from "@/components/router";

export default function Layout({ children }) {
  return (
    <Box as="main">
      <Router />
      {children}
    </Box>
  );
}

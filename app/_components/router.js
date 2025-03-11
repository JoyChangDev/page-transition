"use client";
import { Stack, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Router() {
  return (
    <Stack pos="fixed" right="0" zIndex={500}>
      {["", 1, 2, 3].map((num) => (
        <Link key={`route${num}`} href={`/${num}`}>
          <Button>{num || "/"}</Button>
        </Link>
      ))}
    </Stack>
  );
}

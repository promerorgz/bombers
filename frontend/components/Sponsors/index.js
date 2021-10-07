import { Avatar } from "@chakra-ui/avatar";
import { Stack, Box, Wrap, WrapItem } from "@chakra-ui/layout";
import React from "react";
import Image from "../../common/Image";

const Sponsors = ({ sponsors }) => {
  return (
    <Wrap spacing="8" align="center">
      {sponsors.map((sponsor) => {
        const image = { ...sponsor.image, alternativeText: sponsor.name };

        return (
          sponsor.level === "gold" && (
            <WrapItem>
              <Avatar
                size="2xl"
                name={sponsor.name}
                src={`http://localhost:1339${sponsor.image.url}`}
              ></Avatar>
            </WrapItem>
          )
        );
      })}
    </Wrap>
  );
};

export default Sponsors;

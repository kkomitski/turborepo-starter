import { awsImage } from "@/helpers/constants";
import Image from "next/image";
import React from "react";

const ListItemTick = (props: any) => {
  return (
    <li className="flex items-center gap-x-2">
      <Image
        src={awsImage("circle-tick-azure.svg")}
        alt=""
        width={25}
        height={24}
      />
      <span>{props.children}</span>
    </li>
  );
};

export default ListItemTick;

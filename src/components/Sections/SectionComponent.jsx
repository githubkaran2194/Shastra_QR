// import React from "react";
import { Typography, Divider, Icon } from "@mui/material";

const Section = ({ title, icon, children }) => {
  return (
      <div className="!mb-8">
      <div className="!flex !items-center !gap-3">
      <Icon className="!text-red-300">
      {icon}
      </Icon>
      <Typography className="!font-semibold !text-gray-900 !text-xl">
        {title}
        </Typography>
        </div>
      <Divider className="!my-3 !border-gray-700" />
      <Typography className="!text-xl">{children}</Typography>
    </div>
  );
};

export default Section;

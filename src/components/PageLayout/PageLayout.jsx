// import React from "react";
import { Card, CardContent, Typography, Divider } from "@mui/material";

const PageLayout = ({ title, children }) => {
  return (
    <div className="!min-h-screen !flex !items-center !justify-center !p-8">
      <Card className="!w-full !shadow-none !rounded-none">
        <CardContent className="!p-6">
          <Typography className="!text-gray-800 !font-bold !text-3xl sm:!text-4xl md:!text-5xl !text-center !mb-6">
            {title}
          </Typography>
          <Divider className="!border-gray-500 !mb-6" />
          {children}
        </CardContent>
      </Card>
    </div>
  );
};

export default PageLayout;

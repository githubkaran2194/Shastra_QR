/* eslint-disable react/prop-types */
import { Card, CardContent, Typography, Divider } from "@mui/material";
import { FaMoneyCheck, FaTag, FaImage } from "react-icons/fa";
import termsData from "../../data/TermsData.json"
import { TbTruckReturn } from "react-icons/tb";
import { BiUndo } from "react-icons/bi";

// Map JSON icon names to actual React Icons
const iconMap = {
  FaMoneyCheck: <FaMoneyCheck />,
  FaTag: <FaTag />,
  FaImage: <FaImage />,
  FaUndo: <BiUndo  />,
  TbTruckReturn : <TbTruckReturn/>
};

const TermsAndConditions = () => {
  return (
    <div className="!min-h-screen !flex !items-center !justify-center !p-7">
      <Card className="!w-full !shadow-none !rounded-none !overflow-hidden">
        <CardContent className="!p-6">
          <Typography className="!text-center !font-bold !text-gray-900 !mb-8 !tracking-wide !uppercase !text-3xl sm:!text-4xl !font-serif">
            Terms & Conditions
          </Typography>
          <Divider className="!my-6 !border-gray-300" />
          {termsData.termsData.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              icon={iconMap[section.icon]}
              iconColor={section.iconColor}
              content={section.content}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

const Section = ({ title, icon, iconColor, content }) => {
  return (
    <div className="!mb-8">
      <Typography variant="h5" className="!flex !items-center !gap-3 !font-semibold !text-gray-900 !text-xl">
        <span className={iconColor}>{icon}</span> {title}
      </Typography>
      <Divider className="!my-3 !border-gray-400" />
      {content.description && (
        <li className="!mt-2 !text-gray-700 !list-disc !leading-relaxed !font-medium !text-lg">
          {content.description}
        </li>
      )}
      {content.list && (
        <ul className="!list-disc !pl-5 !mt-3 !space-y-2 !text-gray-700">
          {content.list.map((item, idx) => (
            <li key={idx} className="!text-lg !leading-relaxed !font-medium">{item}</li>
          ))}
        </ul>
      )}
      {content.note && (
        <Typography variant="body1" className={`!mt-4 !font-semibold ${content.noteColor}`}>
          {content.note}
        </Typography>
      )}
    </div>
  );
};

export default TermsAndConditions;

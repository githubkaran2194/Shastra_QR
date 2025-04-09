import { Card, CardContent, Typography, Divider } from "@mui/material";
import { FaPagelines, FaHistory, FaHandsHelping, FaCertificate, FaLeaf, FaDelicious } from "react-icons/fa";
import AboutUS from "../../data/AboutUS.json";

const iconMapping = {
  FaPagelines: <FaPagelines className="!text-green-600 !text-2xl" />, 
  FaHistory: <FaHistory className="!text-blue-600 !text-2xl" />, 
  FaHandsHelping: <FaHandsHelping className="!text-orange-600 !text-2xl" />, 
  FaCertificate: <FaCertificate className="!text-red-600 !text-2xl" />, 
  FaLeaf: <FaLeaf className="!text-green-500 !text-2xl" />,
  FaDelicious : <FaDelicious className="!text-red-600 !text-2xl" />
};

const AboutUsPage = () => {
  return (
    <div className="!min-h-screen !flex !items-center !justify-center!p-7">
      <Card className="!w-full !shadow-none !rounded-none !overflow-hidden">
        <CardContent className="!p-6">
          <Typography className="!text-center !font-bold !text-gray-900 !mb-8 !tracking-wide !uppercase !text-2xl sm:!text-3xl md:!text-3xl !font-serif">
            {AboutUS.title}
          </Typography>
          <Divider className="!my-6 !border-gray-300" />
          <Typography className="!text-md !text-gray-700 !leading-relaxed">
            {AboutUS.description}
          </Typography>
          <Section title={AboutUS.mission.heading}>
            <Typography className="!text-gray-700 !text-md !leading-relaxed">
              {AboutUS.mission.content}
            </Typography>
          </Section>
          {AboutUS.pillars.map((pillar, index) => (
            <Section key={index} title={pillar.title} icon={iconMapping[pillar.icon]}>
              <li className="!text-gray-700 !text-lg !leading-relaxed">
                {pillar.description}
              </li>
            </Section>
          ))}
          <Section title={AboutUS.movement.heading}>
            <li className="!text-gray-700 !text-lg !leading-relaxed">
            { AboutUS.movement.content}
            </li>
          </Section>
          <Section title={AboutUS.whyChooseUs.heading}>
            {AboutUS.whyChooseUs.reasons.map((reason, index) => (
              <div key={index} className="!flex !items-center !gap-3 !my-3">
                {iconMapping[reason.icon]} 
                <Typography className="!text-md !text-gray-800 !font-semibold">{reason.title}</Typography>
              </div>
            ))}
          </Section>
        </CardContent>
      </Card>
    </div>
  );
};

const Section = ({ title, icon, children }) => {
  return (
    <div className="!mb-8">
      <Typography variant="h5" className="!flex !items-center !gap-3 !font-semibold !text-gray-900 !text-xl !font-sans">
        {icon} {title}
      </Typography>
      <Divider className="!my-3 !border-gray-400" />
      {children}
    </div>
  );
};

export default AboutUsPage;
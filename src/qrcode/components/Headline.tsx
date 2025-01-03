import { TypographyH1, TypographyLead } from "@/components/Typography";

const Headline = () => {
  return (
    <div className="text-center space-y-4 text-[#006D77] mb-14">
      <TypographyH1>QR Code Generator</TypographyH1>
      <TypographyLead className="  mx-auto text-justify md:text-center">
        Create fully customizable QR codes with ease! Personalize your QR codes
        by adding logos, changing colors, and more. Whether for business or
        personal use, generate unique, professional QR codes that stand out.
      </TypographyLead>
    </div>
  );
};

export default Headline;

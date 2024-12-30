import { TypographyH1, TypographyLead } from "@/components/Typography";

const Headline = () => {
  return (
    <div className="text-center space-y-4 text-[#006D77] mb-10">
      <TypographyH1>QR Code Generator</TypographyH1>
      {/* <h1 className="text-[#006D77] scroll-m-20 text-4xl font-extrabold mb-5 tracking-tight lg:text-5xl"></h1> */}
      <TypographyLead className="max-w-5xl mx-auto">
        Create fully customizable QR codes with ease! Personalize your QR codes
        by adding logos, changing colors, and more. Whether for business or
        personal use, generate unique, professional QR codes that stand out.
      </TypographyLead>
    </div>
  );
};

export default Headline;

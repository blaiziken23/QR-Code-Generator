import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Basic from "./contents/Basic";
import Style from "./contents/Style";
import Logo from "./contents/Logo";
import Frame from "./contents/Frame";

const tabs = [
  {
    list: "basic",
    content: <Basic />,
  },
  {
    list: "style",
    content: <Style />,
  },
  {
    list: "logo",
    content: <Logo />,
  },
  {
    list: "frame",
    content: <Frame />,
  },
];

const Options = () => {
  return (
    <Tabs defaultValue={tabs[0].list} className="space-y-6">
      <TabsList className="bg-[#006D77] text-white">
        {tabs.map((tab, i) => (
          <TabsTrigger value={tab.list} key={i}>
            <span className="capitalize">{tab.list} </span>
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab, i) => (
        <TabsContent value={tab.list} key={i}>{tab.content}</TabsContent>
      ))}
    </Tabs>
  );
};

export default Options;

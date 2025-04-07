interface TabsProps {
  options: string[];
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const Tabs = (props: TabsProps) => {
  return (
    <div className="bg-custom-gray flex gap-4 p-4 rounded-md cursor-pointer">
      {props.options.map((tab) => {
        return (
          <div
            onClick={() => {
              props.onTabClick(tab);
            }}
            className={` ${
              props.activeTab === tab
                ? "text-blue-500 underline underline-offset-8 decoration-2"
                : "text-custom-gray2"
            }`}
          >
            {tab}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;

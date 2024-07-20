import { Card } from "@/components/ui/card";

type Props = {};

const LaunchPadPage = (props: Props) => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className=" w-full h-full max-w-[800px]">
        <Card className=" border-none"></Card>
      </div>
    </div>
  );
};

export default LaunchPadPage;

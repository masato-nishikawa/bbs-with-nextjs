import { BBSData } from "../types/types";
import BBCCard from "./BBSCard";

interface BBSAllDataProps {
  bbsAllData: BBSData[];
}

const BBSCardList = ({ bbsAllData }: BBSAllDataProps) => {
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {bbsAllData.map((bbsData: BBSData) => (
        <BBCCard key={bbsData.id} bbsData={bbsData} />
      ))}
    </div>
  );
};

export default BBSCardList;

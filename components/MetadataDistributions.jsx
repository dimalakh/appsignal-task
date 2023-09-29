import MetadataDistributionItem from "@/components/MetadataDistributionItem";
import { getColorsArr } from "@/utils/colors";

const colorsArr = getColorsArr();

export default function MetadataDistributions({ distributions }) {
  return (
    <div className="max-w-sm border rounded-md m-4 bg-white">
      <div className="flex space justify-between p-4">
        <h2 className="font-semibold">Metadata distributions</h2>

        <a href="#" className="text-blue-500 hover:text-blue-700 underline">All distributions</a>
      </div>

      <div>
        {distributions.map((distribution, i) => (
          <MetadataDistributionItem
            key={distribution.name}
            name={distribution.name}
            unique={distribution.unique}
            total={distribution.total}
            data={distribution.distributions}
            color={colorsArr[i]}
          />
        ))}
      </div>
    </div>
  );
}

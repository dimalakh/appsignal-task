import Tooltip from "@/components/Tooltip";
import { getToneByIndex } from "@/utils/colors";
import { fitInChunk } from '@/utils/fitInChunk';
import { useMemo } from "react";

export default function MetadataDistributionItem({ name, unique, total, data, color }) {
  const multiplier = 100 / total;
  const dataWithOthersGroup = useMemo(() => fitInChunk(data, 10), [data]);

  return (
    <div className="flex-col px-4 py-3 border-t">
      <h4>
        {name} ({unique})
      </h4>
      <div className="flex mt-3">
        {dataWithOthersGroup.map((item, i) => {
          const percentage = Math.round(item.value * multiplier);

          return (
            <Tooltip content={`${item.key} (${percentage}%)`} key={item.key}>
              <a
                href="#"
                key={item.key}
                className="mr-0.5 h-2 first-of-type:rounded-l last-of-type:rounded-r last-of-type:mr-0"
                style={{
                  width: `${percentage}%`,
                  backgroundColor: color[getToneByIndex(i)],
                }}
              ></a>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}

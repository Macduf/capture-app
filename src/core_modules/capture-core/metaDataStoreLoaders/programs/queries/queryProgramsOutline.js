// @flow
import { queryRecursively } from "../../IOUtils";

const showInCaptureAtrrUid = "RyYftsGAmfF";

export const queryProgramsOutline = async (): Promise<Array<Object>> => {
  const specification = {
    resource: "programs",
    params: {
      fields:
        "id,version,programTrackedEntityAttributes[trackedEntityAttribute[id,optionSet[id,version]]]," +
        "programStages[id,programStageDataElements[dataElement[id,optionSet[id,version]]]]",
      filter: [
        `attributeValues.attribute.id:eq:${showInCaptureAtrrUid}`,
        "attributeValues.value:eq:true",
      ],
    },
  };

  return (await queryRecursively(specification, { pageSize: 1000 })).flatMap(
    (responseItem) => (responseItem && responseItem.programs) || []
  );
};

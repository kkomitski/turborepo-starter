import Lines from "@/components/global/Misc/Lines";
import InstrumentsTableHeader from "@/components/modules/Common/Basic/InstrumentsTableHeader";
import SectionContainer from "@/components/modules/Common/Basic/SectionContainer";
import InstrumentsTable from "@/components/tables/InstrumentTable/InstrumentsTable";
import { addDataAttributes } from "@/helpers/contentful";
import { renderComponents } from "@/helpers/contentful/components";
import { documentToReactComponentsWrapper } from "@/helpers/contentful/richTextOptions";
import ComponentDebugger from "../debug/ComponentDebugger";
import { instrumentMappings } from "./instrumentMappings";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";

const InstrumentsTableSection = ({
  content,
  debug,
}: {
  content: any;
  debug: any;
}) => {
  const inspectorProps = useContentfulInspectorMode({
    entryId: content.sys.id,
  });
  const data = useContentfulLiveUpdates(content);
  const instrumentMapping = instrumentMappings[content.fields.type];

  return (
    <SectionContainer className="relative" {...addDataAttributes(debug)}>
      {/* DEBUGGING INFO FOR LOCAL */}
      <ComponentDebugger debug={debug} content={content} />

      {/* Instruments Header & Table */}
      <InstrumentsTableHeader
        title={documentToReactComponentsWrapper(data.fields.header, {
          type: "heading",
        })}
        contentRight={
          <div
            className="max-w-2xl text-xl"
            {...inspectorProps({
              fieldId: "description",
            })}
          >
            {documentToReactComponentsWrapper(data.fields.description, {
              type: "content",
            })}
          </div>
        }
      />

      {instrumentMapping.instruments.length > 0 && (
        <section className="relative">
          <Lines left />
          <div className="main-xl-container">
            <InstrumentsTable
              loadMoreEnabled={instrumentMapping.loadMoreEnabled}
              searchEnabled={instrumentMapping.searchEnabled}
              columns={instrumentMapping.columns}
              instrumentMappings={instrumentMapping.instruments}
              searchType={instrumentMapping.searchType}
              searchPlaceHolderText={instrumentMapping.searchPlaceHolderText}
            />
            <div className="pt-10">
              {renderComponents(data.fields.footNotes)}
            </div>
          </div>
        </section>
      )}
    </SectionContainer>
  );
};

export default InstrumentsTableSection;

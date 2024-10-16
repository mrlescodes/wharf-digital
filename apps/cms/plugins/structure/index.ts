import { type DocumentDefinition } from "sanity";
import { type StructureResolver } from "sanity/structure";

export const structureBuilder = (
  singletonItemTypes: DocumentDefinition[],
  pageItemTypes: DocumentDefinition[]
): StructureResolver => {
  return (S) => {
    // Goes through all of the singletons that were provided and translates them into something the StructureTool can understand
    const singletonItems = singletonItemTypes.map((singleton) => {
      return S.listItem()
        .title(singleton.title ?? singleton.name)
        .icon(singleton.icon)
        .child(
          S.editor()
            .id(singleton.name)
            .schemaType(singleton.name)
            .documentId(singleton.name)
        );
    });

    // Dynamically create the pageItems based on the passed pageItemTypes
    const pageItems = S.documentTypeListItem("page").child(
      S.documentList()
        .title("Pages")
        .filter(
          pageItemTypes.map((page) => `_type == "${page.name}"`).join(" || ")
        )
    );

    // The remaining items
    const remainingItems = S.documentTypeListItems().filter((listItem) => {
      return (
        !singletonItemTypes.find(
          (singleton) => singleton.name === listItem.getId()
        ) && !pageItemTypes.find((page) => page.name === listItem.getId())
      );
    });

    return S.list()
      .title("Content")
      .items([...singletonItems, S.divider(), pageItems, ...remainingItems]);
  };
};

import { definePlugin } from "sanity";

/**
 * This plugin contains the logic for setting up the singletons
 */
export const singletonPlugin = definePlugin((types: string[]) => {
  return {
    name: "singletonPlugin",
    document: {
      // Hide Singletons from new document options
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === "global") {
          return prev.filter(
            (templateItem) => !types.includes(templateItem.templateId)
          );
        }

        return prev;
      },

      // Removes the "duplicate" action on the Singletons
      actions: (prev, { schemaType }) => {
        if (types.includes(schemaType)) {
          return prev.filter(({ action }) => action !== "duplicate");
        }

        return prev;
      },
    },
  };
});

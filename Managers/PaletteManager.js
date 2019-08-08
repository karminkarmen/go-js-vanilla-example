const PaletteManager = (() => {
  const $ = go.GraphObject.make;
  let palette;

  const init = () => {
    palette = $(go.Palette, "palette-content");

    palette.layout = $(go.GridLayout, {
      alignment: go.GridLayout.Position,
    });

    TemplatesProvider.nodeTemplates.forEach((x) =>
      palette.nodeTemplateMap.add(x.category, x.template)
    );

    palette.groupTemplate = TemplatesProvider.groupTemplate;
    palette.model.nodeDataArray = data.nodePaletteData;
  };

  return { init };
})();

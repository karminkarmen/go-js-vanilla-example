const DefaultNodeFactory = (() => {
  const $ = go.GraphObject.make;

  const createTemplate = (templateCategory = "firstNode") => {
    return {
      category: templateCategory,
      template: $(
        go.Node,
        "Auto",
        {
          resizable: true,
          resizeObjectName: configs.template.objectName,
          minSize: new go.Size(100, 100)
        },
        $(
          go.Shape,
          new go.Binding("figure", "shape").makeTwoWay(),
          new go.Binding("fill", "color").makeTwoWay(),
          new go.Binding("name").makeTwoWay(),
          {
            strokeWidth: 0,
            cursor: "pointer",
            portId: "",
            fromLinkable: true,
            toLinkable: true
          }
        ),
        $(
          go.TextBlock,
          new go.Binding("text").makeTwoWay(),
          new go.Binding("stroke", "textColor").makeTwoWay(),
          {
            editable: true
          }
        )
      )
    };
  };

  return { createTemplate };
})();

const DefaultGroupFactory = (() => {
  const $ = go.GraphObject.make;

  const createTemplate = () =>
    $(
      go.Group,
      "Vertical",
      {
        resizable: true,
        minSize: new go.Size(100, 100),
        resizeObjectName: configs.template.objectName,
        handlesDragDropForMembers: true,
        computesBoundsAfterDrag: true,
        mouseDrop: finishDrop,
        layout: $(go.GridLayout, {
          wrappingWidth: Infinity,
          alignment: go.GridLayout.Position,
          cellSize: new go.Size(1, 1),
          spacing: new go.Size(4, 4)
        })
      },
      
      new go.Binding("background", "color").makeTwoWay(),
      new go.Binding("name").makeTwoWay(),

      $(
        go.Panel,
        "Auto",
        {
          portId: "",
          fromLinkable: true,
          toLinkable: true
        },
        $(go.Placeholder, { padding: 5 })
      )
    );

  const finishDrop = (e, grp) => {
    const ok =
      grp !== null
        ? grp.addMembers(grp.diagram.selection, true)
        : e.diagram.commandHandler.addTopLevelParts(e.diagram.selection, true);
    if (!ok) e.diagram.currentTool.doCancel();
  }

  return { createTemplate };
})();

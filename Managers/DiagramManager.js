const DiagramManager = (() => {
  const $ = go.GraphObject.make;
  let diagram;

  const init = () => {
    diagramContent();
    diagramTemplate();
    diagramTools();
    diagramModel();
    diagramInspector();
    diagramOverwiev();

    window.diagram = diagram;
  };

  const diagramContent = () => {
    diagram = $(go.Diagram, "diagram-content", {
      initialContentAlignment: go.Spot.Center,
      allowDrop: true,
      "undoManager.isEnabled": true,
      layout: $(go.TreeLayout, {
        arrangement: go.TreeLayout.ArrangementHorizontal,
        angle: 90
      })
    });
    new ZoomSlider(diagram);
  };

  const diagramInspector = () => {
    diagram.select(diagram.nodes.first());
    new Inspector("diagram-inspector", diagram, {
      multipleSelection: true,
      showSize: 4,
      properties: {
        text: {},
        textColor: { show: Inspector.showIfPresent, type: "color" },
        color: { show: Inspector.showIfPresent, type: "color" }
      }
    });
  };

  const diagramTemplate = () => {
    TemplatesProvider.nodeTemplates.forEach((x) =>
      diagram.nodeTemplateMap.add(x.category, x.template)
    );
    diagram.groupTemplate = TemplatesProvider.groupTemplate;
    diagram.linkTemplate = TemplatesProvider.linkTemplate;
  };

  const diagramTools = () => {
    const differentShape = (fromnode, fromport, tonode, toport) => {
      return fromnode.data.category !== tonode.data.category;
    };
    diagram.toolManager.linkingTool.linkValidation = differentShape;
    diagram.toolManager.relinkingTool.linkValidation = differentShape;
    diagram.toolManager.draggingTool.isGridSnapEnabled = true;
  };

  const diagramModel = () => {
    diagram.model = $(go.GraphLinksModel);
    diagram.model.nodeDataArray = data.nodeData;
    diagram.model.linkDataArray = data.linkData;
  };

  const diagramOverwiev = () => {
    new go.Overview("diagram-overview").observed = diagram;
  };

  const saveAsImg = () => {
    diagram.makeImageData({
      scale: 1,
      background: "white",
      type: "image/jpeg",
      returnType: "blob",
      callback: imgCallback
    });
  };

  const imgCallback = (blob) => {
    const url = window.URL.createObjectURL(blob);
    const filename = "diagram.jpg";

    const a = document.createElement("a");
    a.style = "display: none";
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    requestAnimationFrame(function() {
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    });
  }

  const toJson = () => {
    return diagram.model.toJson();
  };

  const loadModel = (json) => {
    if (json) {
      diagram.model = go.Model.fromJson(json);
    }
  };

  const undo = () => {
    diagram.model.undoManager.undo();
  };

  const redo = () => {
    diagram.model.undoManager.redo();
  };

  return { init, toJson, loadModel, saveAsImg, undo, redo };
})();

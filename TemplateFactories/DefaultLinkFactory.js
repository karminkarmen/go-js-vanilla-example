const DefaultLinkFactory = (() => {
  const $ = go.GraphObject.make;

  const createTemplate = () =>
    $(
      go.Link,
      { relinkableFrom: true, relinkableTo: true },
      $(go.Shape, { stroke: configs.template.arrow.colorCode }),
      $(go.Shape, {
        toArrow: "Standard",
        fill: configs.template.arrow.colorCode,
        stroke: configs.template.arrow.colorCode
      }),
      $(go.TextBlock, new go.Binding("text").makeTwoWay(), {
        segmentOffset: new go.Point(0, 10)
      })
    );

  return { createTemplate };
})();

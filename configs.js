const configs = (() => {
  const template = {
    firstNode: {
      category: "firstNode",
      colorName: "GREEN",
      colorCode: "palegreen",
      shape: "RoundedRectangle"
    },
    secondNode: {
      category: "secondNode",
      colorName: "BLUE",
      colorCode: "lightskyblue",
      shape: "Rectangle"
    },
    thirdNode: {
      category: "thirdNode",
      colorName: "RED",
      colorCode: "lightcoral",
      shape: "Triangle"
    },
    defaultGroup: {
      category: "defaultGroup",
      colorName: "GRAY",
      colorCode: "lightgray"
    },
    arrow: { text: "link", name: "GREEN", colorCode: "mediumspringgreen" },
    objectName: "DEFAULT_OBJ",
    textColor: "dimgray",
    size: { rectangle: "100 100" }
  };

  return { template };
})();

const data = (() => {
  const nodeData = [
    {
      key: 1,
      category: configs.template.firstNode.category,
      text: configs.template.firstNode.colorName,
      textColor: configs.template.textColor,
      color: configs.template.firstNode.colorCode,
      size: configs.template.size.rectangle,
      name: configs.template.objectName,
      shape: configs.template.firstNode.shape
    },
    {
      key: 2,
      category: configs.template.secondNode.category,
      text: configs.template.secondNode.colorName,
      textColor: configs.template.textColor,
      color: configs.template.secondNode.colorCode,
      size: configs.template.size.rectangle,
      name: configs.template.objectName,
      shape: configs.template.secondNode.shape
    },
    {
      key: 3,
      category: configs.template.thirdNode.category,
      text: configs.template.thirdNode.colorName,
      textColor: configs.template.textColor,
      color: configs.template.thirdNode.colorCode,
      size: configs.template.size.rectangle,
      name: configs.template.objectName,
      shape: configs.template.thirdNode.shape
    },
    {
      key: 4,
      isGroup: true,
      text: configs.template.defaultGroup.colorName,
      textColor: configs.template.textColor,
      color: configs.template.defaultGroup.colorCode,
      name: configs.template.objectName
    }
  ];

  const nodePaletteData = [
    {
      key: 5,
      category: configs.template.firstNode.category,
      text: configs.template.firstNode.colorName,
      textColor: configs.template.textColor,
      color: configs.template.firstNode.colorCode,
      size: configs.template.size.rectangle,
      name: configs.template.objectName,
      shape: configs.template.firstNode.shape
    },
    {
      key: 6,
      category: configs.template.secondNode.category,
      text: configs.template.secondNode.colorName,
      textColor: configs.template.textColor,
      color: configs.template.secondNode.colorCode,
      size: configs.template.size.rectangle,
      name: configs.template.objectName,
      shape: configs.template.secondNode.shape
    },
    {
      key: 7,
      category: configs.template.thirdNode.category,
      text: configs.template.thirdNode.colorName,
      textColor: configs.template.textColor,
      color: configs.template.thirdNode.colorCode,
      size: configs.template.size.rectangle,
      name: configs.template.objectName,
      shape: configs.template.thirdNode.shape
    },
    {
      key: 8,
      isGroup: true,
      text: configs.template.defaultGroup.colorName,
      textColor: configs.template.textColor,
      color: configs.template.defaultGroup.colorCode,
      name: configs.template.objectName
    }
  ]

  const linkData = [
    { from: 1, to: 2, text: configs.template.arrow.text },
    { from: 2, to: 3, text: configs.template.arrow.text },
    { from: 3, to: 4, text: configs.template.arrow.text }
  ];

  return { nodeData, nodePaletteData, linkData };
})();

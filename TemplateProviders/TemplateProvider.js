const TemplatesProvider = (() => {
  const nodeTemplates = [
    DefaultNodeFactory.createTemplate(configs.template.firstNode.category),
    DefaultNodeFactory.createTemplate(configs.template.secondNode.category),
    DefaultNodeFactory.createTemplate(configs.template.thirdNode.category)
  ];

  const linkTemplate = DefaultLinkFactory.createTemplate();
  const groupTemplate = DefaultGroupFactory.createTemplate();

  return { nodeTemplates, linkTemplate, groupTemplate };
})();

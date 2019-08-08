const StorageManager = (() => {
  const key = "gojsKey";

  const save = () => {
    const json = DiagramManager.toJson();
    window.localStorage[key] = json;
  };

  const load = () => {
    const json = window.localStorage[key];
    DiagramManager.loadModel(json);
  }

  return { save, load }
})();

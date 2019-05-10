const list2tree = (() => {
  let key,
      parentKey;

  function invokeData(nodes, v, isInner) {
    for (let i = 0; i < nodes.length; i++) {
      const item = nodes[i];
      if (item[key] === v[parentKey]) {
        item.nodes = item.nodes || [];
        item.nodes.push(v);
        return true;
      }
      if (item.nodes && item.nodes.length) {
        const isMatch = invokeData(item.nodes, v, true);
        if (isMatch) return true;
      }
    }
    !isInner && nodes.push(v);
  }

  return function (data, k = 'id', pk = 'pid') {
    key = k;
    parentKey = pk;

    const temp = [];
    data.forEach((v) => {
      invokeData(temp, v);
    });
    return temp;
  };
})();

module.exports = list2tree;

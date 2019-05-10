const expect = require('chai').expect;
const list2tree = require('../src/list2tree');

const rawList = [
  { id: 1 },
  { id: 2, pid: 1 },
  { id: 3, pid: 2 },
  { id: 4 }
];
const expectTree = [
  {
    id: 1,
    nodes: [
      {
        id: 2,
        pid: 1,
        nodes: [
          {
            id: 3,
            pid: 2
          }
        ]
      }
    ]
  },
  {
    id: 4
  }
];

describe('list2tree', () => {
  it('输入列表输出树', () => {
    expect(list2tree(rawList)).to.be.deep.equal(expectTree);
  });
});
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* instructions: Trees

    -- Should have the methods: addChild, and contains
    -- Each node on the tree should have a value property and a children array.
    -- addChild(value) should accept a value and add it to that node's children array.
    contains(value) should return true if the tree or its children the given value.
    -- When you add nodes to the children array use new Tree(value) to create the node.
    You can instantiate the Tree class inside of itself. */

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
    this.children.push(new Tree(value));
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    if (this.value === value) {
      const valueMatch = true;
    } 
    let valueMatch = false;
    const checkNodes = (children) => {
      children.forEach((child) => {
        if (child.value === value) {
          valueMatch = true;
        }
        if (child.children) {
          checkNodes(child.children);
        }
      });
    };
    checkNodes(this.children);
    return valueMatch;
  }
}

module.exports = Tree;

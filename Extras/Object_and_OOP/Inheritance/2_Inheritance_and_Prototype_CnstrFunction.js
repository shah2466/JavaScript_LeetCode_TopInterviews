function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype.addVertex = function (v) {
  this.vertices.push(v);
};

const g = new Graph();
// g is an object with own properties 'vertices' and 'edges'.
// g.[[Prototype]] is the value of Graph.prototype when new Graph() is executed.

console.log(Graph); //[Function: Graph]
console.log(g); //Graph { vertices: [], edges: [] }

g.addVertex(5);
console.log(g.vertices); //5

const obj = {
  name: "Carrot",
  for: "Max",
  details: {
    color: "orange",
    size: 12,
  },
};
Copy to ClipboardCopy to Clipboard
Object properties can be accessed using dot (.) or brackets ([]). When using the dot notation, the key must be a valid identifier. Brackets, on the other hand, allow indexing the object with a dynamic key value.

// Dot notation
obj.name = "Simon";
const name = obj.name;

// Bracket notation
obj["name"] = "Simon";
const name = obj["name"];

// Can use a variable to define a key
const userName = prompt("what is your key?");
obj[userName] = prompt("what is its value?");
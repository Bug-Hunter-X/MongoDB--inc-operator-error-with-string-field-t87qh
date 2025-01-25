```javascript
// Correct usage of $inc operator
db.collection.updateOne({ name: "John" }, { $inc: { age: 1 } });

//If the 'age' field is a string, first convert it to a number:
db.collection.updateOne({ name: "John" }, { $set: { age: parseInt(age) }});
db.collection.updateOne({ name: "John" }, { $inc: { age: 1 } });
```
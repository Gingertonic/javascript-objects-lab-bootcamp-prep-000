var recipes = {
  oats: "1 cup",
  turmeric: "a lot",
  cinnamon: "a pinch",
  almondMilk: "to cover"
};

function updateObjectWithKeyAndValue(object, key, value){
  var newRecipe = Object.assign({}, object)
  newRecipe[key] = value;
  return newRecipe
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

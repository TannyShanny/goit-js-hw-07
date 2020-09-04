const ingredients = [
    "Картошка",
    "Грибы",
    "Чеснок",
    "Помидоры",
    "Зелень",
    "Приправы",
  ];
  
  let ul = document.querySelector("#ingredients");
  
  const createList = (array) =>
    array.map((arr) => {
      let li = document.createElement("li");
      li.append(arr);
      ul.append(li);
    });
createList(ingredients);
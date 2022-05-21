var array;


array = ['Apple', 'strawberry', 'Pineapple'];


document.getElementById('button').addEventListener('click', (event) => {
  if (!!array.length) {
    let element_list = document.getElementById('list');
    let new_li = document.createElement('li');
    new_li.innerText = array.shift();

    element_list.appendChild(new_li);
  }

});
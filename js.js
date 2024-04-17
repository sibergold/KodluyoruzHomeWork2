let listDom = document.querySelector('#list');
let text = document.getElementById('task');


checkfunction();
addDeleteEl();

function checkfunction() {
    let listDomLi = listDom.querySelectorAll('li');

    if (listDomLi.length > 0) {
        listDomLi.forEach(function (li) {
            li.addEventListener('click', function () {
                this.classList.toggle('checked');
            });
        });
    };
    
};

function addDeleteEl() {
    let listDomLi = listDom.querySelectorAll('li');

    if (listDomLi.length > 0) {
        listDomLi.forEach(function (li) {
            let existingSpans = li.querySelectorAll('span');
            existingSpans.forEach(function (span) {
                span.remove();
            });
            let deleteEl = document.createElement('span');
            deleteEl.innerHTML = 'x';
            deleteEl.classList.add('removeEl');
            li.appendChild(deleteEl);
        });
    } else {
        
    }
};

function newElement() {
    let inputVal = text.value;
    let liDom = document.createElement('li');

    if (inputVal === "" || inputVal.trim() === "") {
        $('.error').toast('show');
    } else {
        $('.success').toast('show');
        liDom.innerHTML = inputVal;
        listDom.appendChild(liDom);
        text.value = "";
    }
    let items = JSON.parse(localStorage.getItem('items')) || [];
      items.push(inputVal);
      localStorage.setItem('items', JSON.stringify(items));
    liDom.addEventListener('click', function () {
        this.classList.toggle('checked');
    });
   
    addDeleteEl();
    removeFunc();
};
window.onload = function() {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.forEach(function(item) {
        let liDom = document.createElement('li');
        liDom.innerHTML = item;
        listDom.appendChild(liDom);
  
        liDom.addEventListener('click', function () {
            this.classList.toggle('checked');
        });
  
        addDeleteEl();
        removeFunc();
    });
  };
removeFunc();
function removeFunc() {
    let removeEls = listDom.querySelectorAll('.removeEl');

    removeEls.forEach(function(el) {
        el.addEventListener('click', function(e) {
            let parentEl = e.target.parentNode;
            parentEl.remove();
        });
    });
};









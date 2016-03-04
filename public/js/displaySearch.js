'use strict';

var headerSearch = document.querySelector('.header-search'),
    btnInline = document.getElementById('btnInline'),
    list = document.querySelector('.productListSearch'),
    btnBlock  = document.getElementById('btnBlock');

headerSearch.addEventListener('click',function(e){
  console.log(e.target);
  console.log(btnInline);

  if(e.target === btnInline ){
    if(list.classList.contains('inline')) {
      return
    }
    else {
      list.classList.add('inline');
    }
  }

  if(e.target === btnBlock ){
    console.log(btnBlock);
    if(list.classList.contains('inline')) {
      list.classList.remove('inline');
    }
  }

});

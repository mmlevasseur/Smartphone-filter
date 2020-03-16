var checkboxes = document.querySelectorAll("input[type='checkbox']");
var phones = Array.from(document.getElementsByClassName("phone"));
var checked = {};

function changeCheckbox(event){
    checkedAll(event.target.name);
    toView();
}

function checkedAll(name){
    checked[name] = Array.from(document.querySelectorAll("input[name=" + name + "]:checked")).map(function(some){
        return some.value;
    });
}

function toView() {
    phones.map(function(some){
      var price = checked.price.length ? _.intersection(Array.from(some.classList), checked.price).length : true;
      var brand = checked.brand.length ? _.intersection(Array.from(some.classList), checked.brand).length : true;
      var features = checked.features.length ? _.intersection(Array.from(some.classList), checked.features).length : true;
      var storage = checked.storage.length ? _.intersection(Array.from(some.classList), checked.storage).length : true;
      if (price && brand && features && storage){
        some.style.display = "block";
      } else {
        some.style.display = "none";
      }
    });
}

checkedAll("price");
checkedAll("brand");
checkedAll("features");
checkedAll("storage");

Array.prototype.forEach.call(checkboxes, function(some){
    some.addEventListener("change", changeCheckbox);
});


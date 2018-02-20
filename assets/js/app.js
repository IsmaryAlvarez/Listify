
let submit = $('#submit');
let search;


submit.click(function(e) {
  e.preventDefault();
  search = $('#search').val();
  cocktail();
});

function cocktail() {
  fetch(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`).
  then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let name = data.drinks[0].strDrink;
    let type = data.drinks[0].strGlass
    let display = `<div class="col-xs-12 text-center">
    <div>
    <div>
    <p>${name}</p>
    <p>${type}</p>
    <span class="card-title">
    Score ${2}</span>
    </div>
    <div class="card-action">
    <a class="" onclick="btnTrue();" id="True">True</a>
    <a class="" onclick="btnFalse();" id="False">False</a>
    </div>
    </div>
    </div>`;
    $('#container').html(display);
  })
  .catch(function(error) {
    console.log(error);
  });
}


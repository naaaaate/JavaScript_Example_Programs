//.join() - joins array into string w separate , space, colon etc..
//.concat(newarray) - comnbine 2 arrays into 1
//.indexOf()  - if item is not in array it returns -1 --can see if item is in array


var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while(true){
  search = prompt('Search for product.. type list to show all or.. quit to show all.');

  //lets make sure we convert the search to lowercase just in case user types upper case
  search = search.toLowerCase();
  if (search === 'quit'){
    //if we type quit, it will break out of loop.
    break;
  }else if (search === 'list') {
    //if we type list we want to print all items to screen.. but use the join method dont iterate thru everything.
    print( inStock.join(', '));
  }else {
    //now lets test the search.. if it is in the array, print yes the product is in store if not print we dont have it..
    //can also do: inStock.indexOf(search) > -1  bc if its greater then its in the array.
    if (inStock.indexOf(search) !== -1) {
      print('Yes we have ' + search + ' in stock');
    }else {
      print('No we do not have ' + search + ' in stock');
    }

  }
}

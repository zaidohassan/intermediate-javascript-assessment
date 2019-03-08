// INTERMEDIATE JAVASCRIPT ASSESSMENT
// PART 2

// *************
// * PROBLEM 1 *
// *************

// Below are two variables (firstUser and thirdUser).
// Under the variables is a function called noWeakLink.
// noWeakLink uses $http to make a "GET" request to /api/users.
// You must use two .then functions to handle the response object.
// Chain these functions off of $http (do not put them in variables)
// The response object will look like this :
/*
    {
      data: [
        {
      		email: "awilliams0@intel.com",
      		first_name: "Alan",
      		gender: "Male",
      		id: 1,
      		last_name: "Williams"
        },
        {
          //...
        }
      ]
    }
*/

// In the first .then function you use, assign the first user object (located in the response object)
// to the variable 'firstUser' (previously declared), then return the response object.

// In the second .then function you use, assign the third user object
// to the variable 'thirdUser' (previously declared) and then return the tenth user object.

var firstUser = "don't touch this string!";
var thirdUser = "don't touch this string, either!";

function noWeakLink() {
  return $http({
    method: "GET",
    url: "/api/users"
  })
    .then(results => {
      firstUser = results.data[0];
      return results.data;
    })
    .then(results2 => {
      thirdUser = results2[2];
      return results2[9];
    });
}

// *************
// * PROBLEM 2 *
// *************

// Below is a variable called elephant which has been assigned an
// object with a name.

// Function large currently returns the following:
// 'My name is ' + this.name + ' and I am very heavy!'

// You must use explicit binding.
// In a variable called boundToElephant,
// assign it the value of the large function BOUND to the elephant object.

// When boundToElephant gets called, it should return this exact string:
// 'My name is Horton and I am very heavy!' (The above instructions should make this work.  No code needed for this paragraph)

var elephant = {
  name: "Horton"
};
function large() {
  return "My name is " + this.name + " and I am very heavy!";
}

var boundToElephant = large.bind(elephant);

// *************
// * PROBLEM 3 *
// *************

// Write a function called deathStar.
// deathStar will take in two parameters:
// capacity (Function) and crew (object).
// Use explicit binding to give capacity the context of crew
// and return the bound function.

function deathStar(capacity, crew) {
  let newBind = capacity.bind(crew);
  return newBind;
}

// *************
// * PROBLEM 4 *
// *************

// Create a function called accountingOffice.
// accountingOffice will take in a parameter:
// assets (Number),
// then return a closure function:
// The closure function will take in a parameter: liabilities (Number)
// The closure function will return the combined value of assets and liabilities.

function accountingOffice(assets) {
  return function closure(liabilities) {
    return assets + liabilities;
  };
}

// *************
// * PROBLEM 5 *
// *************

// Create a function called forgetter that takes in a parameter:
// name (String).

// forgetter helps keep track of things people don't want to forget.
// forgetter needs to return a function called rememberall.
// rememberall takes in a parameter:
// item (String).

// When rememberall is invoked, it will store the new item
// to be remembered along with all other previous items remembered.
// rememberall then needs to return an object with the following format:

// {
//     name: << name (given parameter) >>,
//     remember: << array of items to be remembered >>
// };

function forgetter(name) {
  let r = [];
  return function rememberall(item) {
    r.push(item);
    return {
      name: name,
      remember: r
    };
  };
}

// *************
// * PROBLEM 6 *
// *************

// Create a function called frodo. frodo will take in two parameters:
// startingHungerValue (Number) and startingDangerValue (Number).
// frodo will need to store those values on internal variables.

// frodo will then return an object with two methods:
// The first method will be called dinnerOverFire.
// dinnerOverFire will decrease hunger by 25 and will increase danger by 40.

// The second method will be called hidingInBush.
// hidingInBush will increase hunger by 35 and decrease danger by 20.

// Both methods need to return an object structured like this:

// {
//   hunger: (modified hunger value),
//   danger: (modified danger value)
// }

// NOTE: Neither hunger nor danger should be able to exceed 100 or drop below 0.

function frodo(startingHungerValue, startingDangerValue) {
  var hunger = startingHungerValue;
  var danger = startingDangerValue;

  return {
    dinnerOverFire: function() {
      if (hunger >= 25 && danger <= 60) {
        hunger -= 25;
        danger += 40;
      } else {
        (hunger = 0), (danger = 100);
      }
      return {
        hunger,
        danger
      };
    },
    hidingInBush: function() {
      if (hunger <= 65 && danger >= 20) {
        console.log(hunger);

        hunger += 35;
        danger -= 20;
      } else {
        (hunger = 100), (danger = 0);
      }
      return {
        hunger,
        danger
      };
    }
  };
}

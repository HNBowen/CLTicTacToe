// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` 
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:
//
// var familyTree = {
//   'firstName': 'Beth',
//   'lastName': 'Johnson',
//   'location': 'San Francisco',
//   'children': [
//     {
//       'firstName': 'Beth Jr.',
//       'lastName': 'Johnson',
//       'location': 'Berkeley',
//       'children': [
//         {
//           'firstName': 'Smitty',
//           'lastName': 'Won',
//           'location': 'Beijing',
//           'children': []
//         }
//       ]
//     },
//     {
//       'firstName': 'Joshie',
//       'lastName': 'Wyattson',
//       'location': 'Berkeley',
//       'children': []
//     }
//   ]
// };
//
// var livesInBerkeley = function (familyMember) {
//   return familyMember.location === 'Berkeley';
// }
//
// filterFamilyMembers(familyTree, livesInBerkeley)
//
// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];



var filterFamilyMembers = function (familyTree, truthTest) {
  
	//initialize a variable for the output
	var result = [];

	//write a new function that will check each family member

    var checkMember = function(familyMember, truthTest) {
        if (truthTest(familyMember)) {  //check if this family member passes the truth test
            result.push(familyMember.firstName + ' ' + familyMember.lastName);
        }
        if (familyMember.children.length > 0) { //check if this family member has children. If so, pass each child into checkMember
            for (var i = 0; i < familyMember.children.length; i++) {
                checkMember(familyMember.children[i], truthTest);
            }
        }
    }

    checkMember(familyTree, truthTest); //run the recursive function


	//return the result array
	return result;


};


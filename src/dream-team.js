const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
// function createDreamTeam(members) {
//   let teamName = "";
//   let name = "";
//   for (let i = 0; i < members.length; i++) {
//     if ((typeof(members[i]) === "string")) {
//       let oneMemberName = members[i].split(" ");
//       console.debug(oneMemberName);
//       if (oneMemberName.length > 1) {
//         for (let j = 0; j < oneMemberName.length; j++) {
//           teamName += oneMemberName[j].substring(0).toUpperCase();
//         }
//       } else {
//         teamName += oneMemberName[0].substring(0).toUpperCase();
//       }
//      name = teamName.split("").sort().join("");
//      return name;
//     } else {
//       return false;
//     }
//   }
// }
function createDreamTeam( members ) {
  let letters = "";
  let result = "";
  if (!Array.isArray(members)){
    return false;
  } else {
    for (let i = 0; i < members.length; i++) {
      if(typeof(members[i]) === "string"){
        letters += members[i].trim()[0].toUpperCase();
      }
    }
    result = letters.split("").sort().join("");
    return result;
  }
}

createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']); //=> 'ADMM'
createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]); //=> 'LOO'

module.exports = {
  createDreamTeam
};

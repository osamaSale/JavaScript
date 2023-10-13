
// Pyramid Complete


const pyramidComplete = (rows) => {
    for (let i = 1; i <= rows; i++) {
        let str = "";

        //Add the white space to the left
        for (let k = 1; k <= rows - i; k++) {
            str += " ";
        }

        //Add the '*' for each row
        for (let j = 0; j != 2 * i - 1; j++) {
            str += "*";
        }

        //Add the white space to the right
        for (let k = i + 1; k <= rows; k++) {
            str += " ";
        }

        //Print the pyramid pattern for each row
        console.log(str);
    }
};
//pyramidComplete(5);
/*
 
"    *    "
"   ***   "
"  *****  "
" ******* "
"*********" 
*/



// Pyramid Left

const pyramidLeft = (n) => {
    // defining an empty string
    let string = "";
    // External loop
    for (let i = 1; i <= n; i++) {
        // printing spaces
        for (let j = 1; j <= n - i; j++) {
            string += " ";
        }
        // printing star
        for (let k = 0; k < 2 * i - 1; k++) {
            string += "*";
        }
        string += "\n";
    }
    return string;
};
//console.log(pyramidLeft(5));
/*
 *
 ***
 *****
 *******
 *********
 */

// Pyramid Right

let pyramidRight = (rows) => {

    for (let i = 1; i <= rows; i++) {
        let str = '';

        //Add the white space to the left
        for (let k = 1; k <= rows - i; k++) {
            str += ' ';
        }

        //Add the '*' for each row
        for (let j = 1; j <= i; j++) {
            str += '*';
        }

        //Print the pyramid pattern for each row
       // console.log(str);
    }
}
pyramidRight(5);

/* 
"    *"
"   **"
"  ***"
" ****"
"*****"
 */










module.exports = { pyramidComplete  ,  pyramidLeft , pyramidRight}
//import {FormControl} from '@angular/forms';
export class EmailValidator{

    static mailFormat(control): any {

        //var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        //  var EMAIL_REGEXP = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
         var EMAIL_REGEXP =/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
            console.log(control.value);

        if (!EMAIL_REGEXP.test(control.value)) {
            console.log("incorrectMailFormat");
            return { "incorrectMailFormat": true };
        }else{
            console.log("control.value.length:::");
            return null;
        }
        //console.log("returning null");
        //return null;
    }

}

// interface ValidationResult {
//     [key: string]: boolean;
// }
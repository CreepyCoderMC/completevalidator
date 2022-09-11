# Complete Validator
This module is small but easy to use. The purpose of this module is to serve as a container for all my validator modules. That has thirteen validator all in one module, the validators is as follows: bigger, contains, equal, longer, mqtt topic, regex, smaller, not contain, not equal, shorter, type, same size and not same size.
## Explanation Of Each Validator
### Bigger Validator
The purpose of this module is to check if the source value is bigger than the target value, and optionally also if they are equal. The source and target can be a string or a number.
### Contain Validator
The purpose of this module is to check if a string contains a sub string, it can optionally also do none case sensitive comparing.
### Equal Validator
The purpose of this module is to check if a target value equals a source value, it can optionally also do none case sensitive comparing.
### Longer Validator
The purpose of this module is to check if a target string is longer than the source string, it can optionally also check if the source and target is the same length.
### MQTT Topic Validator
The purpose of this module is to check the topic of a MQTT object if t valid. Why a simple compare function is not always sufficient. A topic must sometimes be compared with wildcards to validate that it is a valid as well.
### RegEx Validator
The purpose of this module is to check if a string can be validated via regular expressions.
### Smaller Validator
The purpose of this module is to check if the source is smaller in value than the target value, and optionally if there length are equal.
### Not Contain Validator
The purpose of this module is to check if a string does not contains a sub string, it can optionally also do none case sensitive comparing.
### Not Equal Validator
The purpose of this module is to check if a target value does not equals a source value, it can optionally also do none case sensitive comparing.
### Shorter Validator
The purpose of this module is to check if a target string is shorter than the source string, it can optionally also check if the source and target is the same length.
### Type Validator
The purpose of this module is to check if what type a variable is the typeof command has a few limitations it can tell you if a variable is one of the following: array, NaN, declared or null. Another advantage this module can validate if a source is one of multiple types.
### Same Size Validator
The purpose of this module is to check if the target string is length equals the source string length. It can compare strings and arrays.
### Not Same Size Validator
The purpose of this module is to check if the target string is length are not equals the source string length. It can compare strings and arrays.
## Code Sample
This following code is to tested that all methods correctly functions as intended, is also provided in this module.
```
import { validate } from '@teamcoder/completevalidator';

console.log( "Testing valueIsBigger        Passed = " + validate.valueIsBigger(       15            , 14                    ) );
console.log( "Testing subStringIsValid     Passed = " + validate.subStringIsValid(    "Hallo world" , "world"       , true  ) );
console.log( "Testing valueIsEqual         Passed = " + validate.valueIsEqual(        "Hallo world" , "Hallo world"         ) );
console.log( "Testing valueIsLonger        Passed = " + validate.valueIsLonger(       "Hallo "      , "world"               ) );
console.log( "Testing mqttTopicIsValid     Passed = " + validate.mqttTopicIsValid(    "myhome/door" , "#"                   ) );
console.log( "Testing subStringIsNotValid  Passed = " + validate.subStringIsNotValid( "Hallo world" , "World"       , true  ) );
console.log( "Testing valueIsNotEqual      Passed = " + validate.valueIsNotEqual(     true          , false                 ) );
console.log( "Testing regExIsValid         Passed = " + validate.regExIsValid(        "Hallo world" , "^Hallo"              ) );
console.log( "Testing valueIsShorter       Passed = " + validate.valueIsShorter(      "Hallo"       , " world"              ) );
console.log( "Testing valueIsSmaller       Passed = " + validate.valueIsSmaller(      14            , 15                    ) );
console.log( "Testing valueIsTypeOf        Passed = " + validate.valueIsTypeOf(       "Hallo"       , "string"              ) );
console.log( "Testing valueIsSameSize      Passed = " + validate.valueIsSameSize(     "Hallo"       , "world"               ) );
console.log( "Testing valueIsNotSameSize   Passed = " + validate.valueIsNotSameSize(  "Hallo "      , "world"               ) );
```
The results will look as follows
```
Testing valueIsBigger        Passed = true
Testing subStringIsValid     Passed = true
Testing valueIsEqual         Passed = true
Testing valueIsLonger        Passed = true
Testing mqttTopicIsValid     Passed = true
Testing subStringIsNotValid  Passed = true
Testing valueIsNotEqual      Passed = true
Testing regExIsValid         Passed = true
Testing valueIsShorter       Passed = true
Testing valueIsSmaller       Passed = true
Testing valueIsTypeOf        Passed = true
Testing valueIsSameSize      Passed = true
Testing valueIsNotSameSize   Passed = true
```
## Function: validate.valueIsBigger( source , target , equal )
### Parameters Passed
```
@param  { String , Number } source        The source value to compare
@param  { String , Number } target        The target value to compare
@param  { Boolean         } equal         Check if source value and target value equal ( optional , default = false )
```
### Parameters Returned
```
@return { Boolean         }               Validation passed or failed
```
## Function: validate.subStringIsValid( source , subString , caseSensitive )
### Parameters Passed
```
@param  { String  }  source        The source string to be checked
@param  { String  }  subString     The sub string to be checked
@param  { Boolean }  caseSensitive If the check must be case sensitive ( optional , default = true )
```
### Parameters Returned
```
@return { Boolean }                Validation passed or failed
```
## Function: validate.valueIsEqual( source , target , caseSensitive )
### Parameters Passed
```
@param  { Any     } source        The source value to be checked
@param  { Any     } target        The target value to be checked
@param  { Boolean } caseSensitive If the check must be case sensitive ( optional , default = true )
```
### Parameters Returned
```
@return { Boolean }               Validation passed or failed
```
## Function: validate.valueIsLonger( source , target , equal )
### Parameters Passed
```
@param  { String , Array } source        The source value to be checked
@param  { String , Array } target        The target value to be checked
@param  { Boolean        } equal         Check if value is equal as well ( optional , default = false )
```
### Parameters Returned
```
@return { Boolean        }               Validation passed or failed
```
## Function: validate.mqttTopicIsValid( source , target )
### Parameters Passed
```
@param  { String  }  source  The source string to be compared
@param  { String  }  target  The target string to be compared
```
### Parameters Returned
```
@return { Boolean }          Validation passed or failed
```
## Function: subStringIsNotValid( source , subString , caseSensitive )
### Parameters Passed
```
@param  { String  }  source        The source string to be checked
@param  { String  }  subString     The sub string to be checked
@param  { Boolean }  caseSensitive If the check must be case sensitive ( optional , default = true )
```
### Parameters Returned
```
@return { Boolean }                Validation passed or failed
```
## Function: validate.valueIsNotEqual( source , target , caseSensitive )
### Parameters Passed
```
@param  { Any     } source        The source value to be checked
@param  { Any     } target        The target value to be checked
@param  { Boolean } caseSensitive If the check must be case sensitive ( optional , default = true )
```
### Parameters Returned
```
@return { Boolean }               Validation passed or failed
```
## Function: validate.regExIsValid( source , expression )
### Parameters Passed
```
@param  { String  } source        The source string to be checked
@param  { String  } expression    The regular expression to use
```
Parameters Returned
```
@return { Boolean }               Validation passed or failed
```
## Function: validate.valueIsShorter( source , target , equal )
### Parameters Passed
```
@param  { String , Array } source        The source value to be checked
@param  { String , Array } target        The target value to be checked
@param  { Boolean        } equal         Check if value is equal as well ( optional , default = false )
```
Parameters Returned
```
@return { Boolean        }               Validation passed or failed
```
## Function: validate.valueIsSmaller( source , target , equal )
### Parameters Passed
```
@param  { String , Number } source   The source value to be checked
@param  { String , Number } target   The target that must be smaller to source
@param  { Boolean         } equal    Check if value is equal as well ( optional , default = false )
```
Parameters Returned
```
@return { Boolean         }          Validation passed or failed
```
## Function: validate.valueIsTypeOf( source , type )
### Parameters Passed
```
@param  { Any            } source           The source value to be checked
@param  { String, Array  } type             The type or types to validate ( "undefined" , "boolean" , "number" , "string" ,
                                                 "symbol" , "function" , "object" , "array" , "nan" , "declared" , "null" )
```
### Parameters Returned
```
@return { Boolean        }                  Validation passed or failed
@return { Null           }                  Invalid type specified in type
```
## Function: validate.valueIsSameSize( source , target )
### Parameters Passed
```
@param  { String , Array } source        The source value to be checked
@param  { String , Array } target        The target value to be checked
```
Parameters Returned
```
@return { Boolean        }               Validation passed or failed
```
## Function: validate.valueIsNotSameSize( source , target )
### Parameters Passed
```
@param  { String , Array } source        The source value to be checked
@param  { String , Array } target        The target value to be checked
```
Parameters Returned
```
@return { Boolean        }               Validation passed or failed
```
## Notes Before You Start
Very important to remember to always include the following in your main project package.json file:
```
"type": "module"
```
Without this entry in the package file you will get the following error if you try to run your project
```
(node:15500) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use 'node --trace-warnings ...' to show where the warning was created)
C:\Users\ ... \completevalidator\completevalidator.js:1
import { validate } from '@teamcoder/completevalidator';
```
## Version History
| Version  | Date                   | Remark                                                                                                |
|----------|------------------------|-------------------------------------------------------------------------------------------------------|
| 1.0.0    | 11 September 2022      | Official first release                                                                                |
| 1.0.1    | 11 September 2022      | Need to republish under new version                                                                   |
## How To Install
Run the following command in a terminal or command prompt in the folder you want to install the module to.
> npm i @teamcoder/completevalidator
## Dependencies:
```
@teamcoder/biggervalidator
@teamcoder/containvalidator
@teamcoder/equalvalidator
@teamcoder/longervalidator
@teamcoder/mqtttopicvalidator
@teamcoder/notcontainvalidator
@teamcoder/notequalvalidator
@teamcoder/notsamesizevalidator
@teamcoder/regexvalidator
@teamcoder/samesizevalidator
@teamcoder/shortervalidator
@teamcoder/smallervalidator
@teamcoder/typevalidator
```
## Operating Systems Tested On
>Windows, Linux and RaspberryPi
## License Information
CompleteValidator © 2022 by Adriaan J. van Rensburg (CreepyCoderMC) is licensed under CC BY-NC-ND 4.0.
> To view a online copy of this license, visit [http://creativecommons.org/licenses/by-nc-nd/4.0/](http://creativecommons.org/licenses/by-nc-nd/4.0/)
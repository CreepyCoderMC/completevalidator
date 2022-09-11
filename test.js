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
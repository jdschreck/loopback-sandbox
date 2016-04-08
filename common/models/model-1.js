module.exports = function(Model1) {
  Model1.init=function(cb) {
    Model1.create([
      {"description": "description1",
       "catalog": "catalog1",
       "name": "MyFirstModel1"
      },
      {"description": "description2",
       "catalog": "catalog2",
       "name": "MySecondModel1"
      },
      {"description": "description3",
       "catalog": "catalog3",
       "name": "MyThirdModel1"
      }]);
    cb(null, "Done");
  };
  Model1.remoteMethod(
      'init',
      {
         accepts: [],
         returns: [
            {arg: 'results', type: 'string'}
         ],
         http: {path: '/init', verb: 'post'},
         isStatic: true
      }
   );

  Model1.runQuery=function(cb) {
    var filter = {
       where: {},
       include:{
          relation: "model2s",
          scope: {
             where: {}
          }
       }
     };
     Model1.find(filter, function(err, result) {
        console.log("Here is the console.log on the raw result:");
        console.log(result);
        console.log("\nHere is the console.log on the stringified result:");
        console.log(JSON.stringify(result));

// If this line is uncommented things will work.
// What is the difference between the original result and the
// result returned by this action?
//        result = JSON.parse(JSON.stringify(result));

        var i, j;
        for (i=0; i<result.length; i++) {
           console.log("\nHere is result[" + i + "]:");
           console.log(result[i]);
           for (j=0; j<result[i].model2s.length; j++) {
               console.log("\nHere is result[" + i + "].model2s[" + j + "]:");
               console.log(result[i].model2s[j]);
           }
        }
        cb(null, result);
     });
  };
  
  Model1.remoteMethod(
      'runQuery',
      {
         accepts: [],
         returns: [
            {arg: 'results', type: 'string'}
         ],
         http: {path: '/runQuery', verb: 'get'},
         isStatic: true
      }
   );
       

};

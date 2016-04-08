module.exports = function(Model2) {
  Model2.init=function(cb) {
    Model2.create([{
      "name": "model2_instance1",
      "test2": "abc",
      "test1": "MySecondModel1"
    },
    { "name": "model2_instance2",
      "test2": "ghi",
      "test1": "MySecondModel1"
    },
    { "name": "model2_instance3",
      "test2": "pqr",
      "test1": "MyFirstModel1"
    },
    { "name": "model2_instance4",
      "test2": "tuv",
      "test1": "MyFirstModel1"
    },
    { "name": "model2_instance5",
      "test2": "wxy",
      "test1": "MyFirstModel1"
    }
    ]);
    cb(null, "Done");
  };
  Model2.remoteMethod(
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
};

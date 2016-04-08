# loopback-sandbox

A repository for reproducing [LoopBack community issues][wiki-issues].

To run this testcase in the Explorer run:

   Model1/init
   Model2/init
   Model1/runQuery

There are two files present... bad.output which exhibits the problem and
good.output which shows it working if I do a parse(stringify(results)).  The
example is configured to produce the bad output initially.

If you then uncomment line 49 of model-1.js it will run successfully.
 
[wiki-issues]: https://github.com/strongloop/loopback/wiki/Reporting-issues

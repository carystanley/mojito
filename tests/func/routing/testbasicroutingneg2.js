/*
 * This is a basic func test for a Routing application.
 */
 YUI({
     useConsoleOutput: true,
     useBrowserConsole: true,
     logInclude: { TestRunner: true }
 }).use('node', 'node-event-simulate', 'test', function (Y) {

     var suite = new Y.Test.Suite("Routing");

     suite.add(new Y.Test.Case({
	     "test BasicRoutingNeg3": function(){ 
             Y.Assert.areEqual("Cannot GET /complete/invalid/path", Y.one('pre').get('innerHTML'));
         }
    }));    

    Y.Test.Runner.add(suite);
 });
         

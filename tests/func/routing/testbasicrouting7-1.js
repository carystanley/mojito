/*
 * This is a basic func test for a Routing application.
 */
YUI({
    useConsoleOutput: true,
    useBrowserConsole: true,
    logInclude: { TestRunner: true }
}).use('node', 'node-event-simulate', 'test', 'console', function (Y) {
   
    var suite = new Y.Test.Suite("Routing");
    
    suite.add(new Y.Test.Case({
	     "test BasicRouting7-1": function(){   Y.Assert.areEqual('This is a simple mojit for testing routing - SimpleRoute (route-1)', Y.one('#mytext').get('innerHTML'));
         }
   }));    

   Y.Test.Runner.add(suite);
});

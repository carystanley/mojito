/*
 * This is a basic func test for a Common application.
 */
YUI({
    useConsoleOutput: true,
    useBrowserConsole: true,
    logInclude: { TestRunner: true }
}).use('node', 'node-event-simulate', 'test', 'console', function (Y) {
   
    var suite = new Y.Test.Suite("Common");

    suite.add(new Y.Test.Case({

        "test mojitproxybroadcastdynamic": function() {
            var that = this;
            Y.one('#dynamicButton').simulate('click');
            that.wait(function(){//Parent - Child Communication: Dynamic children
	            Y.log("*****testing broadcast all and listen *******");
	            Y.Assert.areEqual('Parent - Child Communication: Dynamic children', Y.one('#dynamictitle').get('innerHTML').match(/Parent - Child Communication: Dynamic children/gi));
	
	            Y.Assert.areEqual('I\'m a red child.', Y.all('#childred').item(0).get('innerHTML').match(/I\'m a red child./gi));
	            Y.Assert.areEqual('I\'m a red child.', Y.all('#childred').item(1).get('innerHTML').match(/I\'m a red child./gi));
	            Y.Assert.areEqual('I\'m a red child.', Y.all('#childred').item(2).get('innerHTML').match(/I\'m a red child./gi));
	            Y.Assert.areEqual('I\'m a red child.', Y.all('#childred').item(3).get('innerHTML').match(/I\'m a red child./gi));
	
	            Y.Assert.areEqual('I\'m a blue child.', Y.all('#childblue').item(0).get('innerHTML').match(/I\'m a blue child./gi));
	            Y.Assert.areEqual('I\'m a blue child.', Y.all('#childblue').item(1).get('innerHTML').match(/I\'m a blue child./gi));
	
	            Y.Assert.areEqual('I\'m a green child.', Y.all('#childgreen').item(0).get('innerHTML').match(/I\'m a green child./gi));
	            Y.Assert.areEqual('I\'m a green child.', Y.all('#childgreen').item(1).get('innerHTML').match(/I\'m a green child./gi));
	            Y.Assert.areEqual('I\'m a green child.', Y.all('#childgreen').item(2).get('innerHTML').match(/I\'m a green child./gi));
	            Y.Assert.areEqual('I\'m a green child.', Y.all('#childgreen').item(3).get('innerHTML').match(/I\'m a green child./gi));
	            Y.Assert.areEqual('I\'m a green child.', Y.all('#childgreen').item(4).get('innerHTML').match(/I\'m a green child./gi));
	            //need to work on this : click doesn't work
	            Y.all('#childred').item(0).simulate('mouseover');
	            Y.all('#childgreen').item(3).simulate('mouseover');
	            Y.all('#childblue').item(0).simulate('mouseover');
	            that.wait(function(){
		            Y.Assert.areEqual('bunny', Y.all('#childred').item(0).get('innerHTML').match(/bunny/gi));
				    Y.Assert.areEqual('ASPLODE!', Y.all('#childred').item(1).get('innerHTML').match(/ASPLODE!/gi));
		            Y.Assert.areEqual('I\'m a red child.', Y.all('#childred').item(2).get('innerHTML').match(/I\'m a red child./gi));
		            Y.Assert.areEqual('ASPLODE!', Y.all('#childred').item(3).get('innerHTML').match(/ASPLODE!/gi));

		            Y.Assert.areEqual('bunny', Y.all('#childblue').item(0).get('innerHTML').match(/bunny/gi));
		            Y.Assert.areEqual('ASPLODE!', Y.all('#childblue').item(1).get('innerHTML').match(/ASPLODE!/gi));

		            Y.Assert.areEqual('I\'m a green child.', Y.all('#childgreen').item(0).get('innerHTML').match(/I\'m a green child./gi));
		            Y.Assert.areEqual('I\'m a green child.', Y.all('#childgreen').item(1).get('innerHTML').match(/I\'m a green child./gi));
		            Y.Assert.areEqual('I\'m a green child.', Y.all('#childgreen').item(2).get('innerHTML').match(/I\'m a green child./gi));
		            Y.Assert.areEqual('I\'m a green child.', Y.all('#childgreen').item(3).get('innerHTML').match(/I\'m a green child./gi));
		            Y.Assert.areEqual('I\'m a green child.', Y.all('#childgreen').item(4).get('innerHTML').match(/I\'m a green child./gi));
		        }, 10000);
            }, 5000);
        }

    }));

    Y.Test.Runner.add(suite);

    function enterText(node, str){
        for (var i = 0, length = str.length; i < length; i++) {
            node.simulate("keypress", {
                charCode: str.charCodeAt(i)
            }); 	
        }
    }
});
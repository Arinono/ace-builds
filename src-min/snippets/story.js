define("ace/snippets/story",["require","exports","module"],function(e,t,n){"use strict";t.snippetText="comment block\n###\n\n# comment line\n\n###\ncomment block\n### with extra stuff\n\n# Varibles\nfoo = bar\nfoo = foo.bar['a'][0]\n\n# Services\nservice action\nservice action key:value\ny = service action key : value\n                   key : value\nteam/service action\nteam/service action key:value\nteam/service-slug1 action key : value key:value\n\n# Lists\n[(owner/repo action key:value), 1, 'a', true] # comment\n[owner/repo action key:value]\n\n# Maps\n{\n    \"a\": 1 == 2, # this is not commented out :(\n    'c': 1, # domm\n    'd': [123] #com\n    \"b\": owner/repo action key:value # comment\n}\n\n# not valid\n1d = x1d\nttrue = ttrue\nastring = astring\n\n# Valid\n1d true (true)\nx = 1d\nservice action a:1d1w b:true c:string\n\n{\"a\": (owner/repo action key:value)}\n\n# Operations\nif a == thing\nelse if a == string\nforeach a as y\nwhile a\n\n# Event Streaming\nservice action as client\n  when client event as out\n    # ...\n  when client event as out\n    # ...\n\nservice action\n  when event as out\n    # ....\n\nwhen service action event\n    # ....\n\n# Regexp\n[/a/, /a/i, /a/ig]\n\n# Strings\n'string'\n'st{r}ing'\n'st{ r }ing'\n'st{  do this key:value  }in{foobar}g'\n\n\"\"\"\nLong {strings} \\{ok}\n\\{escaped placeholder}\n \\{hello}\n\"\"\"\n\n'''\nLong {strings}\n'''\n\n# Constants\n[true, false, null]\n[1, 1.2, -1]\n\n# Types\nint string function null boolean map list object\n\n# Keyword\nand or\nwhen return returns as foreach\nwhile if else try catch finally\nbreak continue\n\n# Puncuation\n((a) .y['1'])[1]\n((a).y['1'])[1]\n\n# Functions\nfunction abc key:string key : int returns int \n\nfunction abc key:string  # comment\n			 key : int\n			 returns int \n	do this\n	return 5\n\nfunction abc key:string returns int \n\nfunction abc key:string\n\nfunction abc\n	return\n\nfunction abc",t.scope="story"});                (function() {
                    window.require(["ace/snippets/story"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            
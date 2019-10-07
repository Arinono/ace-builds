define("ace/snippets/story",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "comment block\n\
###\n\
\n\
# comment line\n\
\n\
###\n\
comment block\n\
### with extra stuff\n\
\n\
# Varibles\n\
foo = bar\n\
foo = foo.bar['a'][0]\n\
\n\
# Services\n\
service action\n\
service action key:value\n\
y = service action key : value\n\
                   key : value\n\
team/service action\n\
team/service action key:value\n\
team/service-slug1 action key : value key:value\n\
\n\
# Lists\n\
[(owner/repo action key:value), 1, 'a', true] # comment\n\
[owner/repo action key:value]\n\
\n\
# Maps\n\
{\n\
    \"a\": 1 == 2, # this is not commented out :(\n\
    'c': 1, # domm\n\
    'd': [123] #com\n\
    \"b\": owner/repo action key:value # comment\n\
}\n\
\n\
# not valid\n\
1d = x1d\n\
ttrue = ttrue\n\
astring = astring\n\
\n\
# Valid\n\
1d true (true)\n\
x = 1d\n\
service action a:1d1w b:true c:string\n\
\n\
{\"a\": (owner/repo action key:value)}\n\
\n\
# Operations\n\
if a == thing\n\
else if a == string\n\
foreach a as y\n\
while a\n\
\n\
# Event Streaming\n\
service action as client\n\
  when client event as out\n\
    # ...\n\
  when client event as out\n\
    # ...\n\
\n\
service action\n\
  when event as out\n\
    # ....\n\
\n\
when service action event\n\
    # ....\n\
\n\
# Regexp\n\
[/a/, /a/i, /a/ig]\n\
\n\
# Strings\n\
'string'\n\
'st{r}ing'\n\
'st{ r }ing'\n\
'st{  do this key:value  }in{foobar}g'\n\
\n\
\"\"\"\n\
Long {strings} \\{ok}\n\
\\{escaped placeholder}\n\
 \\{hello}\n\
\"\"\"\n\
\n\
'''\n\
Long {strings}\n\
'''\n\
\n\
# Constants\n\
[true, false, null]\n\
[1, 1.2, -1]\n\
\n\
# Types\n\
int string function null boolean map list object\n\
\n\
# Keyword\n\
and or\n\
when return returns as foreach\n\
while if else try catch finally\n\
break continue\n\
\n\
# Puncuation\n\
((a) .y['1'])[1]\n\
((a).y['1'])[1]\n\
\n\
# Functions\n\
function abc key:string key : int returns int \n\
\n\
function abc key:string  # comment\n\
			 key : int\n\
			 returns int \n\
	do this\n\
	return 5\n\
\n\
function abc key:string returns int \n\
\n\
function abc key:string\n\
\n\
function abc\n\
	return\n\
\n\
function abc";
exports.scope = "story";

});                (function() {
                    window.require(["ace/snippets/story"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            
# global-events


## Description
Plugin to administrate any events

## Installation
### bower
`bower install https://github.com/FCOO/global-events.git --save`

## Demo
http://FCOO.github.io/global-events/demo/ 

## Usage
```var myGlobalEvents = new GlobalEvents();```

### Methods

#### Adding events
`eventNames` = string with the name or names (seperated by space) of the event(s)

```on(eventNames, callback, context);``` will add a function to the event(s) ```eventNames```

```once(eventNames, callback, context);``` will add a function to the event(s) ```eventNames``` that will only be fired/triged once

```onFirst(eventNames, callback, context);``` will add a function to the event(s) ```eventNames```. The function wil be called first when the event is fired

```onLast(eventNames, callback, context);``` will add a function to the event(s) ```eventNames```. The function wil be called last when the event is fired

```onceFirst(eventNames, callback, context);``` will add a function to the event(s) ```eventNames```. The function will be called first when the event is fired but only once

```onceLast(eventNames, callback, context);``` will add a function to the event(s) ```eventNames```. The function wil be called last when the event is fired but only once

```off(eventNames, callback, context);``` remove the function from the event(s) ```eventNames```

```one(...)``` same as ```once(...)```

```oneFirst(...)``` same as ```onceFirst(...)```

```oneLast(...)``` same as ```onceLast(...)```

#### Fire/trigger a event

```globalEvents.fire(eventName [,arg1, arg2,.., argN]);``` fire/trigger the event ```eventName```

```globalEvents.trigger``` same as ```fire```

###  Example

#### Adding events
```
var globalEvents = new GlobalEvents();
globalEvents.on('myEvent myOtherEvent', function( arg1 ){ alert('Hello from '+arg1); } );
globalEvents.onLast('myEvent myOtherEvent', function( arg1 ){ alert('Last hello from '+arg1); } );
globalEvents.onFirst('myEvent myOtherEvent', function( arg1 ){ alert('First hello from '+arg1); } );
globalEvents.once('myEvent myOtherEvent', function( arg1 ){ alert('Only one hello from '+arg1); } );
var f = function( arg1 ){ alert('NEVER hello from '+arg1); };
globalEvents.on('myEvent', f );
globalEvents.off('myEvent', f );
```

#### Fire the event
```
globalEvents.fire('myEvent', 'MY-EVENT');
globalEvents.fire('myOtherEvent', 'MY-OTHER-EVENT');
```


## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/global-events/LICENSE).

Copyright (c) 2015 [FCOO](https://github.com/FCOO)

## Contact information

Niels Holt nho@fcoo.dk


## Credits and acknowledgements


## Known bugs

## Troubleshooting

## Changelog




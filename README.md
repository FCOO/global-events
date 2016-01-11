# global-events
Plugin to administrate any events

## Usage
```var globalEvents = new GlobalEvents()```

### Adding events
```globalEvents.on(eventName, callback, context);``` will add a function to the event ```eventName```

```globalEvents.once(eventName, callback, context);``` will add a function to the event ```eventName``` that will only be fired/triged once

```globalEvents.onFirst(eventName, callback, context);``` will add a function to the event ```eventName```. The function wil be called first when the event is fired

```globalEvents.onLast(eventName, callback, context);``` will add a function to the event ```eventName```. The function wil be called last when the event is fired

```globalEvents.onceFirst(eventName, callback, context);``` will add a function to the event ```eventName```. The function will be called first when the event is fired but only once

```globalEvents.onceLast(eventName, callback, context);``` will add a function to the event ```eventName```. The function wil be called last when the event is fired but only once

```globalEvents.off(eventName, callback, context);``` remove the function from the event ```eventName```


### Fire/trigger a event

```globalEvents.fire(eventName [,arg1, arg2,.., argN]);``` fire/trigger the event ```eventName```

```globalEvents.trigger``` same as ```fire```


### Exsample
```
var globalEvents = new GlobalEvents();
globalEvents.on('myEvent', function( arg1 ){ alert('Hello from '+arg1); } );
globalEvents.onLast('myEvent', function( arg1 ){ alert('Last hello from '+arg1); } );
globalEvents.onFirst('myEvent', function( arg1 ){ alert('First hello from '+arg1); } );
globalEvents.once('myEvent', function( arg1 ){ alert('Only one hello from '+arg1); } );
var f = function( arg1 ){ alert('NEVER hello from '+arg1); };
globalEvents.on('myEvent', f );
globalEvents.off('myEvent', f );
```
Fire using
```
globalEvents.fire('myEvent', 'THE FIRST ARGUMENT');

```


## Installing
### bower
`bower install https://github.com/FCOO/global-events.git --save`



## License
This plugin is licensed under the [MIT license](https://github.com/FCOO/global-events/LICENSE).

Copyright (c) 2015 [FCOO](https://github.com/FCOO)

/****************************************************************************
	global-events, a plugin to administrate any events

	(c) 2015, FCOO

	https://github.com/FCOO/global-events
	https://github.com/FCOO

****************************************************************************/

(function ($, window, document, undefined) {
	"use strict";

	function GlobalEvents( ) {
		var i;
		this.events = {};

		this._loop = function _loop( eventName, func, reverse ){
			this.events[eventName] = this.events[eventName] || []; 		
			var lgd = this.events[eventName].length;
			if (reverse){
				for (i=lgd-1; i>=0; i-- )
					if (func( this.events[eventName][i], i, this.events[eventName] ))
					  break;
			} else {
				for (i=0; i<lgd; i++ )
					if (func( this.events[eventName][i], i, this.events[eventName] ))
					  break;
			}
		};

		this.on = function on(eventName, callback, context, options){
			this.events[eventName] = this.events[eventName] || []; 		
			this.events[eventName].push( {
				callback: callback,
				context	: context || null,
				options	: $.extend( {once:false, first:false, last:false}, options ) 
			});
		
		};

		this.once				= function once(			eventName, callback, context ) { this.on( eventName, callback, context, {	once:true 						} ); };
		this.onFirst		= function onFirst(		eventName, callback, context ) { this.on( eventName, callback, context, {						 first:true	} ); };
		this.onLast			= function onLast(		eventName, callback, context ) { this.on( eventName, callback, context, {						 last:true	} ); };
		this.onceFirst	= function onceFirst(	eventName, callback, context ) { this.on( eventName, callback, context, { once:true, first:true	} ); };
		this.onceLast		= function onceFirst(	eventName, callback, context ) { this.on( eventName, callback, context, { once:true, last:true	} ); };

		this.off = function off(eventName, callback, context){
			this._loop( eventName, function( eventObj, index, list ){
				if ( (callback == eventObj.callback) &&
						 (!context || (context == eventObj.context)) ){ 
					list.splice(index, 1);
					return true;
				}
			});
		};


		this.fire = function fire( eventName /*, arg1, arg2, .., argN */ ){ 
			var newArguments = [];
			for (var i=1; i < arguments.length; i++) {
				newArguments.push(arguments[i]);
			}

			//Fire the functions marked 'first'
			this._loop( eventName, function( eventObj ){ 
				if (eventObj.options.first)
					eventObj.callback.apply( eventObj.context, newArguments );	  
			});

			//Fire the functions not marked 'first' or 'last'
			this._loop( eventName, function( eventObj ){ 
				if (!eventObj.options.first && !eventObj.options.last)
					eventObj.callback.apply( eventObj.context, newArguments );	  
			});

			//Fire the functions marked 'last'
			this._loop( eventName, function( eventObj ){ 
				if (eventObj.options.last)
					eventObj.callback.apply( eventObj.context, newArguments );	  
			});
			
			//Remove all functions marked 'once'
			this._loop( eventName, function( eventObj, index, list ){ 
				if (eventObj.options.once)
					list.splice(index, 1);
			}, true);
		};

		this.trigger	= function(){ this.fire( arguments );				};
		this.one			=	function(){	this.once( arguments );				};
		this.oneFirst	= function(){	this.onceFirst( arguments );	};
		this.oneLast	=	function(){	this.onceLast( arguments  );	};

	}
  
  // expose access to the constructor
  window.GlobalEvents = GlobalEvents;

}(jQuery, this, document));
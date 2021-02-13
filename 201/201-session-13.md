### Read: 13 - Local Storage “The Past, Present, and Future of Local Storage for Web Applications” 

### History of local Storage

IE was the first web browser, and it was created by Microsoft. DHTML behaviour, one of these behaviours was userData, that allowed webpages to store up to 64 KB per domain. Then flash came along in 2002 thanks to Adobe which introduced Local Share Objects. These could save up to 100 KB for free. 2007 Google launched Gears. Gears provides an API to an embedded SQL database. Gears can store unlimited amounts of data per domain in SQL database tables.
2009 dojox.storage: could auto detect Adobe Flash, Gears, Adobe AIR.

#### Patterns of early Browser Storage
+ specified to single browser
+ reliant on a third-party plugin
#### Introducing HTML5 Storage
“Local Storage” or “DOM Storage”
A way for webpages to store key/value parings within users web browser. Data is there even after you navigate off the page. Available without third party plugin. Data is always saved as a string. The storage event is fired on the window object whenever setItem(), removeItem(), or clear() is called and actually changes something
Each origin gets 5 megabytes of storage by default
#### SQL
Web SQL Database (formerly known as “WebDB”) provides a thin wrapper around a SQL database
Action exists in the executeSql method. Strings include SELECT, UPDATE, INSERT, and DELETE statements. It’s like backend database programming via js.
Indexed Database API - Formerly known as “WebSimpleDB”
Object storage
There are “databases” with “records,” and each record has a set number of “fields”
Changes to storage are handled with “transactions”.

#### How to access HTML5 Storage?

from JavaScript code, access HTML5 Storage through the localStorage object on the global window object.


### Using HTML5 Storage

HTML5 Storage is based on named key/value pairs
Stores data based on a named key (that data can be retrieved with the same key)
+ named key is a string.
+ data can be any type supported by JavaScript, including strings, Booleans, integers, or floats (stored as a string).

```
interface Storage {
  getter any getItem(in DOMString key);
  setter creator void setItem(in DOMString key, in any data);
};
```

Calling setItem() with a named key that already exists will silently overwrite the previous value. Calling getItem() with a non-existent key will return null rather than throw an exception.

Instead of using the getItem() and setItem() methods, you can simply use square brackets.

```
var foo = localStorage.getItem("bar");
// ...
localStorage.setItem("bar", foo);

var foo = localStorage["bar"];

localStorage["bar"] = foo;
```

Methods for removing the value for a given named key, and clearing the entire storage area (that is, deleting all the keys and values at once).

```
interface Storage {
  deleter void removeItem(in DOMString key);
  void clear();
};
```

Property to get the total number of values in the storage area, and to iterate through all of the keys by index (to get the name of each key).

```
interface Storage {
  readonly attribute unsigned long length;
  getter DOMString key(in unsigned long index);
};
```

#### Tracking changes to the HTML5 Storage area
To keep track programmatically of when the storage area changes, we can trap the storage event. The storage event is fired on the window object whenever setItem(), removeItem(), or clear() is called and actually changes something. For example, if we set an item to its existing value or call clear() when there are no named keys, the storage event will not fire, because nothing actually changed in the storage area.
```
if (window.addEventListener) {
  window.addEventListener("storage", handle_storage, false);
} else {
  window.attachEvent("onstorage", handle_storage);
};
```
The handle_storage callback function will be called with a StorageEvent object
```
function handle_storage(e) {
  if (!e) { e = window.event; }
}
```
[Back to ReadMe](../README.md)
/*jslint browser:true, indent:2*/

/*globals suite, test, setup, teardown, suiteSetup, suiteTeardown*/ // Mocha
/*globals chai*/ // Chai

/*globals atob, btoa, ArrayBuffer, Blob, FileReader*/ // Web APIs
/*globals IDBStore, reqwest*/ // libraries

var assert = chai.assert;

var store, url;

url = '//placekitten.com/g/200/200';

// http://stackoverflow.com/questions/16245767/
function base64toBlob(base64Data, contentType) {
  'use strict';
  contentType = contentType || '';
  var sliceSize, byteCharacters, bytesLength, slicesCount, byteArrays,
    sliceIndex, begin, end, bytes, offset, i;

  sliceSize = 1024;
  byteCharacters = atob(base64Data);
  bytesLength = byteCharacters.length;
  slicesCount = Math.ceil(bytesLength / sliceSize);
  byteArrays = new Array(slicesCount);

  for (sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    begin = sliceIndex * sliceSize;
    end = Math.min(begin + sliceSize, bytesLength);
    bytes = new Array(end - begin);
    for (offset = begin, i = 0 ; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: contentType });
}

suite('browser compatibility', function () {
  'use strict';
  var store;

  test('IDBWrapper installed global IDBStore()', function () {
    assert.isFunction(window.IDBStore);
  });

  test('browser supports XMLHttpRequest with CORS', function () {
    var xhr;
    assert.isFunction(XMLHttpRequest);
    xhr = new XMLHttpRequest();
    assert.property(xhr, 'withCredentials');
  });

  test('browser supports Typed Arrays (e.g. ArrayBuffer)', function () {
    var xhr;
    assert.isFunction(ArrayBuffer);
  });

  test('browser supports binary-Base64 conversion', function () {
    var xhr;
    assert.isFunction(atob);
    assert.isFunction(btoa);
  });

  test('browser supports File API', function () {
    var b;
    assert.isFunction(window.Blob, 'Blob');
    try {
      b = new Blob(['hi'], { type: 'text/plain' });
      assert.ok(true, 'supports new Blob constructor');
    } catch (e) {
      assert.ok(false, 'supports new Blob constructor');
    }
    assert.isFunction(window.FileReader, 'FileReader');
    assert.ok(window.URL, 'URL');
    assert.isFunction(URL.createObjectURL, 'URL.createObjectURL');
    return b;
  });

  test('browser supports IndexedDB', function (done) {
    store = new IDBStore({
      storeName: 'test',
      storePrefix: 'web-experiments/indexeddb-images-',
      dbVersion: 1,
      onStoreReady: function () {
        assert.ok(true);
        done();
      },
      onError: function () {
        assert.ok(false, 'new IDBStore -> onError');
        done();
      }
    });
  });

  test('(optional) browser supports Blobs in IndexedDB', function (done) {
    var testBlob;
    testBlob = new Blob(['test'], { type: 'text/plain' });
    assert.doesNotThrow(function () {
      store.put({ id: 'blob', blob: testBlob });
    });
  });

  suiteTeardown(function (done) {
    if (store && store.deleteDatabase) {
      store.deleteDatabase();
    }
    setTimeout(done, 1e3);
  });

});

suite('store image in IndexedDB', function () {
  'use strict';
  var blob;

  test('store created via IDBStore()', function (done) {
    store = new IDBStore({
      storeName: 'blobs',
      storePrefix: 'web-experiments/indexeddb-images-',
      dbVersion: 1,
      onStoreReady: function () {
        assert.ok(true);
        done();
      },
      onError: function () {
        assert.ok(false, 'new IDBStore -> onError');
        done();
      }
    });
  });

  test('request image data', function (done) {
    var xhr;
    xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          assert.ok(true);
          blob = new Blob([xhr.response], { type: 'image/jpeg' });
        } else {
          assert.fail('image request failed');
        }
        done();
      }
    };
    xhr.setRequestHeader('Accept', 'image/jpeg');
    xhr.send(null);
  });

  test('save image data in store', function (done) {
    var fr;
    fr = new FileReader();
    fr.onloadend = function () {
      assert.ok(true);
      store.put({
        id: 'kitten.jpeg',
        data: fr.result,
        type: 'image/jpeg'
      }, function () { // onSuccess
        assert.ok(true);
        done();
      }, function () { // onError
        assert.fail('store.put() failed');
        done();
      });
    };
    fr.readAsDataURL(blob);
  });

});

suite('display image', function () {
  'use strict';
  var blob;

  test('reconstruct Blob from store', function (done) {
    store.get('kitten.jpeg', function (obj) { // onSuccess
      var index, base64;
      index = obj.data.indexOf(',');
      base64 = obj.data.substring(index + 1);
      blob = base64toBlob(base64, obj.type);
      done();
    }, function () { // onError
      assert.fail('store.get() failed');
      done();
    });
  });

  test('show image via direct reference', function (done) {
    var img;
    img = document.getElementById('direct');
    img.addEventListener('load', function () {
      assert.equal(img.height, 200, 'correct height');
      assert.equal(img.width, 200, 'correct height');
      done();
    }, false);
    img.src = url;
  });

  test('show image via Data URI', function (done) {
    var img, fr;
    img = document.getElementById('datauri');
    img.addEventListener('load', function () {
      assert.equal(img.height, 200, 'correct height');
      assert.equal(img.width, 200, 'correct height');
      done();
    }, false);
    fr = new FileReader();
    fr.onloadend = function () {
      assert.ok(true);
      img.src = fr.result;
    };
    fr.readAsDataURL(blob);
  });

  test('show image via Blob URL', function (done) {
    var img, url;
    url = URL.createObjectURL(blob);
    assert.isString(url);
    img = document.getElementById('bloburl');
    img.addEventListener('load', function () {
      assert.equal(img.height, 200, 'correct height');
      assert.equal(img.width, 200, 'correct height');
      done();
    }, false);
    img.src = url;
  });
});

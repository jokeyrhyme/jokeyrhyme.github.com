// http://stackoverflow.com/questions/16245767/
function base64toBlob(base64Data, contentType) {
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
    for (offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: contentType });
}

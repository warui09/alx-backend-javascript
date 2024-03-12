export default function createInt8TypedArray(length, position, value) {
  const arr = new Int8Array(length);

  if (position > length - 1) {
    throw new Error('Position outside range');
  }

  arr[position] = value;

  return new DataView(arr.buffer);
}

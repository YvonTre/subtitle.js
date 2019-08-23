export default function zeroFill (width, number, pad) {
  return number.toFixed().padStart(width, pad || '0')
}

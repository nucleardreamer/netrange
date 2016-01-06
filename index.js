module.exports = function getRange (from, to) {
  var o = []
  for(var i = ipToHex(from); i <= ipToHex(to); i++)
    o.push([
      (i >> 24) & 0xff, // octal 4
      (i >> 16) & 0xff, // octal 3
      (i >> 8) & 0xff,  // octal 2
      i & 0xff          // octal 1
    ].join('.'))
  return o
}

function ipToHex (ip) {
  return +(['0x'].concat(ip.split('.')
    .map(d => {
      var hex = Number(d).toString(16)
      while (hex.length < 2) hex = '0' + hex
      return hex;
    })
  ).join(''))
}

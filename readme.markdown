# netrange

get an accurate range of ips using a hex algorithm. useful for IPv4-based neighbor discovery on a subnet or other range sniffing activities. 

# install
```bash
$ npm i netrange
```

#  use
```js
require('netrange')('1.1.255.254','1.2.0.1') // ['1.1.255.254', '1.1.255.255', '1.2.0.0']
```

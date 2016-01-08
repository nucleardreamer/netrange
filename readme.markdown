# netrange

get an accurate range of ips using a hex algorithm. useful for IPv4-based
neighbor discovery on a subnet or for other range sniffing activities.

# install
```bash
$ npm i netrange
```

#  use
```js
require('netrange')('1.1.255.254','1.2.0.1') // ['1.1.255.254', '1.1.255.255', '1.2.0.0', '1.2.0.1']
```

# subnet slash
In slash notation, a single number indicates how many bits of the IP address identify the network the host is on. A netmask of 255.255.255.0 has a netmask of 8 + 8 + 8 = 24.
For example, writing 192.168.42.23/24 is the same as specifying an IP address of 192.168.42.23 with a corresponding netmask of 255.255.255.0. Often you have to enter the netmask as slash notation, an easy task with the usual 255.255.255.0. However if your network doesn't have 255 hosts, for example only 8 hosts, then the netmask will be 255.255.255.248.

The following table lists the variable length subnets from 1 to 32, the CIDR [3] representation form (/xx) and the Decmial equivalents. (M = Million, K=Thousand, A,B,C= traditional class values)

mask value: Hex | CIDR | Decimal | # of addresses | Classfull
--- | --- | --- | --- | ---
80.00.00.00 | /1 | 128.0.0.0 | 2048 M | 128 A
C0.00.00.00 | /2 | 192.0.0.0 | 1024 M | 64 A
E0.00.00.00 | /3 | 224.0.0.0 | 512 M | 32 A
F0.00.00.00 | /4 | 240.0.0.0 | 256 M | 16 A
F8.00.00.00 | /5 | 248.0.0.0 | 128 M | 8 A
FC.00.00.00 | /6 | 252.0.0.0 | 64 M | 4 A
FE.00.00.00 | /7 | 254.0.0.0 | 32 M | 2 A
FF.00.00.00 | /8 | 255.0.0.0 | 16 M | 1 A
FF.80.00.00 | /9 | 255.128.0.0 | 8 M | 128 B
FF.C0.00.00 | /10 | 255.192.0.0 | 4 M | 64 B
FF.E0.00.00 | /11 | 255.224.0.0 | 2 M | 32 B
FF.F0.00.00 | /12 | 255.240.0.0 | 1024 K | 16 B
FF.F8.00.00 | /13 | 255.248.0.0 | 512 K | 8 B
FF.FC.00.00 | /14 | 255.252.0.0 | 256 K | 4 B
FF.FE.00.00 | /15 | 255.254.0.0 | 128 K | 2 B
FF.FF.00.00 | /16 | 255.255.0.0 | 64 K | 1 B
FF.FF.80.00 | /17 | 255.255.128.0 | 32 K | 128 C
FF.FF.C0.00 | /18 | 255.255.192.0 | 16 K | 64 C
FF.FF.E0.00 | /19 | 255.255.224.0 | 8 K | 32 C
FF.FF.F0.00 | /20 | 255.255.240.0 | 4 K | 16 C
FF.FF.F8.00 | /21 | 255.255.248.0 | 2 K | 8 C
FF.FF.FC.00 | /22 | 255.255.252.0 | 1 K | 4 C
FF.FF.FE.00 | /23 | 255.255.254.0 | 512 | 2 C
FF.FF.FF.00 | /24 | 255.255.255.0 | 256 | 1 C
FF.FF.FF.80 | /25 | 255.255.255.128 | 128 | 1/2 C
FF.FF.FF.C0 | /26 | 255.255.255.192 | 64 | 1/4 C
FF.FF.FF.E0 | /27 | 255.255.255.224 | 32 | 1/8 C
FF.FF.FF.F0 | /28 | 255.255.255.240 | 16 | 1/16 C
FF.FF.FF.F8 | /29 | 255.255.255.248 | 8 | 1/32 C
FF.FF.FF.FC | /30 | 255.255.255.252 | 4 | 1/64 C
FF.FF.FF.FE | /31 | 255.255.255.254 | 2 | 1/128 C
FF.FF.FF.FF | /32 | 255.255.255.255 | This is a single host route | 

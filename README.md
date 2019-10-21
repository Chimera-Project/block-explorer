# Chimera-Blockchain-Explorer
Block explorer for Chimera CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon chimerad. It should be accessible from the Internet. Run chimerad with open port as follows:
```bash
./chimerad --enable-cors="*" --enable-blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=11246
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.


### Development
The Chimera Devs


### Note

Derived from the Pixel coin explorer that was forked from The Karbovanets/Karbowanec-Blockchain-Explorer.

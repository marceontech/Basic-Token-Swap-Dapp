// connect to Moralis server
Moralis.initialize("1Oos7miAzQfsjTwS0I6WlWja5bRvWKXOxl6LookX");
Moralis.serverURL = "https://2qblqmau71i5.moralishost.com:2053/server";
 
let dex;
//initialize moralis plugin
(async function(){
 
    await Moralis.initPlugins();
    dex = Moralis.Plugins.oneInch;
 
    await Moralis.enable();
    if(!Moralis.User.current())
      await Moralis.authenticate();

      
      })();
 
 
// Swap function 
async function swap(){
 
  const NATIVE_ADDRESS = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
  const ONEINCH_ADDRESS = "0x111111111117dc0aa78b770fa6a738034120c302";
  const options = {chain:"eth", 
                        fromTokenAddress:NATIVE_ADDRESS, 
                        toTokenAddress:ONEINCH_ADDRESS,
                        amount: Number(Moralis.Units.ETH("0.01")),
                        fromAddress: Moralis.User.current().get("ethAddress"),
                        slippage: 1
                    }
 
   
  var receipt = await dex.swap(options);
  console.log(receipt)
  
  document.getElementById("btn-login").onclick = swap;
}
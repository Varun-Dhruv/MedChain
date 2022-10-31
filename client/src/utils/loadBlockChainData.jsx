const loadBlockChainData = async () => {
    const web3 = window.web3//Declare Web3

    const accounts = await web3.eth.getAccounts() //Load account
    const account = accounts[0] 
   // setAccount(account) sett account 

    const networkId = await web3.eth.net.getId() //Network ID
    const networkData = DStorage.networks[networkId]

    if (networkData) {

    }
    else { //Else
        window.alert('DStorage contract not deployed to detected network')//alert Error
    }
}
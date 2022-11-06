import { doctorABI } from "../ABI/doctorABI"
import { patientABI } from "../ABI/patientABI"
import { userABI } from "../ABI/userABI"


const loadBlockChainData = async () => {
    const web3 = window.web3//Declare Web3
    const accounts = await web3.eth.getAccounts() //Load account
    const account = accounts[0];
    // setAccount(account) sett account 

    const networkId = await web3.eth.net.getId() //Network ID
    //const networkData = DStorage.networks[networkId]

    if (networkId) {
        console.log("Network Id", networkId)
        const doctor = new web3.eth.Contract(doctorABI, "0x5fbdb2315678afecb367f032d93f642f64180aa3")
        const patient = new web3.eth.Contract(patientABI, "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512")
        const user = new web3.eth.Contract(patientABI, "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0")

        return { doctor, patient, user };
    }
    else { //Else
        window.alert('DStorage contract not deployed to detected network')//alert Error
    }
}
export default loadBlockChainData;


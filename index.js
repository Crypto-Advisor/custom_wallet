const Web3 = require('web3')
const web3 = new Web3()

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
  
const home = () =>{
    readline.question(`New Account? (y/n): `, response => {
        if(response === 'y'){
            createWallet()
        }
        else if(response === 'n'){
            decryptWallet()
        }
        else{
            console.log('invalid input')
        }
    });
}

const createWallet = () =>{
    const wallet = web3.eth.accounts.create()
    readline.question(`Password (important!): `, response => {
        if(response.length < 4){
            console.log('invalid password (too short)')
        }
        else{

            readline.close()
        }
    })

    console.log(wallet)
}

const decryptWallet = () =>{

}

home()

  


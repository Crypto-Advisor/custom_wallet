//web3 js docs https://web3js.readthedocs.io/en/v1.7.3/ 

//imports
const Web3 = require('web3')
const web3 = new Web3()

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

//variables
let accounts = []


//functions  
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
    //const wallet = web3.eth.accounts.wallet.create(2)
    //const keystore = web3.eth.accounts.wallet.encrypt(password)
    //web3.accounts.wallet.decrypt(keystore, password)
    const wallet = web3.eth.accounts.create()
    readline.question(`Password (important!): `, response => {
        if(response.length < 4){  
            console.log('invalid password (too short)')
        }
        else{
            const encrypted = web3.eth.accounts.encrypt(wallet.privateKey, response)
            accounts = [...accounts, encrypted]
            console.log(accounts)
            home()
        }
    })

}

const decryptWallet = () =>{
    readline.question(`Password: `, password => {
        for(let i = 0;i<accounts.length;i++){
            try{
                const signedIn = web3.accounts.decrypt(accounts[i], password)
                console.log(signedIn)
                home()
            }
            catch(err){
                console.log("tried account " + i)
            }
        }
        console.log('wrong password')
        home()
    })
}

//execution
home()

  


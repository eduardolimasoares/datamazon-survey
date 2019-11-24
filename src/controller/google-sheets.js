const GoogleSpreadsheet = require('google-spreadsheet')
const credentials = require('./credentials.json')
const { promisify } = require('util')

const docId = '1mcJEECSMzCg8dWrnigjBiIVkm0-HL2E0gLYVtGK64-Q'
const doc = new GoogleSpreadsheet(docId)

const acssesSheet = async() => {
    await promisify(doc.useServiceAccountAuth)(credentials)
    const info = await promisify(doc.getInfo)()
    return info  
}

const setAnswer = async(questaoUm)=>{
    const info = await acssesSheet()
    const worksheet = info.worksheets[0]
    // /  \/adiciona uma nova linha
    await promisify(worksheet.addRow)({ 
        questaoUm: questaoUm
    })
    // console.log(info)
}

const listRows = async()=>{
    const info = await acssesSheet()
    const worksheet = info.worksheets[0]
    const rows = await promisify(worksheet.getRows)({})
    let a = []    
    let b = []
    let c = []
    let d = []
    let e = []    
    rows.forEach(row => {
        
        if (row.questaoum === 'a') {
            a.push(row.questaoum)
            return 
        }
        if (row.questaoum === 'b') {
            b.push(row.questaoum)
            return
        }
        if (row.questaoum === 'c') {
            c.push(row.questaoum)
            return
        }
        if (row.questaoum === 'd') {
            d.push(row.questaoum)
            return
        }
        if (row.questaoum === 'e') {
            e.push(row.questaoum)
            return
        }
       
    })
    
    let total = []
    total.push(a.length)
    total.push(b.length)
    total.push(c.length)
    total.push(d.length)
    total.push(e.length)

    return total
}
// setAnswer('c')
module.exports = {setAnswer, listRows}
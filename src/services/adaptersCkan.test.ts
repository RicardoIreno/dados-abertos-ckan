import { 
  status,
  listDatasets, 
  getDataset, 
  searchDataset,
  searchDatasetByTag 
} from '../services/adaptersCkan'


import {
  DatasetsFound
} from 'types'

// BASE URL USED
// http://dadosabertos.unifesp.br/api/3/action



// => /status_show

describe('== status()', () => {
  it('should show the Api status', () => {

    return status().then( res => {
      expect(res).toEqual(true) 
    })
  })
}) 


// => /package_list

describe('== listDatasets()', () => {

  it('Should get datasets list', () => {
    const expected = [
      expect.stringMatching("teste_cidade_estados")
    ]
    
    return listDatasets().then( res => {
      expect(res).toEqual(
        expect.arrayContaining(expected) 
      ) 
    })
  })
}) 


// => /package_show?id=

describe('== getDataset()', () => {

  it('Should get a dataset info',  () => {

    return getDataset('teste_cidade_estados').then( res => {
      expect(res.id).toBe("1ac5be91-f2b5-4e9c-89a3-7b252fee0cfd")
    })

  })
}) 


type ModelProps = {
  help: string,
  success: boolean
}
// => /package_search?q=



// http://dadosabertos.unifesp.br/api/3/action/package_search?q=unifesp&fq=tags:"legado","docentes"
describe('== searchDataset()', () => {

  it('Should get search for a dataset that match with a string', () => {
    const term = "unifesp"
    const tags = ["legado","docentes"]
      
    return searchDataset(term, tags)
      .then( res => { 
        expect(res)
          .toEqual(
            expect.objectContaining( {count: 3} ) ) 
    })
  })
}) 


// describe('== searchDatasetByTag() ==', () => {

//   it('Get datasets by a tag list',  () => {
//     const tags = [ 'csv', 'pdf']
    
//     return searchDatasetByTag(tags)
//       .then( res => { 
//         expect(res)
//           .toEqual(
//             expect.objectContaining( {count: 2} ) ) 
//     })
//   })
// }) 
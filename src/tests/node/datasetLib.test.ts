import { 
  listDatasets, 
  getDataset, 
  getAllDatasets, 
  searchDataset,
  searchDatasetByTag 
} from '../../pages/api/datasetLib'

import {
  SearchDataset
} from '../../types/types'

// https://demo.ckan.org/api/3/action/package_list
// ["sample-dataset-1", "test_dataset"]


// jest.mock('next/router', () => {
//   return {
//     useRouter() {
//       return {
//         asPath: '/'
//       }
//     }
//   }
// })


// https://demo.ckan.org/api/3/action/package_list

describe('== listDatasets() ==', () => {

  it('Get a datasets list',  () => {
    const expected = [
      expect.stringMatching("test_dataset")
    ]
    
    return listDatasets().then( res => {
      expect(res).toEqual(
        expect.arrayContaining(expected) 
      ) 
    })
  })
}) 


// https://demo.ckan.org/api/3/action/package_show?id=test_dataset

describe('== getDataset() ==', () => {

  it('Get a dataset info',  () => {

    return getDataset('test_dataset').then( res => {
      expect(res.id).toBe("a74de57d-5d2a-4899-a498-44035c01fab6")
    })

  })
}) 



// describe('== getAllDatasets() ==', () => {

//   it('Get a array of datasets infos',  () => {
//     const datasets = ["pentahotest", "teste-francis"]

//     return getAllDatasets().then( res => {
//       expect(res).toEqual(
//         expect.arrayContaining(datasets) 
//       ) 
//     })


//   })
// }) 


type ModelProps = {
  help: string,
  success: boolean
}
// https://demo.ckan.org/api/3/action/package_search?q=test_dataset

describe('== searchDataset() ==', () => {

  it('Get search for a dataset that match with a string', () => {
    const test = "test_dataset"
      
    return searchDataset(test)
      .then( res => { 
        expect(res)
          .toEqual(
            expect.objectContaining( {count: 2} ) ) 
    })
  })
}) 


describe('== searchDatasetByTag() ==', () => {

  it('Get datasets by a tag list',  () => {
    const tags = [ 'csv', 'pdf']
    
    return searchDatasetByTag(tags)
      .then( res => { 
        expect(res)
          .toEqual(
            expect.objectContaining( {count: 2} ) ) 
    })
  })
}) 
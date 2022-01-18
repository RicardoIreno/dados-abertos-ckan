import { listDatasets, getDataset, getAllDatasets } from '../../libs/datasetLib'

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


// http://200.144.93.54/api/3/action/package_list

describe('== listDatasets() ==', () => {

  it('Get a datasets list',  () => {
    const expected = [
      expect.stringMatching("pentahotest")
    ]
    
    return listDatasets().then( res => {
      expect(res).toEqual(
        expect.arrayContaining(expected) 
      ) 
    })


  })
}) 


// http://200.144.93.54/api/3/action/package_show?id=pentahotest

describe('== getDataset() ==', () => {

  it('Get a dataset info',  () => {

    return getDataset('pentahotest').then( res => {
      expect(res.id).toBe("dd045408-e183-4ff3-bcfd-3a39ad82548c")
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

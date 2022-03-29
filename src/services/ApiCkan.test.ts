import { 
  status,
  listDatasets, 
  getDataset, 
  searchDataset,
  searchDatasetByTag 
} from './ApiCkan'



// BASE URL USED
// http://dadosabertos.unifesp.br/api/3/action



// => /status_show

describe('status', () => {
  it('should show the Api status', () => {

    return status().then( res => {
      expect(res).toEqual(true) 
    })
  })
}) 


// => /package_list

describe('listDatasets', () => {

  it('Should get datasets list', () => {

    const list = {"help": "https://dadosabertos.unifesp.br/api/3/action/help_show?name=package_list", "success": true, "result": ["autodeclaracao-racial-de-alunos-da-graduacao-2012-2019", "censo-do-servidor-da-universidade-federal-de-sao-paulo-ano-base-2015", "cursos-de-pos-graduacao", "dados-brutos-graduacao-de-2005-a-2017", "dados-cadastrais-cursos-de-graduacao", "dados-de-ingresso-e-conclusao-de-mestrado-e-doutorado", "estudantes-matriculados-nos-cursos-mais-concorridos-2012-a-2018", "partidos", "pentahotest", "professores-por-classe-e-genero-2019", "quantativo-de-ingressantes-cotas-e-ampla-concorrencia-de-2016-a-2018", "quantidade-de-alunos-de-iniciacao-cientifica-com-inicio-em-2017-e-2018", "questionario-de-autoavaliacao-2017", "salario-dos-docentes-08-2019", "teste_cidade_estados", "teste-do-pdi", "testef", "teste-francis"]}

  

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

describe('getDataset', () => {

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

// describe('searchDataset', () => {

//   it('Should get search for a dataset that match with a string', () => {
//     const term = "unifesp"
//     const tags = ["legado","docentes"]
   
//     return searchDataset(term )
//       .then( res => { 
//         expect(res)
//           .toContain(
//             expect.objectContaining( {sucess: true } ) ) 
//     })
//   })
// }) 


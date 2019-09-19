import axios from 'axios';
import URL from "../URL";


/////////////////////////////////////////////
export const getUdang = (search,sort) => {
  return {
    type: 'GET_UDANG',
    payload: axios.get(URL+`/shrimp_prices?search=${search}&with=creator,species,region&sort=size_100,${sort}&region_id=`),
    // payload: axios.get(URL+`/shrimp_prices?search=${search}&with=creator,species,region&sort=size_100,${sort}&region_id=`),
  };
};

/////////////////////////////////////////////
export const getExampleById = (exampleId) => {
  return {
      type: 'GET_EXAMPLEE_BY_ID',
      payload: axios.get(URL +`/example/${exampleId}`)
  }
}
/////////////////////////////////////////////
export const postExample = (data) => {
  return {
    type: "POST_EXAMPLEE",
    payload: axios.post(URL+'/example', data[0])
  };
};

/////////////////////////////////////////////
export const deleteExample = (exampleId) =>{
	return{
		type: 'DELETE_EXAMPLEE',
		payload: axios.delete(URL +`/example/${exampleId}`)
	}
}


/////////////////////////////////////////////
export const updateExample = (exampleId, data) => {
  return {
      type: 'UPDATE_EXAMPLEE',
      payload: axios.patch(URL +`/example/${exampleId}`, data)
  }
}

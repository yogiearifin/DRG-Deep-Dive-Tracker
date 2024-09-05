import {useState} from 'react'
import { DeepDiveDataType } from "./interface/DeepDiveData";

export const UseDeepDive = () => {
    const [data, setData] = useState<DeepDiveDataType>({
        endTime: "",
        startTime: "",
        variants: [],
      });
      const getData = async () => {
        const res = await fetch("https://drgapi.com/v1/deepdives");
        const fetchData: DeepDiveDataType = await res.json();
        setData(fetchData);
      };
      return {
        data,
        setData,
        getData,
      }
      
}
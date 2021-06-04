import { initialFormikValues } from "../pages/settings/profile/Profile";

const  timeout: (ms: number)=>void = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export const  asyncFunctionSimulator: (values: initialFormikValues )=> any = async (values) => {
   await timeout(3000)
   //check server response
   console.log(values);
   return 'succsess'
  }
// import { IForm } from "../../models/models";

// type ModificationFormProps = {
//   form: IForm,
//   onSubmitMod: (e: React.FormEvent<HTMLFormElement>) => void,
//   onModification: (e: React.ChangeEvent<HTMLInputElement>) => void,
// }

// export const ModificationForm = ({ onSubmitMod, onModification, form }: ModificationFormProps) => {

//   const { date, distance } = form;

//   const handleModification = (e: React.ChangeEvent<HTMLInputElement>) => {

//     onModification(e);
//   }

//   const handleSubmissionMod = (e:React.FormEvent<HTMLFormElement>) => {
  
//     onSubmitMod(e);
//   }

//   return (
//     <form onSubmit={handleSubmissionMod} className="modification-section">
//         <input onChange={handleModification} type="text" name="date" value={date} />
//         <input onChange={handleModification} type="text" name="distance" value={distance} />
//         <button type="submit">OK</button>
//         <button type="button">Cancel</button>
//     </form>
//   )
// }

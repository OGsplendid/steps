import { IForm } from "../../models/models";

type ActivityFormProps = {
  form: IForm,
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const ActivityForm = ({ onSubmit, onChange, form }: ActivityFormProps) => {

  const { date, distance } = form;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    onChange(e);
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  
    onSubmit(e);
  }

  return (
    <form onSubmit={handleSubmit} className="input-section">
        <input onChange={handleChange} type="text" name="date" value={date} />
        <input onChange={handleChange} type="text" name="distance" value={distance} />
        <button type="submit">OK</button>
    </form>
  )
}

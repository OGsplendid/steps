import { IDay } from "../../models/models";

interface TrainingDayProps {
    day: IDay,
    onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export const TrainingDay = ({ onDelete, day }: TrainingDayProps) => {

    const { id, date, distance } = day;

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {

        onDelete(e);
    }
  
    return (
        <li className='day' id={id}>
            <div className='date'>{date}</div>
            <div className='distance'>{distance}</div>
            <div className='actions'>
                <button className='change'></button>
                <button  id={id} onClick={handleDelete} className='delete'></button>
            </div>
        </li>
    )
}

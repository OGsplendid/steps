import { TrainingDay } from "../TrainingDay/TrainingDay"
import { v4 as uuidv4 } from 'uuid'
import { IDay } from "../../models/models"

interface IDaysProps {
    days: IDay[];
    onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export const ActivityData = ({ onDelete, days }: IDaysProps) => {

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {

    onDelete(e);
  }

  return (
    <div className="data-wrapper">
        <div className="days-wrapper">
            <h3 className="title">Дата (ДД.ММ.ГГ)</h3>
            <h3 className="title">Пройдено км</h3>
            <h3 className="title">Действия</h3>
        </div>
            <ul className="days">
            {days.map((day: IDay) => <TrainingDay onDelete={handleDelete} key={uuidv4()} day={day} />)}
        </ul>
    </div>
  )
}

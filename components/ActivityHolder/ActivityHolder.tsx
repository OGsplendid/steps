import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import { IDay, IForm } from "../../models/models"
import { ActivityForm } from '../ActivityForm/ActivityForm'
import { ActivityData } from '../ActivityData/ActivityData'
// import { ModificationForm } from '../ModificationForm/ModificationForm'

export const ActivityHolder = () => {

  const [form, setForm] = useState<IForm>({
    date: '',
    distance: '',
  })
  const [days, setDays] = useState<IDay[]>([]);
  const [tooltip, setTooltip] = useState<boolean>(false);
  // const [modifier, setModification] = useState<boolean>(true);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { date, distance } = form;

    if (String(parseFloat(distance)) !== String(distance) || !(/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/.test(date))) {
      setTooltip(true);
      return;
    }

    const item = {
      id: uuidv4(),
      date,
      distance: parseFloat(distance),
    }

    if (days.some((day) => day.date === item.date)) {
      const repeatingDay = days.find((day) => day.date === item.date);
      if (repeatingDay) {
        repeatingDay.distance += item.distance;
      }
    } else {
        setDays((prev) => [...prev, item].sort((a, b) => Number(moment(a.date, 'DD.MM.YY')) - Number(moment(b.date, 'DD.MM.YY'))));
    }

    setForm({
      date: '',
      distance: '',
    });
    setTooltip(false);
  }

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    setDays((prev) => prev.filter((day) => day.id !== id));
  }


  // const handleSubmissionMod = (e: React.FormEvent<HTMLFormElement>) => {
  //   console.log(e);
  // }

  // const handleModification = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setForm((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }))
  // }


  return (
    <>
        {tooltip && <div className='tooltip'>{'Wrong date or distance format'}</div>}
        <ActivityForm onChange={handleChange} onSubmit={handleSubmit} form={form} />
        <ActivityData onDelete={handleDelete} days={days} />
        {/* {modifier && <ModificationForm onModification={handleModification} onSubmitMod={handleSubmissionMod} form={form} />} */}
    </>
  )
}

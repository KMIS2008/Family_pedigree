import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Label, Input, Button } from './ScheduleOfLoturgi.styled';
import { addSchedule } from "redux/operations";
import { useDispatch } from "react-redux";

const SignupSchema = Yup.object().shape({
  title: Yup.string().required("Напишіть назву богослужіння"),
  date: Yup.string()
    .required("Це поле обов'язкове")
      .matches(/^\d{4}-\d{2}-\d{2}$/, "Введіть дату у форматі РРРР-ММ-ДД"),
  time: Yup.string()
    .required("Це поле обов'язкове")
    .matches(/^([0-1]\d|2[0-3]):[0-5]\d$/, "Введіть час у форматі HH:MM"),
});


export const ScheduleOfLoturgi = () => {

   const dispatch=useDispatch()

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
      resolver: yupResolver(SignupSchema),
    });
  

  const onSubmit = (data) => {
    console.log(data);
    dispatch(addSchedule(data))
    reset(); // Очистка форми після відправки
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="title">Назва богослужіння:</Label>
        <Input
          id="title"
          type="text"
          placeholder="Введіть назву богослужіння"
          {...register('title', { required: 'Title is required' })}
        />
        {errors.title && <span>{errors.title.message}</span>}
      </div>
      <div>
        <Label htmlFor="date">Дата:</Label>
        <Input
          id="date"
          type="date"
          {...register('date', { required: 'Date is required' })}
        />
        {errors.date && <span>{errors.date.message}</span>}
      </div>
      <div>
        <Label htmlFor="time">Час:</Label>
        <Input
          id="time"
          type="time"
          {...register('time', { required: 'Time is required' })}
        />
        {errors.time && <span>{errors.time.message}</span>}
      </div>
      <Button type="submit">Відправити розклад</Button>
    </form>
  );
}
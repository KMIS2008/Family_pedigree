import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {Form, Label,Select, Textarea, Input, Span, ContainerButton, Button, ButtonDonation} from './Services.styled';
import { useDispatch } from "react-redux";
import { addServices} from '../../redux/operations';
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  type: Yup.string().required("Виберіть тип послуги"),
  fullName: Yup.string().required("Це поле обов'язкове"),
  email: Yup.string()
    .email("Введіть дійсну електронну пошту")
    .required("Це поле обов'язкове"),
  phone: Yup.string()
    .matches(/^[\d\-+()\s]*$/, "Введіть коректний номер телефону")
    .nullable(),
});

export const ServicesForm = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleClickDonation=()=>{
    navigate("/donation")
  }

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = async (data) => {
    console.log(data)
    dispatch(addServices(data))

    try {
      const response = await fetch("https://temple-app-peter-and-paul-backend.onrender.com/api/email/send-services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Письмо отправлено успешно");
        reset();
      } else {
        console.error("Ошибка при отправке письма");
      }
    } catch (error) {
      console.error("Ошибка:", error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="type">Тип послуги:</Label>
      <Select id="type" {...register("type")}>
        <option value="">Замовити</option>
        <option value="За упокій">записка за упокій</option>
        <option value="За здоров'я">записка за здоров’я</option>
        <option value="сорокоуст за здоров’я">сорокоуст за здоров’я</option>
        <option value="сорокоуст за упокій">сорокоуст за упокій</option>
        <option value="молебень на здоров’я та іншу потребу">молебень на здоров’я та іншу потребу</option>
      </Select>
      {errors.type && <p>{errors.type.message}</p>}

      <Label htmlFor="fullName">Повне ім'я або декілька:</Label>
      <Textarea
        id="fullName"
        {...register("fullName")}
        placeholder="Введіть ім'я або декілька"
      />
      {errors.fullName && <p>{errors.fullName.message}</p>}

      <Label htmlFor="email">Для зворотного зв'язку (email):</Label>
      <Input
        type="email"
        id="email"
        {...register("email")}
        placeholder="Введіть вашу електронну пошту"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <Label htmlFor="phone">Введіть ваш телефон <Span>* Не обов'язково:</Span></Label>
      <Input
        type="text"
        id="phone"
        {...register("phone")}
        placeholder="+380"
      />
      {errors.phone && <p>{errors.phone.message}</p>}

      <ContainerButton>
         <Button type="submit">Надіслати</Button>
         <ButtonDonation type="button" onClick={handleClickDonation}>Пожертва</ButtonDonation>        
      </ContainerButton>

    </Form>
  );
};
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {Form, Label, Textarea, Input, Span, ContainerButton, Button, ButtonDonation} from './Feedback.styled';
import { useNavigate } from "react-router-dom";
import {addFeedback} from '../../redux/operations';
import { useDispatch } from "react-redux";


const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required("Це поле обов'язкове"),
  email: Yup.string()
    .email("Введіть дійсну електронну пошту")
    .required("Це поле обов'язкове"),
  phone: Yup.string()
    .matches(/^[\d\-+()\s]*$/, "Введіть коректний номер телефону")
    .nullable(),
});

export const FeedBack=()=>{
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
    dispatch(addFeedback(data))
    reset();
}
   
    return(
        <>
  <Form onSubmit={handleSubmit(onSubmit)}>
     
      <Label htmlFor="fullName">Ваше питання:</Label>
      <Textarea
        id="fullName"
        {...register("fullName")}
        placeholder="Ваше питання"
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

        </>
    )
}
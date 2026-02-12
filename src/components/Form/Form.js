import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import {
    FormContainer, StyledForm, FormGroup, Label, RadioGroup, RadioLabel,
    StyledField, StyledTextArea, ErrorText, SubmitButton, FileInputWrapper,
    FileInputLabel, FileInput, ImagePreview, RemoveImageButton
} from './Form.styled';
import * as Yup from 'yup';

// Схема валідації
const validationSchema = Yup.object({
  firstName: Yup.string(),
  lastName: Yup.string(),
  middleName: Yup.string(),
  gender: Yup.string()
    .required("Стать є обов'язковою"),
  birthDate: Yup.date()
    .max(new Date(), "Дата народження не може бути в майбутньому"),
  deathDate: Yup.date()
    .min(Yup.ref('birthDate'), "Дата смерті не може бути раніше дати народження")
    .nullable(),
  photo: Yup.mixed()
    .nullable() // ✅ Дозволяємо null
    .notRequired() // ✅ Поле не обов'язкове
    .test('fileSize', 'Файл занадто великий (макс. 5MB)', (value) => {
      if (!value) return true; // ✅ Якщо файлу немає - валідація проходить
      return value.size <= 5242880; // 5MB
    })
    .test('fileType', 'Підтримуються тільки JPG, PNG, GIF', (value) => {
      if (!value) return true; // ✅ Якщо файлу немає - валідація проходить
      return ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
    }),
  comments: Yup.string()
});

export const PersonForm = () => {
  const [photoPreview, setPhotoPreview] = useState(null);

  const initialValues = {
    firstName: '',
    lastName: '',
    middleName: '',
    gender: '',
    birthDate: '',
    deathDate: '',
    photo: null, // ✅ За замовчуванням null
    comments: ''
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Дані форми:', values);
    
    // Створюємо FormData для відправки з файлом
    const formData = new FormData();
    Object.keys(values).forEach(key => {
      // ✅ Додаємо тільки якщо значення існує
      if (values[key] !== null && values[key] !== '') {
        formData.append(key, values[key]);
      }
    });

    // Тут ваша логіка обробки даних (відправка на сервер)
    setTimeout(() => {
      alert(JSON.stringify({
        ...values,
        photo: values.photo ? values.photo.name : 'Без фото'
      }, null, 2));
      setSubmitting(false);
      setPhotoPreview(null);
      resetForm();
    }, 400);
  };

  const handlePhotoChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setFieldValue('photo', file);
      
      // Створюємо превью
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = (setFieldValue) => {
    setFieldValue('photo', null);
    setPhotoPreview(null);
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched, setFieldValue }) => (
          <StyledForm>
            <FormGroup>
              <Label htmlFor="firstName">Ім'я</Label>
              <StyledField
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Введіть ім'я"
                className={errors.firstName && touched.firstName ? 'error' : ''}
              />
              <ErrorText name="firstName" component="div" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="lastName">Фамілія</Label>
              <StyledField
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Введіть фамілію"
                className={errors.lastName && touched.lastName ? 'error' : ''}
              />
              <ErrorText name="lastName" component="div" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="middleName">По батькові</Label>
              <StyledField
                type="text"
                id="middleName"
                name="middleName"
                placeholder="Введіть по батькові"
              />
              <ErrorText name="middleName" component="div" />
            </FormGroup>

            <FormGroup>
              <Label>Стать</Label>
              <RadioGroup role="group">
                <RadioLabel>
                  <Field type="radio" name="gender" value="male" />
                  <span>Чоловіча</span>
                </RadioLabel>
                <RadioLabel>
                  <Field type="radio" name="gender" value="female" />
                  <span>Жіноча</span>
                </RadioLabel>
              </RadioGroup>
              <ErrorText name="gender" component="div" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="birthDate">Дата народження</Label>
              <StyledField
                type="date"
                id="birthDate"
                name="birthDate"
                className={errors.birthDate && touched.birthDate ? 'error' : ''}
              />
              <ErrorText name="birthDate" component="div" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="deathDate">Дата смерті</Label>
              <StyledField
                type="date"
                id="deathDate"
                name="deathDate"
                className={errors.deathDate && touched.deathDate ? 'error' : ''}
              />
              <ErrorText name="deathDate" component="div" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="photo">Фотографія</Label>
              <FileInputWrapper>
                <FileInput
                  id="photo"
                  name="photo"
                  type="file"
                  accept="image/*"
                  onChange={(event) => handlePhotoChange(event, setFieldValue)}
                />
                <FileInputLabel htmlFor="photo">
                  {photoPreview ? 'Змінити фото' : 'Завантажити фото'}
                </FileInputLabel>
              </FileInputWrapper>
              
              {photoPreview && (
                <div style={{ marginTop: '10px', position: 'relative', display: 'inline-block' }}>
                  <ImagePreview src={photoPreview} alt="Превью фото" />
                  <RemoveImageButton
                    type="button"
                    onClick={() => handleRemovePhoto(setFieldValue)}
                  >
                    ✕
                  </RemoveImageButton>
                </div>
              )}
              
              <ErrorText name="photo" component="div" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="comments">Коментарі</Label>
              <StyledTextArea
                as="textarea"
                id="comments"
                name="comments"
                rows="4"
                placeholder="Введіть додаткову інформацію"
              />
              <ErrorText name="comments" component="div" />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Збереження...' : 'Додати члена сім`ї'}
            </SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </FormContainer>
  );
};
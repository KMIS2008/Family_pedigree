import React from 'react';
import { Formik,Field  } from 'formik';
import {
  FormContainer, StyledForm, FormGroup, Label, RadioGroup, RadioLabel,
  StyledField, StyledTextArea, ErrorText, SubmitButton
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
  comments: Yup.string()
});

export const PersonForm = ({
  onSubmit,
  initialData = null
}) => {
  const initialValues = initialData || {
    firstName: '',
    lastName: '',
    middleName: '',
    gender: '',
    birthDate: '',
    deathDate: '',
    comments: ''
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Дані форми:', values);

    if (onSubmit) {
      onSubmit(values);
    }

    setSubmitting(false);
    resetForm();
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting, errors, touched }) => (
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
              <Label>Стать *</Label>
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
              {isSubmitting ? 'Збереження...' : initialData ? 'Оновити дані' : 'Додати члена сім\'ї'}
            </SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </FormContainer>
  );
};



// import React, { useState } from 'react';
// import { Formik, Field } from 'formik';
// import {
//   FormContainer, StyledForm, FormGroup, Label, RadioGroup, RadioLabel,
//   StyledField, StyledTextArea, ErrorText, SubmitButton, FileInputWrapper,
//   FileInputLabel, FileInput, ImagePreview, RemoveImageButton
// } from './Form.styled';
// import * as Yup from 'yup';

// // Схема валідації
// const validationSchema = Yup.object({
//   firstName: Yup.string(),
//   lastName: Yup.string(),
//   middleName: Yup.string(),
//   gender: Yup.string()
//     .required("Стать є обов'язковою"),
//   birthDate: Yup.date()
//     .max(new Date(), "Дата народження не може бути в майбутньому"),
//   deathDate: Yup.date()
//     .min(Yup.ref('birthDate'), "Дата смерті не може бути раніше дати народження")
//     .nullable(),
//   // 🆕 Валідація зв'язків
//   parent1: Yup.string().nullable(),
//   parent2: Yup.string().nullable(),
//   spouse: Yup.string().nullable(),
//   photo: Yup.mixed()
//     .nullable()
//     .notRequired()
//     .test('fileSize', 'Файл занадто великий (макс. 5MB)', (value) => {
//       if (!value) return true;
//       return value.size <= 5242880;
//     })
//     .test('fileType', 'Підтримуються тільки JPG, PNG, GIF', (value) => {
//       if (!value) return true;
//       return ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
//     }),
//   comments: Yup.string()
// });



// export const PersonForm = ({
//   existingPeople = [], // 🆕 Список існуючих людей для вибору батьків/подружжя
//   onSubmit, // 🆕 Callback для збереження
//   initialData = null // 🆕 Дані для редагування
// }) => {
//   const [photoPreview, setPhotoPreview] = useState(initialData?.photo || null);

//   const initialValues = initialData || {
//     firstName: '',
//     lastName: '',
//     middleName: '',
//     gender: '',
//     birthDate: '',
//     deathDate: '',
//     parent1: '', // 🆕 Батько/мати 1
//     parent2: '', // 🆕 Батько/мати 2
//     spouse: '', // 🆕 Подружжя
//     photo: null,
//     comments: ''
//   };

//   const handleSubmit = (values, { setSubmitting, resetForm }) => {
//     console.log('Дані форми:', values);

//     // Створюємо об'єкт для збереження
//     const personData = {
//       ...values,
//       // Перетворюємо порожні рядки в null
//       parent1: values.parent1 || null,
//       parent2: values.parent2 || null,
//       spouse: values.spouse || null,
//     };

//     // Викликаємо callback з батьківського компонента
//     if (onSubmit) {
//       onSubmit(personData);
//     }

//     setSubmitting(false);
//     setPhotoPreview(null);
//     resetForm();
//   };

//   const handlePhotoChange = (event, setFieldValue) => {
//     const file = event.currentTarget.files[0];
//     if (file) {
//       setFieldValue('photo', file);

//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPhotoPreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleRemovePhoto = (setFieldValue) => {
//     setFieldValue('photo', null);
//     setPhotoPreview(null);
//   };

//   // 🆕 Фільтр людей для вибору батьків (виключаємо поточну людину та її дітей)
//   const getAvailableParents = (currentPersonId, currentGender) => {
//     return existingPeople.filter(person =>
//       person.id !== currentPersonId &&
//       person.id !== initialData?.id
//     );
//   };

//   // 🆕 Фільтр людей для вибору подружжя
//   const getAvailableSpouses = (currentPersonId, currentGender) => {
//     return existingPeople.filter(person =>
//       person.id !== currentPersonId &&
//       person.id !== initialData?.id &&
//       person.gender !== currentGender // Протилежна стать (опціонально)
//     );
//   };

//   return (
//     <FormContainer>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//         enableReinitialize
//       >
//         {({ isSubmitting, errors, touched, setFieldValue, values }) => (
//           <StyledForm>
//             <FormGroup>
//               <Label htmlFor="firstName">Ім'я</Label>
//               <StyledField
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 placeholder="Введіть ім'я"
//                 className={errors.firstName && touched.firstName ? 'error' : ''}
//               />
//               <ErrorText name="firstName" component="div" />
//             </FormGroup>

//             <FormGroup>
//               <Label htmlFor="lastName">Фамілія</Label>
//               <StyledField
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 placeholder="Введіть фамілію"
//                 className={errors.lastName && touched.lastName ? 'error' : ''}
//               />
//               <ErrorText name="lastName" component="div" />
//             </FormGroup>

//             <FormGroup>
//               <Label htmlFor="middleName">По батькові</Label>
//               <StyledField
//                 type="text"
//                 id="middleName"
//                 name="middleName"
//                 placeholder="Введіть по батькові"
//               />
//               <ErrorText name="middleName" component="div" />
//             </FormGroup>

//             <FormGroup>
//               <Label>Стать *</Label>
//               <RadioGroup role="group">
//                 <RadioLabel>
//                   <Field type="radio" name="gender" value="male" />
//                   <span>Чоловіча</span>
//                 </RadioLabel>
//                 <RadioLabel>
//                   <Field type="radio" name="gender" value="female" />
//                   <span>Жіноча</span>
//                 </RadioLabel>
//               </RadioGroup>
//               <ErrorText name="gender" component="div" />
//             </FormGroup>

//             <FormGroup>
//               <Label htmlFor="birthDate">Дата народження</Label>
//               <StyledField
//                 type="date"
//                 id="birthDate"
//                 name="birthDate"
//                 className={errors.birthDate && touched.birthDate ? 'error' : ''}
//               />
//               <ErrorText name="birthDate" component="div" />
//             </FormGroup>

//             <FormGroup>
//               <Label htmlFor="deathDate">Дата смерті</Label>
//               <StyledField
//                 type="date"
//                 id="deathDate"
//                 name="deathDate"
//                 className={errors.deathDate && touched.deathDate ? 'error' : ''}
//               />
//               <ErrorText name="deathDate" component="div" />
//             </FormGroup>

//             {/* 🆕 РОЗДІЛ ЗВ'ЯЗКІВ */}
//             <div style={{
//               borderTop: '2px solid #667eea',
//               marginTop: '20px',
//               paddingTop: '20px'
//             }}>
//               <h3 style={{
//                 color: '#667eea',
//                 marginBottom: '15px',
//                 fontSize: '18px'
//               }}>
//                 👨‍👩‍👧‍👦 Сімейні зв'язки
//               </h3>

//               {/* Батько/Мати 1 */}
//               <FormGroup>
//                 <Label htmlFor="parent1">Батько / Мати 1</Label>
//                 <StyledField
//                   as="select"
//                   id="parent1"
//                   name="parent1"
//                 >
//                   <option value="">-- Не обрано --</option>
//                   {getAvailableParents(initialData?.id, values.gender).map(person => (
//                     <option key={person.id} value={person.id}>
//                       {person.firstName} {person.lastName}
//                       ({person.gender === 'male' ? '👨' : '👩'})
//                       {person.birthDate ? ` - ${new Date(person.birthDate).getFullYear()}` : ''}
//                     </option>
//                   ))}
//                 </StyledField>
//                 <ErrorText name="parent1" component="div" />
//               </FormGroup>

//               {/* Батько/Мати 2 */}
//               <FormGroup>
//                 <Label htmlFor="parent2">Батько / Мати 2</Label>
//                 <StyledField
//                   as="select"
//                   id="parent2"
//                   name="parent2"
//                 >
//                   <option value="">-- Не обрано --</option>
//                   {getAvailableParents(initialData?.id, values.gender)
//                     .filter(person => person.id !== values.parent1) // Не показуємо вже обраного батька
//                     .map(person => (
//                       <option key={person.id} value={person.id}>
//                         {person.firstName} {person.lastName}
//                         ({person.gender === 'male' ? '👨' : '👩'})
//                         {person.birthDate ? ` - ${new Date(person.birthDate).getFullYear()}` : ''}
//                       </option>
//                     ))}
//                 </StyledField>
//                 <ErrorText name="parent2" component="div" />
//               </FormGroup>

//               {/* Подружжя */}
//               <FormGroup>
//                 <Label htmlFor="spouse">Подружжя</Label>
//                 <StyledField
//                   as="select"
//                   id="spouse"
//                   name="spouse"
//                 >
//                   <option value="">-- Не обрано --</option>
//                   {getAvailableSpouses(initialData?.id, values.gender).map(person => (
//                     <option key={person.id} value={person.id}>
//                       {person.firstName} {person.lastName}
//                       ({person.gender === 'male' ? '👨' : '👩'})
//                       {person.birthDate ? ` - ${new Date(person.birthDate).getFullYear()}` : ''}
//                     </option>
//                   ))}
//                 </StyledField>
//                 <ErrorText name="spouse" component="div" />
//                 <div style={{ fontSize: '12px', color: '#888', marginTop: '5px' }}>
//                   💡 Підказка: При виборі подружжя, зв'язок автоматично встановиться в обидві сторони
//                 </div>
//               </FormGroup>
//             </div>

//             <FormGroup>
//               <Label htmlFor="photo">Фотографія</Label>
//               <FileInputWrapper>
//                 <FileInput
//                   id="photo"
//                   name="photo"
//                   type="file"
//                   accept="image/*"
//                   onChange={(event) => handlePhotoChange(event, setFieldValue)}
//                 />
//                 <FileInputLabel htmlFor="photo">
//                   {photoPreview ? 'Змінити фото' : 'Завантажити фото'}
//                 </FileInputLabel>
//               </FileInputWrapper>

//               {photoPreview && (
//                 <div style={{ marginTop: '10px', position: 'relative', display: 'inline-block' }}>
//                   <ImagePreview src={photoPreview} alt="Превью фото" />
//                   <RemoveImageButton
//                     type="button"
//                     onClick={() => handleRemovePhoto(setFieldValue)}
//                   >
//                     ✕
//                   </RemoveImageButton>
//                 </div>
//               )}

//               <ErrorText name="photo" component="div" />
//             </FormGroup>

//             <FormGroup>
//               <Label htmlFor="comments">Коментарі</Label>
//               <StyledTextArea
//                 as="textarea"
//                 id="comments"
//                 name="comments"
//                 rows="4"
//                 placeholder="Введіть додаткову інформацію"
//               />
//               <ErrorText name="comments" component="div" />
//             </FormGroup>

//             <SubmitButton type="submit" disabled={isSubmitting}>
//               {isSubmitting ? 'Збереження...' : initialData ? 'Оновити дані' : 'Додати члена сім\'ї'}
//             </SubmitButton>
//           </StyledForm>
//         )}
//       </Formik>
//     </FormContainer>
//   );
// };
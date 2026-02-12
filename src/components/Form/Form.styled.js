import styled from "styled-components";
import { Form, Field, ErrorMessage } from 'formik';

export const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
`;

export const StyledForm = styled(Form)`
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  color: ${p => p.theme.colors.blueGradientOne || '#227ba2'};
  margin-bottom: 30px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: ${p => p.theme.colors.blueGradientOne};
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 8px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: normal;

  input[type="radio"] {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    cursor: pointer;
    accent-color: ${p => p.theme.colors.blueGradientOne || '#227ba2'};
  }

  span {
    user-select: none;
  }

  &:hover {
    color: ${p => p.theme.colors.blueGradientOne || '#227ba2'};
  }
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: 12px;
  border: 2px solid ${p => p.theme.colors.blue};
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: ${p => p.theme.colors.blueGradientOne || '#227ba2'};
  }

  &.error {
    border-color: #ff4444;
  }
`;

export const StyledTextArea = styled(Field)`
  width: 100%;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 4px;
  font-size: 16px;
  font-family: inherit;
  resize: vertical;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: ${p => p.theme.colors.blueGradientOne || '#227ba2'};
  }
`;

export const ErrorText = styled(ErrorMessage)`
  color: #ff4444;
  font-size: 14px;
  margin-top: 5px;
  display: block;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background: linear-gradient(
    to right,
    ${p => p.theme.colors.blueGradientOne || '#227ba2'},
    ${p => p.theme.colors.blueGradientTwo || '#1b9cd0'}
  );
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const FileInputWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const FileInput = styled.input`
  position: absolute;
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  z-index: -1;
`;

export const FileInputLabel = styled.label`
  display: inline-block;
  width: 100%;
  padding: 12px 20px;

  background: linear-gradient(
    to right,
    ${p => p.theme.colors.blueGradientOne || '#227ba2'},
    ${p => p.theme.colors.blueGradientTwo || '#1b9cd0'}
  );
  
  color: white;
  border-radius: 4px;
  cursor: pointer;

  text-align: center;
  font-weight: 600;
  font-size: 15px;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export const ImagePreview = styled.img`
  margin-top: 10px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e0e0e0;
`;

export const RemoveImageButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;

  margin-top: 10px;
  background:  ${p => p.theme.colors.red};
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;

  &:hover {
    background: ${p => p.theme.colors.redHover};
  }
`;
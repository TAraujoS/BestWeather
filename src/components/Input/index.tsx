import { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";
import { ContainerInput, Error } from "./styles";

interface IInputProps {
  id: string;
  label?: string;
  type?: string;
  error?: FieldError;
  placeholder: string;
}

const Input = forwardRef(
  (
    { id, label, type, error, ...register }: IInputProps,
    ref: React.LegacyRef<HTMLInputElement>
  ) => (
    <>
      <label htmlFor={id}>{label}</label>
      <ContainerInput>
        <input id={id} type={type} {...register} ref={ref} />
        {error?.message && (
          <Error>
            <BiErrorCircle />
            <span>{error.message}</span>
          </Error>
        )}
      </ContainerInput>
    </>
  )
);

export default Input;

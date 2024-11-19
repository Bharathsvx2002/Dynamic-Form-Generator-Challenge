import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const FormGenerator: React.FC<{ schema: any }> = ({ schema }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Form submitted successfully!');
  };

  if (!schema || !schema.fields) return <p>No schema provided</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h1 className="text-xl font-bold">{schema.formTitle}</h1>
      <p>{schema.formDescription}</p>
      {schema.fields.map((field: any) => (
        <div key={field.id} className="form-group">
          <label htmlFor={field.id} className="block font-medium">
            {field.label}
          </label>
          <Controller
            name={field.id}
            control={control}
            rules={{ required: field.required }}
            render={({ field: inputField }) => {
              switch (field.type) {
                case 'text':
                case 'email':
                  return (
                    <input
                      type={field.type}
                      {...inputField}
                      placeholder={field.placeholder}
                      className="border p-2 w-full"
                    />
                  );
                case 'select':
                  return (
                    <select {...inputField} className="border p-2 w-full">
                      {field.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  );
                case 'radio':
                  return field.options.map((option: any) => (
                    <div key={option.value}>
                      <input
                        type="radio"
                        
                        {...inputField}
                        id={`${field.id}-${option.value}`}
                      />
                      <label htmlFor={`${field.id}-${option.value}`}>
                        {option.label}
                      </label>
                    </div>
                  ));
                case 'textarea':
                  return (
                    <textarea
                      {...inputField}
                      placeholder={field.placeholder}
                      className="border p-2 w-full"
                    />
                  );
                default:
                  return null;
              }
            }}
          />
          {errors[field.id] && (
            <p className="text-red-500">{field.validation?.message || 'This field is required'}</p>
          )}
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Submit
      </button>
    </form>
  );
};

export default FormGenerator;

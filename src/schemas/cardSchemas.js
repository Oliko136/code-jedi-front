import * as yup from 'yup';

export const CardAddSchema = yup.object().shape({
  title: yup
    .string()
    .min(2, 'Title must be at least 2 characters')
    .label('Invalid title')
    .empty('Title should not be empty')
    .required('Title is required'),
  description: yup.string(),
  priority: yup.string(),
  deadline: yup.string(),
});

export const CardEditSchema = yup.object().shape({
  title: yup
    .string()
    .min(2, 'Title must be at least 2 characters')
    .label('Invalid title')
    .empty('Title should not be empty'),
  description: yup.string(),
  priority: yup.string(),
  deadline: yup.string(),
});

export const CardEditСolumnSchema = yup.object().shape({
  column: yup
    .string()
    .mathes(/^[0-9a-fA-F]{24}$/, 'Incorrect column format')
    .required('Column is required'),
});

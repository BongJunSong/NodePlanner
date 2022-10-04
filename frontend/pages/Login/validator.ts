import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email('メールの形式で入力してください。').required('入力してください。'),
  password: yup.string().required('入力してください。'),
});

export default schema;

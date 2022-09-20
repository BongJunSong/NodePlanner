import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email('메일 형식이 아닙니다.').required('이메일을 입력하세요'),
  password: yup.string().required('패스워드를 입력하세요'),
});

export default schema;

import { TextareaItem } from 'antd-mobile';
import './index.css';
import { createForm } from 'rc-form';

const CommentTextArea = ({ form }) =>{

  const { getFieldProps } = form;
  return (
  <TextareaItem
            {...getFieldProps('count')}
            className='comment'
            rows={5}
            count={100}
            placeholder="Write your comment here..."
  />
  )

}


export default createForm()(CommentTextArea);

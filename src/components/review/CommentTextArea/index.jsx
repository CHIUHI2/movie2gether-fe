import { TextareaItem } from 'antd-mobile';
import './index.css';
import { createForm } from 'rc-form';

const CommentTextArea = ({ form, setComment, comment}) =>{

  const { getFieldProps } = form;

  return (
  <TextareaItem
            {...getFieldProps('count')}
            className='comment'
            rows={5}
            count={100}
            value={comment}
            placeholder="Write your comment here..."
            onChange={content => setComment(content)}
  />
  )

}


export default createForm()(CommentTextArea);

import React from "react";
import './PostsItem.css'
import { Table } from "react-bootstrap";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const PostsItem = ({ posts, sortData }) => {
  return (
    <div >
      <Table striped bordered hover className="tableW">
        <thead className="table-item" >
          <tr>
            <th style={{width:'130px'}}>ID
              <KeyboardArrowDownIcon style={{marginLeft:'45px'}}/>
            </th>
            <th
              onClick={() => {
                sortData("title");
              }}
            >
              Заголовок
              <KeyboardArrowDownIcon style={{marginLeft:'45px'}}/>
            </th>
            <th
              onClick={() => {
                sortData("body");
              }}
            >
              Описание
              <KeyboardArrowDownIcon style={{marginLeft:'45px'}}/>
            </th>
          </tr>
        </thead>
        <tbody className="table-text" >
          {posts.map((item) => (
            <tr key={item.id} >
              <td style={{textAlign:"center"}}>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default PostsItem;
